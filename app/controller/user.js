'use strict';
const axios = require('axios');
const Controller = require('egg').Controller;

class UserController extends Controller {
  /**
   * @api {post} /api/v1/user/token 获取token
   * @apiGroup User
   * @apiName getToken
   * @apiDescription 微信小程序login后，获得临时登陆凭证code，再使用code换取登陆token,在请求header中携带token
   *
   * @apiSampleRequest /api/v1/user/token
   * @apiParam {String} code 微信临时登陆凭证code
   * @apiParamExample {json} request-example
   * {
   *   "code": "010101010",
   * }
   *
   * @apiUse DefineSuccess
   * @apiSuccess {String} token 用户token
   * @apiSuccessExample  {json} success-example
   * {
   *   "token": "test"
   * }
   */
  async getToken() {
    const { ctx } = this;
    const {
      weixin: { appid, wx_secret },
    } = ctx.app.config;
    const { code } = ctx.request.body;
    console.log(code);
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${wx_secret}&js_code=${code}&grant_type=authorization_code`;
    const { status, data } = await axios.get(url);

    if (status !== 200 || data.errcode) {
      ctx.status = 500;
      ctx.body = { code: -1, msg: '服务繁忙，稍后重试' };
      return;
    }

    const result = await ctx.service.user.saveSessiionKey(data);
    if (!result) {
      ctx.body = { code: -1, msg: '注册失败，稍后重试' };
      return;
    }

    const {
      jwt: { secret, expiresIn },
    } = ctx.app.config;
    const token = ctx.app.jwt.sign(data, secret, { expiresIn });
    ctx.body = { code: 200, msg: 'token获取成功', data: { token } };
  }
}

module.exports = UserController;
