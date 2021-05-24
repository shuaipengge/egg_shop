'use strict';

const Controller = require('egg').Controller;

class RoleController extends Controller {
  /**
   * @api {get} /api/v1/admin/role 获取角色列表
   * @apiGroup admin-Role
   * @apiName getRoleList
   * @apiDescription 获取角色列表
   *
   * @apiSampleRequest /api/v1/admin/role
   * @apiHeader {String} Authorization token.
   *
   * @apiUse DefineError
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "获取成功",
   *    "data": []
   * }
   */
  async getRoleList() {
    const { ctx } = this;
    const data = await ctx.service.admin.role.getRoleList();
    ctx.body = { code: 200, msg: '获取成功', data };
  }

  /**
   * @api {post} /api/v1/admin/role 添加角色
   * @apiGroup admin-Role
   * @apiName createRole
   * @apiDescription 添加角色
   *
   * @apiSampleRequest /api/v1/admin/role
   * @apiHeader {String} Authorization token
   * @apiParam {String} name 角色名称
   *
   * @apiParamExample {json} 请求参数格式
   * {
   *     "name": "系统管理员"
   * }
   *
   * @apiUse DefineError
   *
   * @apiSuccess {Object} data 角色
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "添加成功"
   * }
   */
  async createRole() {
    const { ctx } = this;
    const data = await ctx.service.admin.role.createRole(ctx.request.body);
    if (data.id) {
      ctx.body = { code: 200, msg: '添加成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '添加失败' };
  }

  /**
   * @api {put} /api/v1/admin/role/:id 修改角色
   * @apiGroup admin-Role
   * @apiName updateRole
   * @apiDescription 修改角色
   *
   * @apiSampleRequest /api/v1/admin/role/:id
   * @apiHeader {String} Authorization token
   * @apiParam {Number} id 角色id
   * @apiParam {String} name 角色名称
   *
   * @apiParamExample {json} 请求参数格式
   * {
   *     "name": "系统管理员"
   * }
   *
   * @apiUse DefineError
   *
   * @apiSuccess {Object} data 角色
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "修改成功"
   * }
   */
  async updateRole() {
    const { ctx } = this;
    const data = await ctx.service.admin.role.updateRole(
      ctx.params.id,
      ctx.request.body
    );
    if (data[0]) {
      ctx.body = { code: 200, msg: '修改成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '修改失败' };
  }

  /**
   * @api {delete} /api/v1/admin/role/:id 删除角色
   * @apiGroup admin-Role
   * @apiName deleteRole
   * @apiDescription 删除角色
   *
   * @apiSampleRequest /api/v1/admin/role/:id
   * @apiHeader {String} Authorization token.
   *
   * @apiParam {Number} id 角色ID
   *
   * @apiUse DefineError
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "删除成功"
   * }
   */
  async deleteRole() {
    const { ctx } = this;
    const data = await ctx.service.admin.role.deleteRole(ctx.params.id);
    if (data) {
      ctx.body = { code: 200, msg: '删除成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '删除失败' };
  }

  /**
   * @api {post} /api/v1/admin/roleMenu 添加角色菜单
   * @apiGroup admin-Role
   * @apiName createRoleMenu
   * @apiDescription 添加角色菜单
   *
   * @apiSampleRequest /api/v1/admin/roleMenu
   * @apiHeader {String} Authorization token
   * @apiParam {Number} role_id 角色id
   * @apiParam {Number} menu_id 菜单id
   *
   * @apiParamExample {json} 请求参数格式
   * {
   *     "role_id": 1,
   *     "menu_id": 2
   * }
   *
   * @apiUse DefineError
   *
   * @apiSuccess {Object} data 角色
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "添加成功"
   * }
   */

  async createRoleMenu() {
    const { ctx } = this;
    const data = await ctx.service.admin.role.createRoleMenu(ctx.request.body);
    if (data.id) {
      ctx.body = { code: 200, msg: '添加成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '添加失败' };
  }

  /**
   * @api {delete} /api/v1/admin/roleMenu 删除角色菜单
   * @apiGroup admin-Role
   * @apiName deleteRoleMenu
   * @apiDescription 删除角色菜单
   *
   * @apiSampleRequest /api/v1/admin/roleMenu
   * @apiHeader {String} Authorization token.
   * @apiParam {Number} role_id 角色id
   * @apiParam {Number} menu_id 菜单id
   *
   * @apiParamExample {json} 请求参数格式
   * {
   *     "role_id": 1,
   *     "menu_id": 2
   * }
   *
   * @apiUse DefineError
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "删除成功"
   * }
   */
  async deleteRoleMenu() {
    const { ctx } = this;
    const data = await ctx.service.admin.role.deleteRoleMenu(ctx.request.body);
    if (data) {
      ctx.body = { code: 200, msg: '删除成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '删除失败' };
  }

  /**
   * @api {get} /api/v1/admin/roleMenu/:id 根据角色id获取菜单配置
   * @apiGroup admin-Role
   * @apiName getRoleMenu
   * @apiDescription 根据角色id获取菜单配置
   *
   * @apiSampleRequest /api/v1/admin/roleMenu/:id
   * @apiHeader {String} Authorization token.
   * @apiParam {Number} id 角色id
   *
   * @apiUse DefineError
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "获取成功",
   *    "data": []
   * }
   */
  async getRoleMenu() {
    const { ctx } = this;
    const data = await ctx.service.admin.role.getRoleMenu(ctx.params.id);
    if (data) {
      ctx.body = { code: 200, msg: '获取成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '获取失败' };
  }
}

module.exports = RoleController;
