'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;
    await queryInterface.createTable(
      'admin_role',
      {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        admin_id: { type: STRING, comment: '管理员ID' },
        role_id: { type: STRING, comment: '角色ID' },
        created_at: DATE,
        updated_at: DATE,
        deleted_at: DATE,
      },
      { comment: '管理员角色表' }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable('admin_role');
  },
};
