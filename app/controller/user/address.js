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
    ctx.body = { code: -1, msg: '获取失败' };
  }

  /**
   * @api {post} /api/v1/address 新增收货地址
   * @apiGroup Address
   * @apiName createAddress
   * @apiDescription 新增收货地址
   *
   * @apiSampleRequest /api/v1/address
   * @apiHeader {String} Authorization token
   * @apiParam {String} name 收货人姓名
   * @apiParam {String} tel 收货人电话
   * @apiParam {String} province 省
   * @apiParam {String} city 市
   * @apiParam {String} area 区
   * @apiParam {String} street 街道
   * @apiParam {String} code 邮编
   * @apiParam {Number} isDefault 是否默认
   *
   * @apiParamExample {json} 请求参数格式
   * {
   *     "name": "张三",
   *     "tel": "13212341234",
   *     "province": "浙江",
   *     "city": "杭州",
   *     "area": "余杭",
   *     "street": "无常街道 一社区 1动 1单元 101",
   *     "code": "123456",
   *     "isDefault": 1
   * }
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
   *    "data": { 地址 }
   * }
   */
  async createAddress() {
    const { ctx } = this;
    // TODO 校验地址
    const data = await ctx.service.user.address.createAddress(ctx.request.body);
    if (data.id) {
      ctx.body = { code: 200, msg: '创建成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '创建失败' };
  }

  /**
   * @api {put} /api/v1/address/:id 修改收货地址
   * @apiGroup Address
   * @apiName updateAddress
   * @apiDescription 修改收货地址
   *
   * @apiSampleRequest /api/v1/address/:id
   * @apiHeader {String} Authorization token
   * @apiParam {Number} id 收货地址ID
   *
   * @apiParam {String} name 收货人姓名
   * @apiParam {String} tel 收货人电话
   * @apiParam {String} province 省
   * @apiParam {String} city 市
   * @apiParam {String} area 区
   * @apiParam {String} street 街道
   * @apiParam {String} code 邮编
   * @apiParam {Number} isDefault 是否默认
   *
   * @apiParamExample {json} 请求参数格式
   * {
   *     "name": "张三",
   *     "tel": "13212341234",
   *     "province": "浙江",
   *     "city": "杭州",
   *     "area": "余杭",
   *     "street": "无常街道 一社区 1动 1单元 101",
   *     "code": "123456",
   *     "isDefault": 1
   * }
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
   *    "data": { 地址 }
   * }
   */
  async updateAddress() {
    const { ctx } = this;
    const data = await ctx.service.user.address.updateAddress(ctx.request.body, ctx.params.id);
    console.log(data);
    if (data.length > 0) {
      ctx.body = { code: 200, msg: '修改成功' };
      return;
    }
    ctx.body = { code: -1, msg: '修改失败' };
  }

  /**
   * @api {get} /api/v1/address 获取收货地址列表
   * @apiGroup Address
   * @apiName getAddressList
   * @apiDescription 获取收货地址列表
   *
   * @apiSampleRequest /api/v1/address
   * @apiHeader {String} Authorization token.
   * @apiUse getList
   *
   * @apiUse DefineError
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "添加成功"
   * }
   */
  async getAddressList() {
    const { ctx } = this;
    const { pageNum = 1, pageSize = 10 } = ctx.query;
    const data = await ctx.service.user.address.getAddressList(pageSize, pageNum);
    if (data) {
      ctx.body = { code: 200, msg: '获取成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '获取失败' };
  }
}

module.exports = AddressController;
