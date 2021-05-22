'use strict';

const Service = require('egg').Service;
const { Op } = require('sequelize');

class OrderService extends Service {
  async getOrderList(query) {
    const { ctx } = this;
    const { openid } = ctx.state.user;
    const { pageNum = 1, pageSize = 10, status = 0 } = query;

    const orderList = await ctx.app.model.Order.findAll({
      limit: parseInt(pageSize),
      offset: parseInt(pageSize) * (parseInt(pageNum) - 1),
      attributes: [ 'id', 'payment', 'order_state', 'createdAt' ],
      where: { uid: openid, order_state: status },
      include: [
        {
          model: ctx.model.OrderGoods,
          attributes: [ 'goods_id', 'goods_num', 'goods_price' ],
          include: [
            {
              model: ctx.model.Goods,
              attributes: [ 'id', 'name', 'img_md' ],
            },
          ],
        },
      ],
    });

    return { count: orderList.length, goods: orderList };
  }

  async getOrderInfo(id) {
    const { ctx } = this;
    const { openid } = ctx.state.user;
    const result = await ctx.app.model.Order.findOne({
      attributes: {
        exclude: [ 'deletedAt' ],
      },
      where: { uid: openid, id },
      include: [
        {
          model: ctx.model.OrderGoods,
          attributes: [ 'goods_id', 'goods_num', 'goods_price' ],
          include: [
            {
              model: ctx.model.Goods,
              attributes: [ 'id', 'name', 'img_md' ],
            },
          ],
        },
      ],
    });

    return result;
  }

  async setOrder(body) {
    const { ctx } = this;
    const { openid } = ctx.state.user;
    const { goods } = body;
    const address = await ctx.service.user.address.getDefaultAddress();
    // 从购物车查询, (正常加入购物车status=1) (直接购买时 将商品加购物车 status=2,生成订单时，根据商品id清理购物车)
    const goodsList = await ctx.model.Carts.findAndCountAll({
      attributes: {
        exclude: [ 'deletedAt', 'createdAt', 'updatedAt', 'goodsId', 'uid' ],
      },
      where: { goods_id: { [Op.in]: goods }, uid: openid },
      include: [
        {
          model: ctx.model.Goods,
          attributes: [ 'id', 'name', 'img_md', 'price', 'status' ],
          // 过滤掉下架商品
          where: { status: { [Op.in]: [ 1, 2 ] } },
          raw: true, // 返回数组
        },
      ],
    });
    let pSum = 0;
    let nSum = 0;
    const priceSum = goodsList.rows.reduce((prev, next) => {
      if (prev.good) pSum = prev.goodsNum * parseInt(prev.good.price);
      if (next.good) nSum += next.goodsNum * parseInt(next.good.price);
      return pSum + nSum;
    });
    return { address, count: goodsList.count, priceSum, goods: goodsList.rows };
  }

  async createOrder(body) {
    const { ctx } = this;
    const { openid } = ctx.state.user;
    const { goodsList, addressId, payment } = body;
    // 1.取出商品idList便于 查询 IN
    const queryId = goodsList.map(goods => {
      return goods.id;
    });
    const inventoryList = await ctx.model.Goods.findAll({
      attributes: [ 'id', 'price', 'inventory' ],
      where: { id: { [Op.in]: queryId } },
      raw: true, // 返回数组
    });

    // 判断价格是否一致
    let priceSum = 0;
    for (let i = 0; i < goodsList.length; i++) {
      priceSum += parseInt(goodsList[i].num) * parseInt(inventoryList[i].price);
    }
    if (priceSum !== payment) return { code: -1, msg: '商品价格计算异常' };

    // 判断库存是否充足
    const isAllPassed = inventoryList.every((goods, index) => {
      const isPassed = goods.inventory >= goodsList[index].num;
      if (!isPassed) body.ErrGoodsId = goodsList[index].id;
      return isPassed;
    });
    if (!isAllPassed) return { code: -1, msg: `${body.ErrGoodsId} 库存不足` };

    // 开始一个事务
    const t = await ctx.model.transaction();
    try {
      // 减商品库存
      let sql = 'UPDATE goods SET inventory = CASE id ';
      goodsList.forEach(item => {
        sql += `WHEN ${item.id} THEN inventory - ${item.num} `;
      });
      sql += `END WHERE id in (${queryId})`;
      const [ results ] = await ctx.model.query(sql, { transaction: t });
      if (results.changedRows < goodsList.length) throw new Error('changedRows Error 商品库存更新异常');

      // 写入order
      const newOrder = await ctx.model.Order.create({ uid: openid, payment }, { transaction: t });
      if (!newOrder.id) throw new Error('createOrder Error 生成订单异常');

      // 写入order_address
      const address = await ctx.model.Address.findByPk(addressId);
      if (!address.id) throw new Error('createOrder Error 收货地址异常');
      const { name, tel, province, city, area, street, code } = address;
      const newOrderAddress = await ctx.model.OrderAddress.create({
        order_id: newOrder.id,
        name, tel, province, city, area, street, code,
      }, { transaction: t });
      if (!newOrderAddress.id) throw new Error('createOrderAddress Error 订单收货地址存储异常');

      // 写入order_goods
      const orderGoodsList = [];
      for (let i = 0; i < goodsList.length; i++) {
        const order_goods = {
          order_id: newOrder.id,
          goods_id: goodsList[i].id,
          goods_num: goodsList[i].num,
          goods_price: inventoryList[i].price,
        };
        orderGoodsList.push(order_goods);
      }
      const captains = await ctx.model.OrderGoods.bulkCreate(orderGoodsList, { transaction: t });
      if (captains.length !== orderGoodsList.length) throw new Error('orderGoods changedRows Error 订单商品入库异常');

      // 更新购物车
      const clearCart = await ctx.model.Carts.destroy({
        where: { uid: openid, goodsId: { [Op.in]: queryId } },
        transaction: t,
      });
      if (clearCart <= 0) throw new Error('clearCart changedRows Error 更新购物车异常');

      // 返回结果
      await t.commit();
      return { code: 200, msg: '下单成功', data: newOrder };

    } catch (err) {
      ctx.logger.error(err);
      await t.rollback();
      return { code: -1, msg: err.message };
    }
  }
}
module.exports = OrderService;
