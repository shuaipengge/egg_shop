'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;
    await queryInterface.createTable('order_adderss', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      order_id: { type: STRING, comment: '订单id' },
      name: { type: STRING, comment: '姓名' },
      tel: { type: STRING, comment: '手机号码' },
      province: { type: STRING, comment: '省' },
      city: { type: STRING, comment: '市' },
      area: { type: STRING, comment: '区' },
      street: { type: STRING, comment: '街道' },
      code: { type: STRING, comment: '邮编' },
      created_at: DATE,
      updated_at: DATE,
      deleted_at: DATE,
    }, { comment: '订单地址表' });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('order_adderss');
  },
};
