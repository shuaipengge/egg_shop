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

  router.get('/api/v1/swipper', user.market.getSwipper);
  router.get('/api/v1/popups', user.market.getPopups);
  router.get('/api/v1/index', user.market.getIndex);

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

  router.get('/api/v1/admin/categories', jwt, admin.categories.getCategories);
  router.get('/api/v1/admin/categories/sub/:id', jwt, admin.categories.getCategoriesSub);
  router.post('/api/v1/admin/categories', jwt, admin.categories.createCategories);
  router.put('/api/v1/admin/categories/:id', jwt, admin.categories.updateCategories);
  router.del('/api/v1/admin/categories/:id', jwt, admin.categories.deleteCategories);

  router.get('/api/v1/admin/goods', jwt, admin.goods.getGoodsList);
  router.get('/api/v1/admin/goods/:id', jwt, admin.goods.getGoodsInfo);
  router.put('/api/v1/admin/goods/:id', jwt, admin.goods.updateGoods);
  router.del('/api/v1/admin/goods/:id', jwt, admin.goods.deleteGoods);
  router.post('/api/v1/admin/goods', jwt, admin.goods.createGoods);

  router.get('/api/v1/admin/order', jwt, admin.order.getOrderList);
  router.get('/api/v1/admin/order/:id', jwt, admin.order.getOrderInfo);
  router.put('/api/v1/admin/order/:id', jwt, admin.order.updateOrder);

  router.get('/api/v1/admin/swipper', jwt, admin.market.getSwipper);
  router.post('/api/v1/admin/swipper', jwt, admin.market.createSwipper);
  router.put('/api/v1/admin/swipper/:id', jwt, admin.market.updateMarket);
  router.del('/api/v1/admin/swipper/:id', jwt, admin.market.deleteMarket);

  router.get('/api/v1/admin/popups', jwt, admin.market.getPopups);
  router.post('/api/v1/admin/popups', jwt, admin.market.createPopups);
  router.del('/api/v1/admin/popups/:id', jwt, admin.market.deleteMarket);
  router.put('/api/v1/admin/popups/:id', jwt, admin.market.updateMarket);

  router.get('/api/v1/admin/shopindex', jwt, admin.market.getIndex);
  router.post('/api/v1/admin/shopindex', jwt, admin.market.createShopindex);
  router.put('/api/v1/admin/shopindex/:id', jwt, admin.market.updateMarket);
  router.del('/api/v1/admin/shopindex/:id', jwt, admin.market.deleteMarket);

  router.post('/api/v1/admin/shopitem', jwt, admin.market.createShopitem);
  router.put('/api/v1/admin/shopitem/:id', jwt, admin.market.updateMarket);
  router.del('/api/v1/admin/shopitem/:id', jwt, admin.market.deleteMarket);

  router.get('/api/v1/admin/user', jwt, admin.user.getUserList);
  router.get('/api/v1/admin/user/:id', jwt, admin.user.getUserInfo);

  router.get('/api/v1/admin/rlogs', jwt, admin.rlogs.getRlogsList);
};
