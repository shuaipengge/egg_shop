'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const Categories = app.model.define('categories', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: STRING, comment: '分类名称' },
    pid: { type: INTEGER, comment: '父级ID' },
    level: { type: INTEGER, comment: '层级' },
    img: { type: STRING, comment: '图标url' },
  });

  Categories.associate = () => {};

  return Categories;
};
