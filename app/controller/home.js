'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  /**
   * @api {post} /api/v1/user/login 登陆
   * @apiGroup User
   * @apiName login
   * @apiDescription 用户登陆接口
   *
   * @apiSampleRequest /api/v1/user/login
   * @apiParam {String} userName 用户名称
   * @apiParam {String} passWord 用户密码
   * @apiParamExample {json} request-example
   * {
   *   "userName": "test",
   *   "passWord": "12345678"
   * }
   * @apiError {String} message 错误信息
   * @apiError {Number} code 状态码
   * @apiErrorExample  {json} error-example
   * {
   *   "code": -1
   *   "message": "用户名或密码错误"
   * }
   *
   * @apiSuccess {String} userName 用户名
   * @apiSuccess {Number} id 用户ID
   * @apiSuccess {String} city 城市
   * @apiSuccessExample  {json} success-example
   * {
   *   "userName": "test",
   *   "id": 1,
   *   "city": "test"
   * }
   */
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async test() {
    const { ctx } = this;
    ctx.body = await ctx.model.User.findAndCountAll({});
  }
}

module.exports = HomeController;
