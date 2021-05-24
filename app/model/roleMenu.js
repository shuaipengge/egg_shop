'use strict';

module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const RoleMenu = app.model.define('role_menu', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    role_id: { type: INTEGER, comment: '角色ID' },
    menu_id: { type: INTEGER, comment: '权限ID' },
  });

  RoleMenu.associate = () => {
    RoleMenu.belongsTo(app.model.Menu, {
      foreignKey: 'menu_id',
      targetKey: 'id',
    });
  };

  return RoleMenu;
};
