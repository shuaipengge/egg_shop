'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE } = Sequelize;
    await queryInterface.createTable(
      'role_menu',
      {
        id: {
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        role_id: { type: INTEGER, comment: '角色ID' },
        menu_id: { type: INTEGER, comment: '权限ID' },
        created_at: DATE,
        updated_at: DATE,
        deleted_at: DATE,
      },
      { comment: '角色权限设计表' }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable('role_menu');
  },
};
