'use strict';

const Controller = require('egg').Controller;

class MarketController extends Controller {
  /**
   * @api {get} /api/v1/admin/swipper 获取首页轮播图
   * @apiGroup admin-Market
   * @apiName getSwipper
   * @apiDescription 获取首页轮播图
   *
   * @apiSampleRequest /api/v1/admin/swipper
   * @apiHeader {String} Authorization token
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
   * @api {post} /api/v1/admin/swipper 添加轮播图
   * @apiGroup admin-Market
   * @apiName createSwipper
   * @apiDescription 添加轮播图
   *
   * @apiSampleRequest /api/v1/admin/swipper
   * @apiHeader {String} Authorization token
   * @apiParam {String} text 轮播图名称
   * @apiParam {String} img_url 图片url
   * @apiParam {String} path 链接地址
   * @apiParam {Number} [goods_id] 商品id
   * @apiParam {Number} [market_order] 排序权重
   *
   * @apiParamExample {json} 请求参数格式
   * {
   *     "text": "夏季推荐",
   *     "img_url": "img/1/1.jpg",
   *     "path": "/goods/1",
   *     "goods_id": 1,
   *     "market_order": 99
   * }
   *
   * @apiUse DefineError
   *
   * @apiSuccess {Object} data swipper
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "添加成功"
   * }
   */

