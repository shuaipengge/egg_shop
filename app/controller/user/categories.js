'use strict';

const Controller = require('egg').Controller;

class CategoriesService extends Controller {
  /**
   * @api {get} /api/v1/categories 获取全部分类
   * @apiGroup Categories
   * @apiName getCategories
   * @apiDescription 所有分类列表
   *
   * @apiSampleRequest /api/v1/categories
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
    const data = await ctx.service.user.categories.getCategories();
    ctx.body = { code: 200, msg: '获取成功', data };
  }

  /**
   * @api {get} /api/v1/categories/sub/:id 获取子级分类
   * @apiGroup Categories
   * @apiName getCategoriesSub
   * @apiDescription 根据父级id获取子级分类
   *
   * @apiSampleRequest /api/v1/categories/sub/:id
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
    const data = await ctx.service.user.categories.getCategoriesSub(ctx.params.id);
    ctx.body = { code: 200, msg: '获取成功', data };
  }
}
module.exports = CategoriesService;
