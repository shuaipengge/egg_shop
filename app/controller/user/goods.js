'use strict';

const Controller = require('egg').Controller;

class GoodsController extends Controller {
  /**
   * @api {get} /api/v1/goods 商品列表
   * @apiGroup Goods
   * @apiName getGoodsList
   * @apiDescription 获取商品列表
   *
   * @apiSampleRequest /api/v1/goods
   * @apiUse getList
   *
   * @apiUse DefineError
   * @apiSuccess {Number} id 商品ID
   * @apiSuccess {String} name 商品名称
   * @apiSuccess {Number} price 商品价格
   * @apiSuccess {String} hot_point 商品热点描述
   * @apiSuccess {Number} market_price 市场价
   * @apiSuccess {Number} discount 折扣
   * @apiSuccess {String} slider 商品轮播图
   * @apiSuccess {String} detail 商品详情
   * @apiSuccess {Number} inventory 商品库存
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
  async getGoodsList() {
    const { ctx } = this;
    const { pageNum = 1, pageSize = 10 } = ctx.query;
    const result = await ctx.service.user.goods.getGoodsList(pageSize, pageNum);
    ctx.body = { code: 200, msg: '获取成功', data: result };
  }

  /**
   * @api {get} /api/v1/goods/:id 商品详情
   * @apiGroup Goods
   * @apiName getGoods
   * @apiDescription 获取商品详情
   *
   * @apiSampleRequest /api/v1/goods/:id
   * @apiParam {Number} id 商品ID
   *
   * @apiUse DefineError
   * @apiSuccess {Number} id 商品ID
   * @apiSuccess {String} name 商品名称
   * @apiSuccess {Number} price 商品价格
   * @apiSuccess {String} hot_point 商品热点描述
   * @apiSuccess {Number} market_price 市场价
   * @apiSuccess {Number} discount 折扣
   * @apiSuccess {String} slider 商品轮播图
   * @apiSuccess {String} detail 商品详情
   * @apiSuccess {Number} inventory 商品库存
   *
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "获取成功"
   *    "data": {
   *      商品
   *    }
   * }
   */
  async getGoodsInfo() {
    // TODO 检查此商品是否存在
    const { ctx } = this;
    const result = await ctx.service.user.goods.getGoodsInfo(ctx.params.id);
    if (result) {
      ctx.body = { code: 200, msg: '商品详情', data: result };
      return;
    }
    ctx.body = { code: -1, msg: '获取失败' };
  }
}

module.exports = GoodsController;
