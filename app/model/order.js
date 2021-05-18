'use strict';

module.exports = app => {
  const { INTEGER, STRING, DECIMAL, TINYINT, DATE } = app.Sequelize;

  const Order = app.model.define('orders', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    uid: { type: STRING, comment: '用户ID' },
    payment: { type: DECIMAL, comment: '支付金额' },
    payment_type: { type: TINYINT, comment: '1 在线支付 2 货到付款' },
    pay_time: { type: DATE, comment: '支付时间' },
    ship_free: { type: DECIMAL, comment: '邮费' },
    ship_time: { type: DATE, comment: '发货时间' },
    ship_name: { type: STRING, comment: '快递公司' },
    ship_number: { type: STRING, comment: '快递单号' },
    received_time: { type: DATE, comment: '收货时间' },
    finish_time: { type: DATE, comment: '交易完成时间' },
    close_time: { type: DATE, comment: '交易关闭时间' },
    order_state: { type: INTEGER, comment: '状态字典' },
    status: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: '（1 正常，0 禁用，-1删除 ）',
    },
    refund_state: { type: TINYINT, comment: '退款状态' },
    comment_state: { type: TINYINT, comment: '评论状态' },
  });

  Order.associate = () => {};

  return Order;
};
