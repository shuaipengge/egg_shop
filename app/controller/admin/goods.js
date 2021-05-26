'use strict';

const Controller = require('egg').Controller;

class GoodsController extends Controller {
  /**
   * @api {get} /api/v1/admin/goods 商品列表
   * @apiGroup admin-Goods
   * @apiName getGoodsList
   * @apiDescription 获取商品列表
   *
   * @apiSampleRequest /api/v1/admin/goods
   * @apiUse getList
   * @apiParam {Number} [cate_1st] 一级分类id
   * @apiParam {Number} [cate_2nd] 二级分类id
   * @apiParam {Number} [cate_3rd] 三级分类id
   * @apiParam {String="ASC", "DESC"} [sortByPrice] 按照价格排序 从小到大-ASC，从大到小-DESC
   *
   * @apiUse DefineError
   * @apiSuccess {Number} id 商品ID
   * @apiSuccess {String} name 商品名称
   * @apiSuccess {Number} price 商品价格
   * @apiSuccess {String} hot_point 商品热点描述
   * @apiSuccess {Number} market_price 市场价
   * @apiSuccess {Number} discount 折扣
   * @apiSuccess {String} slider 商品轮播图
   * @apiSuccess {String} sales_no 商品销量
   * @apiSuccess {String} detail 商品详情
   * @apiSuccess {Number} inventory 商品库存
   * @apiSuccess {Number} status 商品状态
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
    const result = await ctx.service.admin.goods.getGoodsList(ctx.query);
    ctx.body = { code: 200, msg: '获取成功', data: result };
  }

  /**
   * @api {get} /api/v1/admin/goods/:id 商品详情
   * @apiGroup admin-Goods
   * @apiName getGoodsInfo
   * @apiDescription 获取商品详情
   *
   * @apiSampleRequest /api/v1/admin/goods/:id
   * @apiParam {Number} id 商品ID
   *
   * @apiUse DefineError
   *
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "获取成功"
   *    "data": {
   *      goods
   *    }
   * }
   */
  async getGoodsInfo() {
    const { ctx } = this;
    const result = await ctx.service.admin.goods.getGoodsInfo(ctx.params.id);
    ctx.body = { code: 200, msg: '获取成功', data: result };
  }

  /**
   * @api {post} /api/v1/admin/goods 添加商品
   * @apiGroup admin-Goods
   * @apiName createGoods
   * @apiDescription 添加商品
   *
   * @apiSampleRequest /api/v1/admin/goods
   * @apiHeader {String} Authorization token.
   * @apiParam {Number} [cate_1st] 一级分类id
   * @apiParam {Number} [cate_2nd] 二级分类id
   * @apiParam {Number} [cate_3rd] 三级分类id
   * @apiParam {String} name 商品名称
   * @apiParam {Number} price 商品价格
   * @apiParam {String} hot_point 商品热点描述
   * @apiParam {Number} [market_price] 市场价
   * @apiParam {Number} [cost] 成本价格
   * @apiParam {Number} [discount] 折扣
   * @apiParam {Number} inventory 商品库存
   * @apiParam {Number} [article_no] 商品货号
   * @apiParam {String} [sales_no] 商品销量
   * @apiParam {String} img_lg 商品大图
   * @apiParam {String} img_md 商品小图
   * @apiParam {String} slider 商品轮播图
   * @apiParam {String} brand 商品品牌
   * @apiParam {String} detail 商品详情
   * @apiParam {Number} [freight] 商品运费
   * @apiParam {Number} [status] 商品状态
   * @apiParamExample {json} 请求参数格式:
   * {
   *    "cate_1st": null,
   *    "cate_2nd": 2,
   *    "cate_3rd": null,
   *    "name": "IKBC无线机械键盘",
   *    "price": 599,
   *    "hot_point": "新品首发IKBC机械键盘蓝牙6.0 多设备链接一键切换",
   *    "market_price": 699,
   *    "cost": 399,
   *    "discount": 0.8,
   *    "inventory": 300,
   *    "article_no": 683748245,
   *    "sales_no": null,
   *    "img_lg": "http:img",
   *    "img_md": "http:img",
   *    "slider": "imgURL1,imgURL2,imgURL3",
   *    "brand": "IKBC",
   *    "detail": "<p><img src='111'></p>",
   *    "freight": 8,
   *    "status": 1
   * }
   *
   * @apiUse DefineError
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "获取成功"
   * }
   */
  async createGoods() {
    const { ctx } = this;
    const data = await ctx.service.admin.goods.createGoods(ctx.request.body);
    if (data.id) {
      ctx.body = { code: 200, msg: '添加成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '添加失败' };
  }

  /**
   * @api {put} /api/v1/admin/goods/:id 修改商品
   * @apiGroup admin-Goods
   * @apiName updateGoods
   * @apiDescription 修改商品
   *
   * @apiSampleRequest /api/v1/admin/goods/:id
   * @apiHeader {String} Authorization token.
   * @apiParam {Number} id 商品id
   * @apiParamExample {json} 请求参数格式:
   * {
   *    "cate_1st": null,
   *    "cate_2nd": 2,
   *    "cate_3rd": null,
   *    "name": "IKBC无线机械键盘",
   *    "price": 599,
   *    "hot_point": "新品首发IKBC机械键盘蓝牙6.0 多设备链接一键切换",
   *    "market_price": 699,
   *    "cost": 399,
   *    "discount": 0.8,
   *    "inventory": 300,
   *    "article_no": 683748245,
   *    "sales_no": null,
   *    "img_lg": "http:img",
   *    "img_md": "http:img",
   *    "slider": "imgURL1,imgURL2,imgURL3",
   *    "brand": "IKBC",
   *    "detail": "<p><img src='111'></p>",
   *    "freight": 8,
   *    "status": 3
   * }
   *
   * @apiUse DefineError
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "修改成功"
   * }
   */
  async updateGoods() {
    const { ctx } = this;
    const data = await ctx.service.admin.goods.updateGoods(ctx.params.id, ctx.request.body);
    if (data[0]) {
      ctx.body = { code: 200, msg: '修改成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '修改失败' };
  }

  /**
   * @api {delete} /api/v1/admin/goods/:id 删除商品
   * @apiGroup admin-Goods
   * @apiName deleteGoods
   * @apiDescription 删除商品
   *
   * @apiSampleRequest /api/v1/admin/goods/:id
   * @apiHeader {String} Authorization token.
   *
   * @apiParam {Number} id 商品id
   *
   * @apiUse DefineError
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "删除成功"
   * }
   */
  async deleteGoods() {
    const { ctx } = this;
    const data = await ctx.service.admin.goods.deleteGoods(ctx.params.id);
    if (data) {
      ctx.body = { code: 200, msg: '删除成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '删除失败' };
  }
}

module.exports = GoodsController;
