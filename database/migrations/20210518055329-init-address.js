'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;
    await queryInterface.createTable('adderss', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      uid: { type: STRING, comment: '用户id' },
      name: { type: STRING, comment: '姓名' },
      tel: { type: STRING, comment: '手机号码' },
      province: { type: STRING, comment: '省' },
      city: { type: STRING, comment: '市' },
      area: { type: STRING, comment: '区' },
      street: { type: STRING, comment: '街道' },
      code: { type: STRING, comment: '邮编' },
      is_default: { type: INTEGER, comment: '是否默认' },
      created_at: DATE,
      updated_at: DATE,
      deleted_at: DATE,
    }, { comment: '收货地址表' });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('adderss');
  },
};
