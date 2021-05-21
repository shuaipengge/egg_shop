'use strict';

const Service = require('egg').Service;

class GoodsService extends Service {
  async getGoodsList(query) {
    const { ctx } = this;
    const { pageNum = 1, pageSize = 10, cate_1st, cate_2nd, cate_3rd, sortByPrice } = query;
    // 拼接查询条件
    const whereOpts = {};
    let order = [];
    if (cate_1st) whereOpts.cate_1st = cate_1st;
    if (cate_2nd) whereOpts.cate_2nd = cate_2nd;
    if (cate_3rd) whereOpts.cate_3rd = cate_3rd;
    if (sortByPrice) order = [[ 'price', sortByPrice ]];

    const result = await ctx.model.Goods.findAndCountAll({
      limit: parseInt(pageSize),
      offset: parseInt(pageSize) * (parseInt(pageNum) - 1),
      order,
      attributes: [ 'id', 'name', 'price', 'hot_point', 'market_price', 'discount', 'slider', 'detail', 'inventory', 'status' ],
      where: whereOpts,
      distinct: true,
    });
    return { count: result.count, goods: result.rows };
  }

  async getGoodsInfo(id) {
    const { ctx } = this;
    const result = await ctx.model.Goods.findByPk(parseInt(id), {
      attributes: [ 'id', 'name', 'price', 'hot_point', 'market_price', 'discount', 'slider', 'detail', 'inventory', 'status' ],
    });
    return result;
  }
}
module.exports = GoodsService;
