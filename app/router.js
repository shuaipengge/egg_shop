'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/', controller.home.index);

  router.get('/test', controller.home.test);

  router.post('/api/v1/user/token', controller.user.user.getToken);
  router.put('/api/v1/user', jwt, controller.user.user.updateUserInfo);

  router.get('/api/v1/cart', jwt, controller.user.cart.getCartList);
  router.post('/api/v1/cart', jwt, controller.user.cart.cartAddGoods);
};
