'use strict';

const Service = require('egg').Service;

class GoodsService extends Service {
  async getGoodsList(query) {
    const {
      ctx: { model },
    } = this;
    const {
      pageNum = 1,
      pageSize = 10,
      cate_1st,
      cate_2nd,
      cate_3rd,
      sortByPrice,
    } = query;
    // TODO 复杂查询
    const whereOpts = {};
    let order = [];
    if (cate_1st) whereOpts.cate_1st = cate_1st;
    if (cate_2nd) whereOpts.cate_2nd = cate_2nd;
    if (cate_3rd) whereOpts.cate_3rd = cate_3rd;
    if (sortByPrice) order = [[ 'price', sortByPrice ]];

    const result = await model.Goods.findAndCountAll({
      limit: parseInt(pageSize),
      offset: parseInt(pageSize) * (parseInt(pageNum) - 1),
      order,
      where: whereOpts,
      distinct: true,
    });
    return { count: result.count, goods: result.rows };
  }

  async getGoodsInfo(id) {
    const {
      ctx: { model },
    } = this;
    const result = await model.Goods.findByPk(parseInt(id));
    return result;
  }

  async createGoods(body) {
    // TODO 校验数据
    const {
      ctx: { model },
    } = this;
    const result = await model.Goods.create(body);
    return result;
  }

  async updateGoods(id, body) {
    // TODO 校验数据
    const {
      ctx: { model },
    } = this;
    const result = await model.Goods.update(body, {
      where: { id },
    });
    return result;
  }

  async deleteGoods(id) {
    const {
      ctx: { model },
    } = this;
    const result = await model.Goods.destroy({
      where: { id },
    });
    return result;
  }
}

module.exports = GoodsService;
