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
   *    "code" : 200,
   *    "msg": "获取成功"
   *    "data": {
   *       "token": "*****"
   *    }
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

  /**
   * @api {put} /api/v1/user 更新用户信息
   * @apiGroup User
   * @apiName updateUserInfo
   * @apiDescription 更新用户信息 需携带token
   *
   * @apiSampleRequest /api/v1/user
   * @apiHeader {String} Authorization token.
   * @apiParam {String} avatar 微信头像url
   * @apiParam {String} nickName 微信昵称
   * @apiParam {String} tel 手机号码
   * @apiParam {String} country 国家
   * @apiParam {String} province 省
   * @apiParam {String} city 市
   * @apiParam {Date} birthday 生日
   * @apiParam {String} pid 推荐人OpenID
   * @apiParam {Float} latitude 维度
   * @apiParam {Float} longitude 经度
   * @apiParamExample {json} request-example
   * {
   *    "avatar": "http://...",
   *    "nickName": "微信用户",
   *    "tel": "13*********",
   *    "country": "中国",
   *    "province": "浙江",
   *    "city": "杭州",
   *    "birthday": "2021-01-01",
   *    "pid": "orDFKwH9tWT3GUexuxsPmfIUoKpw",
   *    "latitude": 1.000,
   *    "longitude": 1.000
   * }
   *
   * @apiUse DefineSuccess
   * @apiSuccess {String} msg 消息
   * @apiSuccessExample  {json} success-example
   * {
   *   "code": 200
   *   "message": "更新成功"
   * }
   */
  async updateUserInfo() {
    const { ctx } = this;
    this.ctx.validate({
      avatar: { type: 'string', required: false },
      nickName: { type: 'string', required: false },
      tel: { type: 'string', required: false },
      country: { type: 'string', required: false },
      province: { type: 'string', required: false },
      city: { type: 'string', required: false },
      birthday: { type: 'date', required: false },
      pid: { type: 'string', required: false },
      latitude: { type: 'number', required: false },
      longitude: { type: 'number', required: false },
    });
    const result = await ctx.service.user.updateUserInfo(ctx.request.body);
    if (!result) {
      ctx.body = { code: -1, msg: '更新失败，稍后重试' };
      return;
    }
    ctx.body = { code: 200, msg: '更新成功' };
  }
}

module.exports = UserController;
