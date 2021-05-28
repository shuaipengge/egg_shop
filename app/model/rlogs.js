'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const Rlogs = app.model.define('rlogs', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: '日志ID',
    },
    uid: { type: INTEGER, comment: 'UserID' },
    username: { type: STRING, comment: '用户名' },
    method: { type: STRING, comment: '请求方法' },
    path: { type: STRING, comment: '请求路径' },
    query: { type: STRING, comment: '查询参数' },
    ip: { type: STRING, comment: '来源IP' },
  });

  Rlogs.associate = () => {};

  return Rlogs;
};
