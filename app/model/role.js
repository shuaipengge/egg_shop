'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const Role = app.model.define('role', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: '角色ID',
    },
    role_namme: { type: STRING, comment: '角色名称' },
    state: { type: INTEGER, comment: ' 角色状态' },
  });

  Role.associate = () => {};

  return Role;
};
