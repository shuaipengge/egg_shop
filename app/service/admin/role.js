'use strict';

const Service = require('egg').Service;

class RoleService extends Service {
  async getRoleList() {
    const { ctx } = this;
    const result = await ctx.model.Role.findAll();
    return result;
  }

  async createRole(body) {
    const { ctx } = this;
    const result = await ctx.model.Role.create({ role_name: body.name });
    return result;
  }

  async updateRole(id, body) {
    const { ctx } = this;
    const result = await ctx.model.Role.update(
      { role_name: body.name },
      { where: { id } }
    );
    return result;
  }

  async deleteRole(id) {
    const { ctx } = this;
    const result = await ctx.model.Role.destroy({
      where: {
        id,
      },
    });
    return result;
  }
}

module.exports = RoleService;
