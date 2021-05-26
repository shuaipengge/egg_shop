'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller: { user, admin },
    jwt,
  } = app;

  // router.get('/', controller.home.index);

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

  router.get('/api/v1/admin/admin', jwt, admin.admin.getAdminList);
  router.get('/api/v1/admin/admin/:id', jwt, admin.admin.getAdminInfo);
  router.del('/api/v1/admin/admin/:id', jwt, admin.admin.deleteAdmin);
  router.put('/api/v1/admin/admin/:id', jwt, admin.admin.updateAdmin);
  router.post('/api/v1/admin/admin/login', admin.admin.adminLogin);
  router.post('/api/v1/admin/admin/register', admin.admin.adminRegister);

  router.post('/api/v1/admin/menu', jwt, admin.menu.createMenu);
  router.put('/api/v1/admin/menu/:id', jwt, admin.menu.updateMenu);
  router.del('/api/v1/admin/menu/:id', jwt, admin.menu.deleteMenu);
  router.get('/api/v1/admin/menu/sub/:id', jwt, admin.menu.getSubMenu);

  router.get('/api/v1/admin/role', jwt, admin.role.getRoleList);
  router.post('/api/v1/admin/role', jwt, admin.role.createRole);
  router.put('/api/v1/admin/role/:id', jwt, admin.role.updateRole);
  router.del('/api/v1/admin/role/:id', jwt, admin.role.deleteRole);
  router.post('/api/v1/admin/roleMenu', jwt, admin.role.createRoleMenu);
  router.del('/api/v1/admin/roleMenu', jwt, admin.role.deleteRoleMenu);
  router.get('/api/v1/admin/roleMenu/:id', jwt, admin.role.getRoleMenu);

  router.get('/api/v1/admin/categories', admin.categories.getCategories);
  router.get('/api/v1/admin/categories/sub/:id', admin.categories.getCategoriesSub);
  router.post('/api/v1/admin/categories', admin.categories.createCategories);
  router.put('/api/v1/admin/categories/:id', admin.categories.updateCategories);
  router.del('/api/v1/admin/categories/:id', admin.categories.deleteCategories);
};
