'use strict';

const Service = require('egg').Service;

class RlogsService extends Service {
  async getRlogsList(query) {
    const {
      ctx: { model },
    } = this;
    const {
      pageNum = 1,
      pageSize = 10,
      ip,
      uid,
    } = query;
    const whereOpts = {};
    if (ip) whereOpts.ip = ip;
    if (uid) whereOpts.uid = uid;

    const result = await model.Rlogs.findAndCountAll({
      limit: parseInt(pageSize),
      offset: parseInt(pageSize) * (parseInt(pageNum) - 1),
      where: whereOpts,
      distinct: true,
    });
    return { count: result.count, logs: result.rows };
  }

  async createRlogs(body) {
    const {
      ctx: { model },
    } = this;
    await model.Rlogs.create(body);
  }
}

module.exports = RlogsService;
