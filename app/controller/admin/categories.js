'use strict';

const Controller = require('egg').Controller;

class GoodsController extends Controller {
  /**
   * @api {get} /api/v1/admin/categories 获取全部分类
   * @apiGroup admin-Categories
   * @apiName getCategories
   * @apiDescription 所有分类列表
   *
   * @apiSampleRequest /api/v1/admin/categories
   * @apiHeader {String} Authorization token.
   *
   * @apiUse DefineError
   * @apiSuccess {String} name 名称
   * @apiSuccess {Number} pid 父级id
   * @apiSuccess {String} level 层级
   * @apiSuccess {String} img 图标url
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "获取成功"
   *    "data": {
   *      分类列表
   *    }
   * }
   */
  async getCategories() {
    const { ctx } = this;
    const data = await ctx.service.admin.categories.getCategories();
    ctx.body = { code: 200, msg: '获取成功', data };
  }

  /**
   * @api {get} /api/v1/admin/categories/sub/:id 获取子级分类
   * @apiGroup admin-Categories
   * @apiName getCategoriesSub
   * @apiDescription 根据父级id获取子级分类
   *
   * @apiSampleRequest /api/v1/admin/categories/sub/:id
   * @apiHeader {String} Authorization token.
   * @apiParam {Number} id 父级id
   *
   * @apiUse DefineError
   * @apiSuccess {String} name 名称
   * @apiSuccess {Number} pid 父级id
   * @apiSuccess {String} level 层级
   * @apiSuccess {String} img 图标url
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "获取成功"
   *    "data": {
   *      分类列表
   *    }
   * }
   */
  async getCategoriesSub() {
    const { ctx } = this;
    const data = await ctx.service.admin.categories.getCategoriesSub(ctx.params.id);
    ctx.body = { code: 200, msg: '获取成功', data };
  }

  /**
   * @api {post} /api/v1/admin/categories 创建子分类
   * @apiGroup admin-Categories
   * @apiName createCategories
   * @apiDescription 创建商品分类子分类
   *
   * @apiSampleRequest /api/v1/admin/categories
   * @apiHeader {String} Authorization token.
   *
   * @apiUse DefineError
   * @apiParam {String} name 名称
   * @apiParam {Number} pid 父级id
   * @apiParam {String} [level] 层级
   * @apiParam {String} img 图标url
   * @apiParamExample {json} 请求参数格式:
   * {
   *    "name": "电脑",
   *    "pid": 2,
   *    "level": 2,
   *    "img": "http://123"
   * }
   *
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "获取成功"
   * }
   */
  async createCategories() {
    const { ctx } = this;
    const data = await ctx.service.admin.categories.createCategories(ctx.request.body);
    if (data.id) {
      ctx.body = { code: 200, msg: '创建成功' };
      return;
    }
    ctx.body = { code: -1, msg: '创建失败' };
  }

  /**
   * @api {put} /api/v1/admin/categories/:id 修改分类信息
   * @apiGroup admin-Categories
   * @apiName updateCategories
   * @apiDescription 修改分类信息
   *
   * @apiSampleRequest /api/v1/admin/categories/:id
   * @apiHeader {String} Authorization token.
   *
   * @apiUse DefineError
   * @apiParam {Number} id 分类id
   * @apiParam {String} name 名称
   * @apiParam {Number} pid 父级id
   * @apiParam {String} [level] 层级
   * @apiParam {String} img 图标url
   * @apiParamExample {json} 请求参数格式:
   * {
   *    "name": "电脑",
   *    "pid": 2,
   *    "level": 2,
   *    "img": "http://123"
   * }
   *
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "修改成功"
   * }
   */
  async updateCategories() {
    const { ctx } = this;
    const data = await ctx.service.admin.categories.updateCategories(ctx.params.id, ctx.request.body);
    if (data[0]) {
      ctx.body = { code: 200, msg: '修改成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '修改失败' };
  }

  /**
   * @api {delete} /api/v1/admin/categories/:id 删除分类
   * @apiGroup admin-Categories
   * @apiName deleteCategories
   * @apiDescription 删除分类
   *
   * @apiSampleRequest /api/v1/admin/categories/:id
   * @apiHeader {String} Authorization token.
   *
   * @apiParam {Number} id 分类id
   *
   * @apiUse DefineError
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "删除成功"
   * }
   */
  async deleteCategories() {
    const { ctx } = this;
    const data = await ctx.service.admin.categories.deleteCategories(ctx.params.id);
    if (data) {
      ctx.body = { code: 200, msg: '删除成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '删除失败' };
  }
}
module.exports = GoodsController;
