'use strict';

const Service = require('egg').Service;

class GoodsService extends Service {
  async getGoodsList(pageSize, pageNum) {
    const { ctx } = this;
    const result = await ctx.model.Goods.findAndCountAll({
      limit: parseInt(pageSize),
      offset: parseInt(pageSize) * (parseInt(pageNum) - 1),
      attributes: [ 'id', 'name', 'price', 'hot_point', 'market_price', 'discount', 'slider', 'detail', 'inventory' ],
      where: { status: 1 },
      distinct: true,
    });
    return { count: result.count, goods: result.rows };
  }

  async getGoodsInfo(id) {
    const { ctx } = this;
    const result = await ctx.model.Goods.findByPk(parseInt(id), {
      attributes: [ 'id', 'name', 'price', 'hot_point', 'market_price', 'discount', 'slider', 'detail', 'inventory' ],
    });
    return result;
  }
}
module.exports = GoodsService;
