'use strict';

const Controller = require('egg').Controller;

class CartController extends Controller {
  /**
   * @api {get} /api/v1/cart 购物车列表
   * @apiGroup Cart
   * @apiName getCart
   * @apiDescription 获取购物车内容
   *
   * @apiSampleRequest /api/v1/cart
   * @apiHeader {String} Authorization token.
   * @apiUse getList
   *
   * @apiUse DefineError
   * @apiSuccess {Number} goodsId 商品ID
   * @apiSuccess {String} img 商品图片
   * @apiSuccess {String} name 商品名称
   * @apiSuccess {Number} price 商品价格
   * @apiSuccess {Number} goodsSum 商品件数
   * @apiSuccess {Number} status 商品状态（1 在售，2 售磬，3 下架）
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "获取成功"
   *    "data": {
   *      count: number,
   *      goods: 商品列表
   *    }
   * }
   */
  async getCartList() {
    const { ctx } = this;
    const { pageNum = 1, pageSize = 10 } = ctx.query;
    const result = await ctx.service.user.cart.getCartList(pageSize, pageNum);
    ctx.body = { code: 200, msg: '获取成功', data: result };
  }

  /**
   * @api {post} /api/v1/cart 购物车添加商品
   * @apiGroup Cart
   * @apiName CartAddGoods
   * @apiDescription 购物车添加商品
   *
   * @apiSampleRequest /api/v1/cart
   * @apiHeader {String} Authorization token.
   *
   * @apiParam {Number} goodsId 商品ID
   * @apiParam {Number} goodsNum 商品个数
   * @apiParamExample {json} 请求参数格式:
   * {
   *    "goodsId": 1,
   *    "goodsNum": 3
   * }
   *
   * @apiUse DefineError
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "添加成功"
   * }
   */
  async cartAddGoods() {
    // TODO 检查此商品是否存在且在售中
    const { ctx } = this;
    const { goodsId, goodsNum } = ctx.request.body;
    const result = await ctx.service.user.cart.cartAddGoods(goodsId, goodsNum);
    if (result) {
      ctx.body = { code: 200, msg: '添加成功' };
      return;
    }
    ctx.body = { code: -1, msg: '添加失败' };
  }

  /**
   * @api {delete} /api/v1/cart 删除购物车商品
   * @apiGroup Cart
   * @apiName CartDelGoods
   * @apiDescription 购物车删除商品
   *
   * @apiSampleRequest /api/v1/cart
   * @apiHeader {String} Authorization token.
   *
   * @apiParam {Number} goodsId 商品ID
   * @apiParamExample {json} 请求参数格式:
   * {
   *    "goodsId": 1
   * }
   *
   * @apiUse DefineError
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "删除成功"
   * }
   */
  async cartDelGoods() {
    // TODO 检查此商品是否存在
    const { ctx } = this;
    const { goodsId } = ctx.request.body;
    const result = await ctx.service.user.cart.cartDelGoods(goodsId);
    if (result) {
      ctx.body = { code: 200, msg: '删除成功' };
      return;
    }
    ctx.body = { code: -1, msg: '删除失败' };
  }
}

module.exports = CartController;
