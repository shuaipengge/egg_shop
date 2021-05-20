'use strict';

module.exports = app => {
  const { INTEGER, STRING, DECIMAL, TEXT } = app.Sequelize;

  const Goods = app.model.define('goods', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cate_1st: { type: INTEGER, comment: '一级分类ID' },
    cate_2nd: { type: INTEGER, comment: '二级分类ID' },
    cate_3rd: { type: INTEGER, comment: '三级分类ID' },
    name: { type: STRING, comment: '商品名称' },
    hot_point: { type: STRING, comment: '商品热点描述' },
    price: { type: DECIMAL, comment: '商品价格' },
    market_price: { type: DECIMAL, comment: '市场价格' },
    cost: { type: DECIMAL, comment: '成本价格' },
    discount: { type: DECIMAL, comment: '折扣' },
    inventory: { type: INTEGER, comment: '库存' },
    article_no: { type: INTEGER, comment: '货号' },
    img_lg: { type: STRING, comment: '商品主图-大图' },
    img_md: { type: STRING, comment: '商品主图-小图' },
    slider: { type: STRING, comment: '商品轮播图片' },
    brand: { type: STRING, comment: '商品品牌' },
    detail: { type: TEXT, comment: '商品详情' },
    freight: { type: DECIMAL, comment: '商品运费' },
    status: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: '（1 正常，0 禁用，-1删除 ）',
    },
  });

  Goods.associate = () => {};

  return Goods;
};
