'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const OrderAddress = app.model.define('order_adderss', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    order_id: { type: STRING, comment: '订单id' },
    name: { type: STRING, comment: '姓名' },
    tel: { type: STRING, comment: '手机号码' },
    province: { type: STRING, comment: '省' },
    city: { type: STRING, comment: '市' },
    area: { type: STRING, comment: '区' },
    street: { type: STRING, comment: '街道' },
    code: { type: STRING, comment: '邮编' },
  });

  OrderAddress.associate = () => {};

  return OrderAddress;
};
