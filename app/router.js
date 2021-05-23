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
  router.del('/api/v1/cart', jwt, controller.user.cart.cartDelGoods);

  router.get('/api/v1/goods', controller.user.goods.getGoodsList);
  router.get('/api/v1/goods/:id', controller.user.goods.getGoodsInfo);

  router.get('/api/v1/order', jwt, controller.user.order.getOrderList);
  router.get('/api/v1/order/:id', jwt, controller.user.order.getOrderInfo);
  router.post('/api/v1/order/check', jwt, controller.user.order.setOrder);
  router.post('/api/v1/order', jwt, controller.user.order.createOrder);
  router.post('/api/v1/order/pay', jwt, controller.user.order.orderPay);

  router.get('/api/v1/address/default', jwt, controller.user.address.getDefaultAddress);
};
