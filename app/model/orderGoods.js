'use strict';

module.exports = app => {
  const { INTEGER, DECIMAL } = app.Sequelize;

  const OrderGoods = app.model.define('order-goods', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: { type: INTEGER, comment: '订单ID' },
    goods_id: { type: INTEGER, comment: '商品ID' },
    goods_num: { type: INTEGER, comment: '商品数量' },
    goods_price: { type: DECIMAL, comment: '商品价格' },
    status: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: '（1 正常，0 禁用，-1删除 ）',
    },
  });

  OrderGoods.associate = () => {};

  return OrderGoods;
};
