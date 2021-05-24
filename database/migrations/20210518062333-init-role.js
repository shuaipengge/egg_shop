'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;
    await queryInterface.createTable(
      'role',
      {
        id: {
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true,
          comment: '角色ID',
        },
        role_name: { type: STRING, comment: '角色名称' },
        state: { type: INTEGER, comment: ' 角色状态' },
        created_at: DATE,
        updated_at: DATE,
        deleted_at: DATE,
      },
      { comment: '角色表' }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable('role');
  },
};
