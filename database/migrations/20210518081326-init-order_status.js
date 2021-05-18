'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, TINYINT, DATE } = Sequelize;
    await queryInterface.createTable(
      'order_status',
      {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        code: { type: TINYINT, comment: 'code' },
        name: { type: STRING, comment: '名称' },
        text: { type: STRING, comment: 'text' },
        created_at: DATE,
        updated_at: DATE,
        deleted_at: DATE,
      },
      { comment: '订单状态表' }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable('order_status');
  },
};
