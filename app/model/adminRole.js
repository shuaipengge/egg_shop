'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const AdminRole = app.model.define('admin_role', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    admin_id: { type: STRING, comment: '管理员ID' },
    role_id: { type: STRING, comment: '角色ID' },
  });

  AdminRole.associate = () => {};

  return AdminRole;
};
