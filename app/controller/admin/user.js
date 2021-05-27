'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  /**
   * @api {get} /api/v1/admin/user 获取用户列表
   * @apiGroup admin-User
   * @apiName getUserList
   * @apiDescription 获取用户列表
   *
   * @apiSampleRequest /api/v1/admin/user
   * @apiHeader {String} Authorization token.
   * @apiParam {String} [openid] 用户OpenId
   * @apiParam {String} [tel] 手机号
   *
   * @apiUse DefineError
   * @apiSuccess {String} avatar 头像url
   * @apiSuccess {String} tel 手机号码
   * @apiSuccess {String} country 国家
   * @apiSuccess {String} province 省
   * @apiSuccess {String} city 市
   * @apiSuccess {String} openid OpenId
   * @apiSuccess {Date} birthday 生日
   * @apiSuccess {Number} state 会员状态
   * @apiSuccess {String} pid 推荐人
   * @apiSuccess {Number} lever 会员等级
   * @apiSuccess {Number} integral 会员积分
   * @apiSuccess {Number} latitude 纬度
   * @apiSuccess {Number} longitude 经度
   *
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "获取成功",
   *    "data": []
   * }
   */
  async getUserList() {
    const { ctx } = this;
    const data = await ctx.service.admin.user.getUserList(ctx.query);
    ctx.body = { code: 200, msg: '获取成功', data };
  }

  /**
   * @api {get} /api/v1/admin/user/:id 获取用户详情
   * @apiGroup admin-User
   * @apiName getUserInfo
   * @apiDescription 获取用户详情
   *
   * @apiSampleRequest /api/v1/admin/user/:id
   * @apiHeader {String} Authorization token.
   * @apiParam {Number} id 用户Id（非openid）
   *
   * @apiUse DefineError
   *
   * @apiSuccess {Object} user 推荐人信息
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "获取成功"
   *    "data": {
   *      user
   *    }
   * }
   */
  async getUserInfo() {
    const { ctx } = this;
    const data = await ctx.service.admin.user.getUserInfo(ctx.params.id);
    ctx.body = { code: 200, msg: '获取成功', data };
  }
}

module.exports = UserController;
