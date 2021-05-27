'use strict';

const Service = require('egg').Service;

class OrderService extends Service {
  async getOrderList(query) {
    // TODO 时间筛选 物流筛选
    const {
      ctx: { model },
    } = this;
    const { pageNum = 1, pageSize = 10, order_state, uid } = query;
    // TODO 复杂查询
    const whereOpts = {};
    if (order_state) whereOpts.order_state = order_state;
    if (uid) whereOpts.uid = uid;

    const result = await model.Order.findAndCountAll({
      limit: parseInt(pageSize),
      offset: parseInt(pageSize) * (parseInt(pageNum) - 1),
      where: whereOpts,
      distinct: true,
    });
    return { count: result.count, order: result.rows };
  }

  async getOrderInfo(id) {
    const {
      ctx: { model },
    } = this;
    const result = await model.Order.findOne({
      where: { id },
      include: [
        {
          model: model.OrderGoods,
          include: [
            {
              model: model.Goods,
            },
          ],
        },
      ],
      distinct: true,
    });

    return result;
  }

  async updateOrder(id, body) {
    // TODO 数据校验 字段限制
    const {
      ctx: { model },
    } = this;
    const result = await model.Order.update(
      body,
      { where: { id } }
    );
    return result;
  }
}

module.exports = OrderService;
