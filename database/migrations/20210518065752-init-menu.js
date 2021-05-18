'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable(
      'menu',
      {
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
        created_at: DATE,
        updated_at: DATE,
        deleted_at: DATE,
      },
      { comment: '权限菜单设计表' }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable('menu');
  },
};
