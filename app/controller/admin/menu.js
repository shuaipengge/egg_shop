'use strict';

const Controller = require('egg').Controller;

class MenuController extends Controller {
  /**
   * @api {post} /api/v1/admin/menu 添加子菜单
   * @apiGroup admin-Menu
   * @apiName createMenu
   * @apiDescription 添加子菜单
   *
   * @apiSampleRequest /api/v1/admin/menu
   * @apiHeader {String} Authorization token
   * @apiParam {String} name 分类名称
   * @apiParam {Number} pid 父id
   * @apiParam {String} path 菜单url地址
   * @apiParam {Number} order 菜单显示顺序，按照数字从小到大排序
   *
   * @apiParamExample {json} 请求参数格式
   * {
   *     "name": "添加菜单",
   *     "pid": 1,
   *     "path": "/index/add",
   *     "order": 1001
   * }
   *
   * @apiUse DefineError
   *
   * @apiSuccess {Object} menu 菜单
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "查询成功",
   *    data
   * }
   */
  async createMenu() {
    const { ctx } = this;
    const data = await ctx.service.admin.menu.createMenu(ctx.request.body);
    if (data.id) {
      ctx.body = { code: 200, msg: '创建成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '创建失败' };
  }

  /**
   * @api {put} /api/v1/admin/menu/:id 更新菜单
   * @apiGroup admin-Menu
   * @apiName updateMenu
   * @apiDescription 更新菜单
   *
   * @apiSampleRequest /api/v1/admin/menu/:id
   * @apiHeader {String} Authorization token
   * @apiParam {Number} id 菜单id
   * @apiParam {String} name 分类名称
   * @apiParam {Number} pid 父id
   * @apiParam {String} path 菜单url地址
   * @apiParam {Number} order 菜单显示顺序，按照数字从小到大排序
   *
   * @apiParamExample {json} 请求参数格式
   * {
   *     "name": "添加菜单",
   *     "pid": 1,
   *     "path": "/index/add",
   *     "order": 1001
   * }
   *
   * @apiUse DefineError
   *
   * @apiSuccess {Object} menu 菜单
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "查询成功",
   *    data
   * }
   */
  async updateMenu() {
    const { ctx } = this;
    const data = await ctx.service.admin.menu.updateMenu(ctx.params.id, ctx.request.body);
    if (data[0]) {
      ctx.body = { code: 200, msg: '修改成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '修改失败' };
  }

  /**
   * @api {delete} /api/v1/admin/menu/:id 删除子菜单
   * @apiGroup admin-Menu
   * @apiName deleteMenu
   * @apiDescription 删除子菜单
   *
   * @apiSampleRequest /api/v1/admin/menu/:id
   * @apiHeader {String} Authorization token.
   *
   * @apiParam {Number} id 菜单ID
   *
   * @apiUse DefineError
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "删除成功"
   * }
   */
  async deleteMenu() {
    const { ctx } = this;
    const data = await ctx.service.admin.menu.deleteMenu(ctx.params.id);
    if (data) {
      ctx.body = { code: 200, msg: '删除成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '删除失败' };
  }

  /**
   * @api {get} /api/v1/admin/menu/sub/:id 获取子级菜单
   * @apiGroup admin-Menu
   * @apiName getSubMenu
   * @apiDescription 获取子级菜单
   *
   * @apiSampleRequest /api/v1/admin/menu/sub/:id
   * @apiHeader {String} Authorization token.
   *
   * @apiParam {Number} id 父级菜单id
   *
   * @apiUse DefineError
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "删除成功"
   * }
   */
  async getSubMenu() {
    const { ctx } = this;
    const data = await ctx.service.admin.menu.getSubMenu(ctx.params.id);
    ctx.body = { code: 200, msg: '获取成功', data };
  }
}

module.exports = MenuController;
