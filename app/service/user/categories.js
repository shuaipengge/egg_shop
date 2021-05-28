'use strict';

const Service = require('egg').Service;

class CategoriesService extends Service {
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
}

module.exports = CategoriesService;
