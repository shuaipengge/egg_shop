'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const Market = app.model.define('market', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: 'ID',
    },
    goods_id: { type: INTEGER, comment: '商品id' },
    text: { type: STRING, comment: '名称' },
    img_url: { type: STRING, comment: '图片url' },
    path: { type: STRING, comment: '链接地址' },
    type: { type: STRING, comment: '类型swipper|item' },
    pid: { type: INTEGER, comment: '父级id' },
    market_order: { type: INTEGER, comment: '排序权重' },
  });

  Market.associate = () => {};

  return Market;
};
