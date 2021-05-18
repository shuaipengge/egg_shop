'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const Cart = app.model.define('carts', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uid: { type: STRING, comment: '用户ID' },
    goods_id: { type: INTEGER, comment: '商品ID' },
    goods_sum: { type: INTEGER, comment: '商品数量' },
    status: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: '（1 正常，0 禁用，-1删除 ）',
    },
  });

  Cart.associate = () => {};

  return Cart;
};
