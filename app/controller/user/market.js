'use strict';

const Controller = require('egg').Controller;

class MarketController extends Controller {
  /**
   * @api {get} /api/v1/swipper 首页轮播图
   * @apiGroup Market
   * @apiName getSwipper
   * @apiDescription 获取首页轮播图
   *
   * @apiSampleRequest /api/v1/swipper
   *
   * @apiUse DefineError
   * @apiSuccess {Number} id 轮播图ID
   * @apiSuccess {String} text 轮播图名称
   * @apiSuccess {String} img_url 图片url
   * @apiSuccess {String} path 链接地址
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "获取成功"
   *    "data": {
   *      swipper
   *    }
   * }
   */
  async getSwipper() {
    const { ctx } = this;
    const data = await ctx.service.user.market.getSwipper();
    ctx.body = { code: 200, msg: '获取成功', data };
  }

  /**
   * @api {get} /api/v1/popups 首页弹窗
   * @apiGroup Market
   * @apiName getPopups
   * @apiDescription 首页弹窗，仅能获取最新弹窗信息
   *
   * @apiSampleRequest /api/v1/popups
   *
   * @apiUse DefineError
   * @apiSuccess {Number} id 弹窗ID
   * @apiSuccess {String} text 弹窗名称
   * @apiSuccess {String} img_url 图片url
   * @apiSuccess {String} path 链接地址
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "获取成功"
   *    "data": {
   *      popups
   *    }
   * }
   */
  async getPopups() {
    const { ctx } = this;
    const data = await ctx.service.user.market.getPopups();
    ctx.body = { code: 200, msg: '获取成功', data };
  }

  /**
   * @api {get} /api/v1/index 首页展示分类
   * @apiGroup Market
   * @apiName getIndex
   * @apiDescription 首页展示分类
   *
   * @apiSampleRequest /api/v1/index
   *
   * @apiUse DefineError
   * @apiSuccess {Number} id 分类id
   * @apiSuccess {String} text 分类名称
   * @apiSuccess {List} child 分类元素
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "获取成功"
   *    "data": {
   *      item
   *    }
   * }
   */
  async getIndex() {
    const { ctx } = this;
    const data = await ctx.service.user.market.getIndex();
    ctx.body = { code: 200, msg: '获取成功', data };
  }
}

module.exports = MarketController;
