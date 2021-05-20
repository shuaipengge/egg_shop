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
    goodsId: { type: INTEGER, comment: '商品ID' },
    goodsNum: { type: INTEGER, comment: '商品数量' },
    status: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: '（1 正常，0 禁用，-1删除 ）',
    },
  });

  Cart.associate = () => {
    Cart.belongsTo(app.model.Goods, {
      foreignKey: 'goodsId',
      targetKey: 'id',
    });
  };

  return Cart;
};
