'use strict';

const Controller = require('egg').Controller;

class RlogsController extends Controller {
  /**
   * @api {get} /api/v1/admin/rlogs 日志列表
   * @apiGroup admin-Rlogs
   * @apiName getRlogsList
   * @apiDescription 日志列表
   *
   * @apiSampleRequest /api/v1/admin/rlogs
   * @apiUse getList
   * @apiParam {String} [ip] 请求ip
   * @apiParam {Number} [uid] 用户id
   *
   * @apiUse DefineError
   * @apiSuccess {Number} id 日志id
   * @apiSuccess {Number} uid 用户id
   * @apiSuccess {String} username 用户名
   * @apiSuccess {String} method 请求方法
   * @apiSuccess {String} path 请求PATH
   * @apiSuccess {String} query 请求参数
   * @apiSuccess {String} ip ip地址
   * @apiSuccess {Date} created_at 时间
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
  async getRlogsList() {
    const { ctx } = this;
    const data = await ctx.service.admin.rlogs.getRlogsList(ctx.query);
    ctx.body = { code: 200, msg: '获取成功', data };
  }
}

module.exports = RlogsController;
