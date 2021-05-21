'use strict';

const Service = require('egg').Service;

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
}
module.exports = OrderService;
