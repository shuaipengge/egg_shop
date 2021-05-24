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

  async getRoleMenu(id) {
    const {
      ctx: { model },
    } = this;
    const menuList = await model.Menu.findAll({
      distinct: true,
      raw: true,
    });
    const menu = await model.RoleMenu.findAll({
      attributes: [],
      where: { role_id: id },
      include: [{ model: model.Menu }],
      distinct: true,
      raw: true,
    });

    // 标记菜单选择状态
    const allMenu = menuList.map(item => {
      const flag = menu.find(element => {
        return element['menu.id'] === item.id;
      });
      return flag ? item : null;
    });

    // 筛选出一级菜单
    const menu_1st = menuList.filter(item => (item.pid === 0 ? item : null));

    // 递归循环数据
    const praseToTree = array => {
      array.forEach(parent => {
        parent.children = [];
        allMenu.forEach(child => {
          if (child && child.pid === parent.id) {
            parent.children.push(child);
          }
        });
        praseToTree(parent.children);
      });
    };
    praseToTree(menu_1st);

    return menu_1st;
  }
}

module.exports = RoleService;
