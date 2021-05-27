'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;
    await queryInterface.createTable(
      'rlogs',
      {
        id: {
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true,
          comment: '日志ID',
        },
        uid: { type: INTEGER, comment: 'UserID' },
        username: { type: STRING, comment: '用户名' },
        method: { type: STRING, comment: '请求方法' },
        path: { type: STRING, comment: '请求路径' },
        query: { type: STRING, comment: '查询参数' },
        ip: { type: STRING, comment: '来源IP' },
        created_at: DATE,
        updated_at: DATE,
        deleted_at: DATE,
      },
      { comment: '请求日志表' }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable('rlogs');
  },
};
