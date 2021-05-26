'use strict';

const Service = require('egg').Service;

class GoodsService extends Service {
  async getCategories() {
    const {
      ctx: { model },
    } = this;
    const result = await model.Categories.findAll();
    return result;
  }

  async getCategoriesSub(id) {
    const {
      ctx: { model },
    } = this;
    const result = await model.Categories.findAll({
      where: { pid: id },
    });
    return result;
  }

  async createCategories(body) {
    const {
      ctx: { model },
    } = this;
    const result = await model.Categories.create(body);
    return result;
  }

  async updateCategories(id, body) {
    const {
      ctx: { model },
    } = this;
    const result = await model.Categories.update(body, {
      where: { id },
    });
    return result;
  }

  async deleteCategories(id) {
    const {
      ctx: { model },
    } = this;
    const result = await model.Categories.destroy({
      where: { id },
    });
    return result;
  }
}

module.exports = GoodsService;
