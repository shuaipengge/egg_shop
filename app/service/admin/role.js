'use strict';

const Service = require('egg').Service;

class RoleService extends Service {
  async getRoleList() {
    const {
      ctx: { model },
    } = this;
    const result = await model.Role.findAll();
    return result;
  }

  async createRole(body) {
    const {
      ctx: { model },
    } = this;
    const result = await model.Role.create({ role_name: body.name });
    return result;
  }

  async updateRole(id, body) {
    const {
      ctx: { model },
    } = this;
    const result = await model.Role.update(
      { role_name: body.name },
      { where: { id } }
    );
    return result;
  }

  async deleteRole(id) {
    const {
      ctx: { model },
    } = this;
    const result = await model.Role.destroy({
      where: {
        id,
      },
    });
    return result;
  }

  async createRoleMenu(body) {
    const {
      ctx: { model },
    } = this;
    let result = await model.RoleMenu.findOne({
      where: body,
    });
    if (result) return result;
    result = await model.RoleMenu.create(body);
    return result;
  }

  async deleteRoleMenu(body) {
    const {
      ctx: { model },
    } = this;
    const result = await model.RoleMenu.destroy({
      where: { ...body },
    });
    return result;
  }
}

module.exports = RoleService;
