'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  /**
   * @api {get} /api/v1/admin/admin 管理员列表
   * @apiGroup admin-Admin
   * @apiName getAdminList
   * @apiDescription 管理员列表
   *
   * @apiSampleRequest /api/v1/admin/admin
   * @apiHeader {String} Authorization token.
   * @apiUse getList
   *
   * @apiUse DefineError
   * @apiSuccess {String} username 用户名
   * @apiSuccess {String} nickname 昵称
   * @apiSuccess {String} sex 性别
   * @apiSuccess {String} avatar 头像url
   * @apiSuccess {String} tel 手机号码
   * @apiSuccess {String} role_name 用户角色
   * @apiSuccess {Number} state 账号状态（-1为禁用状态）
   * @apiSuccess {Date} login_time 登陆时间
   * @apiSuccess {Number} login_count 登陆次数
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "获取成功"
   *    "data": {
   *      count: number,
   *      goods: 管理员列表
   *    }
   * }
   */
  async getAdminList() {
    const { ctx } = this;
    const { pageNum = 1, pageSize = 10 } = ctx.query;
    const result = await ctx.service.admin.admin.getAdminList(
      pageSize,
      pageNum
    );
    ctx.body = { code: 200, msg: '获取成功', data: result };
  }

  /**
   * @api {get} /api/v1/admin/admin/:id 管理员详情
   * @apiGroup admin-Admin
   * @apiName getAdminInfo
   * @apiDescription 获取管理员详情
   *
   * @apiSampleRequest /api/v1/admin/admin/:id
   * @apiParam {Number} id 管理员ID
   *
   * @apiUse DefineError
   * @apiSuccess {Number} id 管理员ID
   *
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "获取成功"
   *    "data": {
   *      管理员
   *    }
   * }
   */
  async getAdminInfo() {
    const { ctx } = this;
    const result = await ctx.service.admin.admin.getAdminInfo(ctx.params.id);
    ctx.body = { code: 200, msg: '获取成功', data: result };
  }

  /**
   * @api {delete} /api/v1/admin/admin/:id 删除管理员
   * @apiGroup admin-Admin
   * @apiName deleteAdmin
   * @apiDescription 删除管理员
   *
   * @apiSampleRequest /api/v1/admin/admin/:id
   * @apiHeader {String} Authorization token.
   *
   * @apiParam {Number} id 管理员id
   *
   * @apiUse DefineError
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "删除成功"
   * }
   */
  async deleteAdmin() {
    const { ctx } = this;
    const data = await ctx.service.admin.admin.deleteAdmin(ctx.params.id);
    if (data) {
      ctx.body = { code: 200, msg: '删除成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '删除失败' };
  }

  /**
   * @api {put} /api/v1/admin/admin/:id 修改管理员信息
   * @apiGroup admin-Admin
   * @apiName updateAdmin
   * @apiDescription 修改管理员信息
   *
   * @apiSampleRequest /api/v1/admin/admin/:id
   * @apiHeader {String} Authorization token
   * @apiParam {Number} id 管理员Id
   * @apiParam {String} username 用户名
   * @apiParam {String} nickname 昵称
   * @apiParam {Number} sex 性别
   * @apiParam {String} avatar 头像url
   * @apiParam {String} tel 手机号码
   * @apiParam {Number} roleid 管理员角色id
   *
   * @apiParamExample {json} 请求参数格式
   * {
   *    "username": "系统管理员",
   *    "nickname": "jack",
   *    "sex": 1,
   *    "avatar": "111",
   *    "tel": "123456789",
   *    "roleid": 3
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
  async updateAdmin() {
    const { ctx } = this;
    const data = await ctx.service.admin.admin.updateAdmin(ctx.params.id, ctx.request.body);
    if (data[0]) {
      ctx.body = { code: 200, msg: '修改成功', data };
      return;
    }
    ctx.body = { code: -1, msg: '修改失败' };
  }

  /**
   * @api {post} /api/v1/admin/admin/login 管理员登陆
   * @apiGroup admin-Admin
   * @apiName adminLogin
   * @apiDescription 管理员登陆获取token
   *
   * @apiSampleRequest /api/v1/admin/admin/login
   * @apiParam {Number} tel 手机号
   * @apiParam {String} password 密码
   *
   * @apiParamExample {json} 请求参数格式
   * {
   *    "tel": "12345678",
   *    "password": "123456"
   * }
   *
   * @apiUse DefineError
   *
   * @apiSuccess {Object} data token\admin
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "登陆成功",
   *    "data": {
   *      "token": token,
   *      "admin": admin
   *    }
   * }
   */
  async adminLogin() {
    const { ctx } = this;
    const data = await ctx.service.admin.admin.adminLogin(ctx.request.body);
    ctx.body = data;
  }

  /**
   * @api {post} /api/v1/admin/admin/register 管理员注册
   * @apiGroup admin-Admin
   * @apiName adminRegister
   * @apiDescription 管理员注册
   *
   * @apiSampleRequest /api/v1/admin/admin/register
   * @apiParam {Number} tel 手机号
   * @apiParam {String} password 密码
   * @apiParam {String} username 姓名
   * @apiParam {String} nickname 昵称
   * @apiParam {Number} sex 性别
   *
   * @apiParamExample {json} 请求参数格式
   * {
   *    "tel": "12345678",
   *    "password": "123456",
   *    "username": "王小二",
   *    "nickname": "二二",
   *    "sex": 1
   * }
   *
   * @apiUse DefineError
   *
   * @apiSuccess {Object} data token\admin
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "注册成功"
   * }
   */
  async adminRegister() {
    const { ctx } = this;
    const data = await ctx.service.admin.admin.adminRegister(ctx.request.body);
    ctx.body = data;
  }
}

module.exports = AdminController;
