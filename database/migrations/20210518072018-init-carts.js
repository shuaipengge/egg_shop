'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable(
      'carts',
      {
        id: {
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        uid: { type: STRING, comment: '用户ID' },
        goods_id: { type: INTEGER, comment: '商品ID' },
        goods_num: { type: INTEGER, comment: '商品数量' },
        status: {
          type: INTEGER,
          allowNull: false,
          defaultValue: 1,
          comment: '（1 正常，0 禁用，-1删除 ）',
        },
        created_at: DATE,
        updated_at: DATE,
        deleted_at: DATE,
      },
      { comment: '购物车表' }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable('carts');
  },
};
