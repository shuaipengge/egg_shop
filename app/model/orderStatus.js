'use strict';

module.exports = app => {
  const { INTEGER, STRING, TINYINT } = app.Sequelize;

  const OrderStatus = app.model.define('order_status', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    code: { type: TINYINT, comment: 'code' },
    name: { type: STRING, comment: '名称' },
    text: { type: STRING, comment: 'text' },
  });

  OrderStatus.associate = () => {};

  return OrderStatus;
};
