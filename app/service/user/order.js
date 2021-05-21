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
        exclude: [ 'deletedAt', 'createdAt', 'updatedAt', 'goodsId' ],
      },
      where: { goods_id: { [Op.in]: goods }, uid: openid },
      include: [
        {
          model: ctx.model.Goods,
          attributes: [ 'id', 'name', 'img_md', 'price', 'status' ],
          // 过滤掉下架商品
          where: { status: { [Op.in]: [ 1, 2 ] } },
        },
      ],
    });
    return { address, count: goodsList.count, goods: goodsList.rows };
  }
}
module.exports = OrderService;
