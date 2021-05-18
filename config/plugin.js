'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  cors: {
    enable: false,
    package: 'egg-cors',
  },
  redis: {
    enable: false,
    package: 'egg-redis',
  },
  alinode: {
    enable: true,
    package: 'egg-alinode',
  },
};
