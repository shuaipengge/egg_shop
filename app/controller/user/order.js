'use strict';

const Controller = require('egg').Controller;

class GoodsController extends Controller {
  /**
   * @api {get} /api/v1/order 订单列表
   * @apiGroup Order
   * @apiName getOrderList
   * @apiDescription 获取订单列表
   *
   * @apiSampleRequest /api/v1/order
   * @apiHeader {String} Authorization token.
   * @apiUse getList
   * @apiParam {Number} status 订单状态：0-待付款，3-待发货，4-待收货，5-待评价
   *
   * @apiUse DefineError
   *
   * @apiSuccess {Number} id 商品ID
   * @apiSuccess {Number} order_id 订单ID
   * @apiSuccess {String} name 商品名称
   * @apiSuccess {String} img_md 商品图片
   * @apiSuccess {Number} price 商品价格
   * @apiSuccess {Number} goods_num 商品数量
   *
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "获取成功"
   *    "data": {
   *      "count": 10,
   *      "goods": []
   *    }
   * }
   */
  async getOrderList() {
    const { ctx } = this;
    const result = await ctx.service.user.order.getOrderList(ctx.query);
    ctx.body = { code: 200, msg: '获取成功', data: result };
  }

  /**
   * @api {get} /api/v1/order/:id 订单详情
   * @apiGroup Order
   * @apiName getOrderInfo
   * @apiDescription 获取订单详情
   *
   * @apiSampleRequest /api/v1/order/:id
   * @apiHeader {String} Authorization token.
   * @apiParam {Number} id 订单ID
   *
   * @apiUse DefineError
   *
   * @apiSuccess {Number} id 商品ID
   * @apiSuccess {Number} payment 订单价格
   * @apiSuccess {Date} pay_time 支付时间
   * @apiSuccess {Number} order_id 订单ID
   * @apiSuccess {Number} ship_number 快递单号
   * @apiSuccess {String} ship_name 物流名称
   * @apiSuccess {String} name 商品名称
   * @apiSuccess {String} img_md 商品图片
   * @apiSuccess {Number} price 商品价格
   * @apiSuccess {Number} goods_num 商品数量
   *
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "获取成功"
   *    "data": 订单内容
   * }
   */
  async getOrderInfo() {
    // TODO 检查此订单是否存在
    const { ctx } = this;
    const result = await ctx.service.user.order.getOrderInfo(ctx.params.id);
    if (result) {
      ctx.body = { code: 200, msg: '订单详情', data: result };
      return;
    }
    ctx.body = { code: -1, msg: '获取失败' };
  }

  /**
   * @api {post} /api/v1/order 确认订单
   * @apiGroup Order
   * @apiName SettleOrder
   * @apiDescription 点击结算之后传参至确认订单，此时api返回确认订单页面需要的数据，此时订单页面需要用户确认商品价格、数量、支付金额、收货地址
   *
   * @apiSampleRequest /api/v1/order
   * @apiHeader {String} Authorization token
   *
   * @apiParam {Number[]} goods 欲购买的商品id
   *
   * @apiParamExample {json} 请求参数格式
   * {
   *    "goods": [id1, id2, id3]
   * }
   *
   * @apiUse DefineError
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "查询成功",
   *    "data": {
   *      address, goods
   *    }
   * }
   */
  async setOrder() {
    const { ctx } = this;
    const result = await ctx.service.user.order.setOrder(ctx.request.body);
    if (result) {
      ctx.body = { code: 200, msg: '订单详情', data: result };
      return;
    }
    ctx.body = { code: -1, msg: '获取失败' };
  }
}

module.exports = GoodsController;
