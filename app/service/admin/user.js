'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUserList(query) {
    const {
      ctx: { model },
    } = this;
    const {
      pageNum = 1,
      pageSize = 10,
      openid,
      tel,
    } = query;

    const whereOpts = {};
    if (openid) whereOpts.openid = openid;
    if (tel) whereOpts.tel = tel;

    const result = await model.User.findAndCountAll({
      attributes: {
        exclude: [ 'sessionKey' ],
      },
      limit: parseInt(pageSize),
      offset: parseInt(pageSize) * (parseInt(pageNum) - 1),
      where: whereOpts,
      distinct: true,
    });
    return { count: result.count, user: result.rows };
  }

  async getUserInfo(id) {
    const {
      ctx: { model },
    } = this;
    const result = await model.User.findByPk(id, {
      attributes: {
        exclude: [ 'sessionKey' ],
      },
      include: [{ model: model.User, attributes: {
        exclude: [ 'sessionKey' ],
      } }],
    });
    return result;
  }
}

module.exports = UserService;
