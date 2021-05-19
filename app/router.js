'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/test', controller.home.test);

  router.post('/api/v1/user/token', controller.user.getToken);
};
