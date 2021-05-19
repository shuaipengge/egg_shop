'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async saveSessiionKey(data) {
    const { ctx } = this;
    const { openid, session_key } = data;
    const user = await ctx.model.User.findOne({ where: { openid } });
    let result;
    if (user) {
      result = await user.update({ sessionKey: session_key });
    } else {
      result = await ctx.model.User.create({ openid, sessionKey: session_key });
    }
    return result;
  }
}
module.exports = UserService;
