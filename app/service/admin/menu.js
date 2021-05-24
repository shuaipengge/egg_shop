'use strict';

const Service = require('egg').Service;

class MenuService extends Service {
  async createMenu(data) {
    const { ctx } = this;
    const { name, path, pid, order } = data;
    const result = await ctx.model.Menu.create({
      name,
      path,
      pid,
      menu_order: order,
    });
    return result;
  }

  async updateMenu(id, data) {
    const { ctx } = this;
    const result = await ctx.model.Menu.update(data, {
      where: {
        id,
      },
    });
    return result;
  }

  async deleteMenu(id) {
    const { ctx } = this;
    const result = await ctx.model.Menu.destroy({
      where: {
        id,
      },
    });
    return result;
  }

  async getSubMenu(id) {
    const { ctx } = this;
    const result = await ctx.model.Menu.findAll({
      order: [[ 'menu_order', 'desc' ]],
      where: {
        pid: id,
      },
    });
    return result;
  }
}

module.exports = MenuService;
