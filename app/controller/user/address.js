'use strict';

const Controller = require('egg').Controller;

class AddressController extends Controller {
  /**
   * @api {get} /api/v1/address/default 获取默认地址
   * @apiGroup Address
   * @apiName getDefaultAddress
   * @apiDescription 获取默认收货地址
   *
   * @apiSampleRequest /api/v1/address/default
   * @apiHeader {String} Authorization token
   *
   * @apiUse DefineError
   *
   * @apiSuccess {Number} goodsId 商品ID
   * @apiSuccess {String} name 收货人姓名
   * @apiSuccess {String} tel 收货人电话
   * @apiSuccess {String} province 省、市、区、街道、邮编...
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "查询成功",
   *    "data": { 默认地址 }
   * }
   */
  async getDefaultAddress() {
    const { ctx } = this;
    const data = await ctx.service.user.address.getDefaultAddress();
    if (data) {
      ctx.body = { code: 200, msg: '获取成功', data };
      return;
    }
    ctx.body = { code: 200, msg: '获取失败' };
  }
}

module.exports = AddressController;
