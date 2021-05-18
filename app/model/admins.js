'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;

  const Admin = app.model.define('admins', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: STRING, comment: '用户名' },
    password: { type: STRING, comment: '密码' },
    nickname: { type: STRING, comment: '昵称' },
    sex: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 3,
      comment: '性别（1 男性，2 女性，3 保密）',
    },
    avatar: { type: STRING, comment: '头像url' },
    tel: { type: STRING, comment: '手机号码' },
    login_count: { type: INTEGER, comment: '登陆次数' },
    login_time: { type: DATE, comment: '登陆时间' },
    state: { type: INTEGER, comment: '账号状态' },
  });

  Admin.associate = () => {};

  return Admin;
};