  async createSwipper() {
    const { ctx } = this;
    const swiper = { ...ctx.request.body };
    swiper.type = 'swipper';
    const data = await ctx.service.admin.market.createMarket(swiper);
    if (data.id) {
      ctx.body = { code: 200, msg: '添加成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '添加失败' };
  }

  /**
   * @api {post} /api/v1/admin/shopitem 添加分类元素
   * @apiGroup admin-Market
   * @apiName createShopitem
   * @apiDescription 添加分类元素
   *
   * @apiSampleRequest /api/v1/admin/shopitem
   * @apiHeader {String} Authorization token
   * @apiParam {String} text 元素名称
   * @apiParam {String} img_url 图片url
   * @apiParam {String} path 链接地址
   * @apiParam {Number} pid 所属分类id
   * @apiParam {Number} [goods_id] 商品id
   * @apiParam {Number} [market_order] 排序权重
   *
   * @apiParamExample {json} 请求参数格式
   * {
   *     "text": "夏季推荐",
   *     "img_url": "img/1/1.jpg",
   *     "path": "/goods/1",
   *     "pid": 8,
   *     "goods_id": 1,
   *     "market_order": 99
   * }
   *
   * @apiUse DefineError
   *
   * @apiSuccess {Object} data swipper
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "添加成功"
   * }
   */

  async createShopitem() {
    const { ctx } = this;
    const obj = { ...ctx.request.body };
    obj.type = 'goods';
    const data = await ctx.service.admin.market.createMarket(obj);
    if (data.id) {
      ctx.body = { code: 200, msg: '添加成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '添加失败' };
  }

  /**
   * @api {put} /api/v1/admin/shopitem/:id 修改分类元素
   * @apiGroup admin-Market
   * @apiName updateShopitem
   * @apiDescription 修改分类元素
   *
   * @apiSampleRequest /api/v1/admin/shopitem/:id
   * @apiHeader {String} Authorization token
   * @apiParam {Number} id 元素名称
   * @apiParam {String} text 元素名称
   * @apiParam {String} img_url 图片url
   * @apiParam {String} path 链接地址
   * @apiParam {Number} pid 所属分类id
   * @apiParam {Number} [goods_id] 商品id
   * @apiParam {Number} [market_order] 排序权重
   *
   * @apiParamExample {json} 请求参数格式
   * {
   *     "text": "夏季推荐",
   *     "img_url": "img/1/1.jpg",
   *     "path": "/goods/1",
   *     "pid": 8,
   *     "goods_id": 1,
   *     "market_order": 99
   * }
   *
   * @apiUse DefineError
   *
   * @apiSuccess {Object} data swipper
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "修改成功"
   * }
   */

  /**
   * @api {put} /api/v1/admin/swipper/:id 修改轮播图
   * @apiGroup admin-Market
   * @apiName updateSwipper
   * @apiDescription 修改轮播图
   *
   * @apiSampleRequest /api/v1/admin/swipper/:id
   * @apiHeader {String} Authorization token
   * @apiParam {Number} id 轮播图id
   * @apiParam {String} text 轮播图名称
   * @apiParam {String} img_url 图片url
   * @apiParam {String} path 链接地址
   * @apiParam {Number} [goods_id] 商品id
   * @apiParam {Number} [market_order] 排序权重
   *
   * @apiParamExample {json} 请求参数格式
   * {
   *     "text": "夏季推荐",
   *     "img_url": "img/1/1.jpg",
   *     "path": "/goods/1",
   *     "goods_id": 1,
   *     "market_order": 99
   * }
   *
   * @apiUse DefineError
   *
   * @apiSuccess {Object} data swipper
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "添加成功"
   * }
   */

  /**
   * @api {put} /api/v1/admin/shopindex/:id 修改首页分类
   * @apiGroup admin-Market
   * @apiName updateShopindex
   * @apiDescription 添加首页分类
   *
   * @apiSampleRequest /api/v1/admin/shopindex/:iid
   * @apiHeader {String} Authorization token
   * @apiParam {Number} id 分类id
   * @apiParam {String} text 分类名称
   * @apiParam {Number} [market_order] 排序权重
   *
   * @apiParamExample {json} 请求参数格式
   * {
   *     "text": "热卖推荐",
   *     "market_order": 99
   * }
   *
   * @apiUse DefineError
   *
   * @apiSuccess {Object} data swipper
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "修改成功"
   * }
   */

  /**
   * @api {put} /api/v1/admin/popups/:id 修改首页弹窗
   * @apiGroup admin-Market
   * @apiName updatePopups
   * @apiDescription 修改首页弹窗
   *
   * @apiSampleRequest /api/v1/admin/popups/:id
   * @apiHeader {String} Authorization token
   * @apiParam {Number} id 弹窗id
   * @apiParam {String} text 弹窗名称
   * @apiParam {String} img_url 图片url
   * @apiParam {String} path 链接地址
   * @apiParam {Number} goods_id 商品id
   *
   * @apiParamExample {json} 请求参数格式
   * {
   *     "text": "夏季推荐",
   *     "img_url": "img/1/1.jpg",
   *     "path": "/goods/1",
   *     "goods_id": 1
   * }
   *
   * @apiUse DefineError
   *
   * @apiSuccess {Object} data swipper
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "添加成功"
   * }
   */

  async updateMarket() {
    const { ctx } = this;
    const data = await ctx.service.admin.market.updateMarket(ctx.params.id, ctx.request.body);
    if (data[0]) {
      ctx.body = { code: 200, msg: '修改成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '修改失败' };
  }

  /**
   * @api {delete} /api/v1/admin/swipper/:id 删除轮播图
   * @apiGroup admin-Market
   * @apiName deleteSwipper
   * @apiDescription 删除轮播图
   *
   * @apiSampleRequest /api/v1/admin/swipper/:id
   * @apiHeader {String} Authorization token.
   *
   * @apiParam {Number} id 轮播图ID
   *
   * @apiUse DefineError
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "删除成功"
   * }
   */

  /**
   * @api {delete} /api/v1/admin/shopitem/:id 删除分类元素
   * @apiGroup admin-Market
   * @apiName deleteshopitem
   * @apiDescription 删除分类元素
   *
   * @apiSampleRequest /api/v1/admin/shopitem/:id
   * @apiHeader {String} Authorization token.
   *
   * @apiParam {Number} id 分类元素id
   *
   * @apiUse DefineError
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "删除成功"
   * }
   */

  /**
   * @api {delete} /api/v1/admin/popups/:id 删除首页弹窗
   * @apiGroup admin-Market
   * @apiName deletePopups
   * @apiDescription 删除首页弹窗
   *
   * @apiSampleRequest /api/v1/admin/swipper/:id
   * @apiHeader {String} Authorization token.
   *
   * @apiParam {Number} id 弹窗ID
   *
   * @apiUse DefineError
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "删除成功"
   * }
   */

  /**
   * @api {delete} /api/v1/admin/shopindex/:id 删除首页分类
   * @apiGroup admin-Market
   * @apiName deleteShopindex
   * @apiDescription 删除首页分类
   *
   * @apiSampleRequest /api/v1/admin/swipper/:id
   * @apiHeader {String} Authorization token.
   *
   * @apiParam {Number} id 分类ID
   *
   * @apiUse DefineError
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "删除成功"
   * }
   */

  async deleteMarket() {
    const { ctx } = this;
    const data = await ctx.service.admin.market.deleteMarket(ctx.params.id);
    if (data) {
      ctx.body = { code: 200, msg: '删除成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '删除失败' };
  }

  /**
   * @api {post} /api/v1/admin/popups 添加首页弹窗
   * @apiGroup admin-Market
   * @apiName createPopups
   * @apiDescription 添加首页弹窗
   *
   * @apiSampleRequest /api/v1/admin/popups
   * @apiHeader {String} Authorization token
   * @apiParam {String} text 弹窗名称
   * @apiParam {String} img_url 图片url
   * @apiParam {String} path 链接地址
   * @apiParam {Number} goods_id 商品id
   *
   * @apiParamExample {json} 请求参数格式
   * {
   *     "text": "夏季推荐",
   *     "img_url": "img/1/1.jpg",
   *     "path": "/goods/1",
   *     "goods_id": 1
   * }
   *
   * @apiUse DefineError
   *
   * @apiSuccess {Object} data swipper
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "添加成功"
   * }
   */

  async createPopups() {
    const { ctx } = this;
    const popups = { ...ctx.request.body };
    popups.type = 'popups';
    const data = await ctx.service.admin.market.createMarket(popups);
    if (data.id) {
      ctx.body = { code: 200, msg: '添加成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '添加失败' };
  }

  /**
   * @api {get} /api/v1/admin/popups 获取首页弹窗
   * @apiGroup admin-Market
   * @apiName getPopups
   * @apiDescription 首页弹窗，仅能获取最新弹窗信息
   *
   * @apiSampleRequest /api/v1/admin/popups
   * @apiHeader {String} Authorization token
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
    const data = await ctx.service.admin.market.getPopups();
    ctx.body = { code: 200, msg: '获取成功', data };
  }

  /**
   * @api {get} /api/v1/admin/shopindex 获取首页分类及元素
   * @apiGroup admin-Market
   * @apiName getIndex
   * @apiDescription 获取首页分类及元素
   *
   * @apiSampleRequest /api/v1/admin/shopindex
   * @apiHeader {String} Authorization token
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
    const data = await ctx.service.admin.market.getIndex();
    ctx.body = { code: 200, msg: '获取成功', data };
  }

  /**
   * @api {post} /api/v1/admin/shopindex 添加首页分类
   * @apiGroup admin-Market
   * @apiName createShopindex
   * @apiDescription 添加首页分类
   *
   * @apiSampleRequest /api/v1/admin/shopindex
   * @apiHeader {String} Authorization token
   * @apiParam {String} text 分类名称
   * @apiParam {Number} [market_order] 排序权重
   *
   * @apiParamExample {json} 请求参数格式
   * {
   *     "text": "热卖推荐",
   *     "market_order": 99
   * }
   *
   * @apiUse DefineError
   *
   * @apiSuccess {Object} data swipper
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "添加成功"
   * }
   */

  async createShopindex() {
    const { ctx } = this;
    const obj = { ...ctx.request.body };
    obj.type = 'item';
    const data = await ctx.service.admin.market.createMarket(obj);
    if (data.id) {
      ctx.body = { code: 200, msg: '添加成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '添加失败' };
  }
}

module.exports = MarketController;
