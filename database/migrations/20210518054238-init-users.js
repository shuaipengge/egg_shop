'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, FLOAT } = Sequelize;
    await queryInterface.createTable(
      'users',
      {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        nick_name: { type: STRING, comment: '用户名' },
        sex: {
          type: INTEGER,
          allowNull: false,
          defaultValue: 3,
          comment: '性别（1 男性，2 女性，3 保密）',
        },
        avatar: { type: STRING, comment: '头像url' },
        tel: { type: STRING, comment: '手机号码' },
        country: { type: STRING, comment: '国家' },
        province: { type: STRING, comment: '省' },
        city: { type: STRING, comment: '市' },
        openid: { type: STRING, comment: '小程序唯一用户表示' },
        session_key: { type: STRING, comment: '会话密钥' },
        birthday: { type: DATE, comment: '生日' },
        state: { type: INTEGER, comment: '会员状态' },
        pid: { type: INTEGER, comment: '推荐人' },
        lever: { type: INTEGER, comment: '会员等级' },
        integral: { type: INTEGER, comment: '会员积分' },
        latitude: { type: FLOAT, comment: '维度' },
        longitude: { type: FLOAT, comment: '经度' },
        created_at: DATE,
        updated_at: DATE,
        deleted_at: DATE,
      },
      { comment: '会员表' }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
