'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const Menu = app.model.define('menu', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: '菜单ID',
    },
    name: { type: STRING, comment: '菜单名称' },
    path: { type: STRING, comment: '菜单url' },
    pid: { type: INTEGER, comment: '父级ID' },
    menu_order: { type: INTEGER, comment: '显示顺序' },
  });

  Menu.associate = () => {};

  return Menu;
};
