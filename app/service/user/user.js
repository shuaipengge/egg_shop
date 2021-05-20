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

  async updateUserInfo(data) {
    const { ctx } = this;
    const { openid } = ctx.state.user;
    const {
      avatar,
      nickName,
      tel,
      country,
      province,
      city,
      birthday,
      pid,
      latitude,
      longitude,
    } = data;
    const result = await ctx.model.User.update(
      {
        avatar,
        nickName,
        tel,
        country,
        province,
        city,
        birthday,
        pid,
        latitude,
        longitude,
      },
      { where: { openid } }
    );
    if (result[0] > 0) return true;
    return false;
  }
}
module.exports = UserService;
