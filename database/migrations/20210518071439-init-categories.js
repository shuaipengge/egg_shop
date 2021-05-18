'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable(
      'categories',
      {
        id: {
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: { type: STRING, comment: '分类名称' },
        pid: { type: INTEGER, comment: '父级ID' },
        level: { type: INTEGER, comment: '层级' },
        img: { type: STRING, comment: '图标url' },
        created_at: DATE,
        updated_at: DATE,
        deleted_at: DATE,
      },
      { comment: '商品分类表' }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable('categories');
  },
};
