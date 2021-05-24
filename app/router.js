'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  const { user, admin } = controller;

  router.get('/', controller.home.index);

  // router.get('/test', controller.home.test);

  router.post('/api/v1/user/token', user.user.getToken);
  router.put('/api/v1/user', jwt, user.user.updateUserInfo);

  router.get('/api/v1/cart', jwt, user.cart.getCartList);
  router.post('/api/v1/cart', jwt, user.cart.cartAddGoods);
  router.del('/api/v1/cart', jwt, user.cart.cartDelGoods);

  router.get('/api/v1/goods', user.goods.getGoodsList);
  router.get('/api/v1/goods/:id', user.goods.getGoodsInfo);

  router.get('/api/v1/order', jwt, user.order.getOrderList);
  router.get('/api/v1/order/:id', jwt, user.order.getOrderInfo);
  router.post('/api/v1/order/check', jwt, user.order.setOrder);
  router.post('/api/v1/order', jwt, user.order.createOrder);
  router.post('/api/v1/order/pay', jwt, user.order.orderPay);

  router.get('/api/v1/address/default', jwt, user.address.getDefaultAddress);
  router.post('/api/v1/address', jwt, user.address.createAddress);
  router.get('/api/v1/address', jwt, user.address.getAddressList);
  router.put('/api/v1/address/:id', jwt, user.address.updateAddress);

  router.post('/api/v1/admin/menu', admin.menu.createMenu);
  router.put('/api/v1/admin/menu/:id', admin.menu.updateMenu);
  router.del('/api/v1/admin/menu/:id', admin.menu.deleteMenu);
  router.get('/api/v1/admin/menu/sub/:id', admin.menu.getSubMenu);

  router.get('/api/v1/admin/role', admin.role.getRoleList);
  router.post('/api/v1/admin/role', admin.role.createRole);
  router.put('/api/v1/admin/role/:id', admin.role.updateRole);
  router.del('/api/v1/admin/role/:id', admin.role.deleteRole);
};
