'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
  /**
   * @api {get} /api/v1/admin/order 订单列表
   * @apiGroup admin-Order
   * @apiName getOrderList
   * @apiDescription 获取订单列表
   *
   * @apiSampleRequest /api/v1/admin/order
   * @apiUse getList
   * @apiParam {Number} [order_state] 订单状态
   * @apiParam {Number} [uid] 会员uid
   *
   * @apiUse DefineError
   * @apiSuccess {Number} id 订单ID
   * @apiSuccess {String} uid 会员openId
   * @apiSuccess {Number} payment 订单价格
   * @apiSuccess {Number} payment_type 支付方式-1在线支付-2货到付款
   * @apiSuccess {Date} pay_time 支付时间
   * @apiSuccess {Number} ship_free 邮费
   * @apiSuccess {Date} ship_time 发货时间
   * @apiSuccess {String} ship_name 快递公司
   * @apiSuccess {String} ship_number 快递单号
   * @apiSuccess {Date} pay_time 支付时间
   * @apiSuccess {Date} received_time 收货时间
   * @apiSuccess {Date} finish_time 交易完成时间
   * @apiSuccess {Date} close_time 交易关闭时间
   * @apiSuccess {Number} order_state 订单状态字典id
   * @apiSuccess {Number} status 订单状态
   * @apiSuccess {Number} refund_state 退款状态
   * @apiSuccess {Number} comment_state 评论状态
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
    const data = await ctx.service.admin.order.getOrderList(ctx.query);
    ctx.body = { code: 200, msg: '获取成功', data };
  }

  /**
   * @api {get} /api/v1/admin/order/:id 订单详情
   * @apiGroup admin-Order
   * @apiName getOrderInfo
   * @apiDescription 获取订单详情
   *
   * @apiSampleRequest /api/v1/admin/order/:id
   * @apiHeader {String} Authorization token.
   * @apiParam {Number} id 订单id
   *
   * @apiUse DefineError
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "获取成功",
   *    "data": []
   * }
   */
  async getOrderInfo() {
    const { ctx } = this;
    const data = await ctx.service.admin.order.getOrderInfo(ctx.params.id);
    ctx.body = { code: 200, msg: '获取成功', data };
  }

  /**
   * @api {put} /api/v1/admin/order/:id 修改订单
   * @apiGroup admin-Order
   * @apiName updateOrder
   * @apiDescription 修改订单
   *
   * @apiSampleRequest /api/v1/admin/order/:id
   * @apiHeader {String} Authorization token.
   * @apiParam {Number} id 订单id
   * @apiParam {String} ship_name 快递公司
   * @apiParam {String} ship_number 快递单号
   * @apiParam {Number} ship_time 发货时间
   * @apiParam {Number} order_state 订单状态字典id
   *
   * @apiParamExample {json} 请求参数格式
   * {
   *     "ship_name": "顺丰",
   *     "ship_number": "534645643",
   *     "ship_time": "",
   *     "order_state": 2
   * }
   *
   * @apiUse DefineError
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "获取成功",
   *    "data": []
   * }
   */
  async updateOrder() {
    const { ctx } = this;
    const data = await ctx.service.admin.order.updateOrder(ctx.params.id, ctx.request.body);
    if (data[0]) {
      ctx.body = { code: 200, msg: '修改成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '修改失败' };
  }
}
module.exports = OrderController;
