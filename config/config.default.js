/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1621300708902_1282';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };


  // 关闭安全威胁csrf防范
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ '*' ],
  };

  // 允许跨域
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  // sequelize
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'egg-shop',
    username: 'root', // 数据库用户名
    password: '12345678', // 数据库密码
    timezone: '+08:00',
    define: {
      timestamps: true, // 自动写入时间戳 created_at updated_at
      paranoid: true, // 字段生成软删除时间戳 deleted_at
      underscored: true, // 所有驼峰命名格式化
      freezeTableName: true, // 取消数据表名复数
    },
    pool: {
      max: 10, // 连接池最大连接数量
      min: 0, // 连接池最小连接数量
      idle: 10000, // 每个线程最长等待时间
    },
  };

  // 参数校验
  config.validate = {
    enable: true,
    package: 'egg-validate',
  };

  // 密码加密
  config.bcrypt = {
    saltRounds: 10,
  };

  // jwt
  config.jwt = {
    secret: 'dfyayerwhr134kjkjeoidsf',
    expiresIn: '24h',
  };

  // redis
  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0,
    },
  };

  // alinode
  config.alinode = {
    appid: '88288',
    secret: '34076c899093997248535e7c23f3719559ac2b69',
  };


  return {
    ...config,
    ...userConfig,
  };
};
