// admin 请求日志
'use strict';

module.exports = () => {
  return async function checkUserId(ctx, next) {
    await next();
    const logs = {};
    if (ctx.state.user) {
      const { id, username } = ctx.state.user;
      logs.uid = id;
      logs.username = username;
    }
    logs.method = ctx.method;
    logs.path = ctx.path;
    logs.query = JSON.stringify(ctx.query);
    logs.ip = ctx.request.ip;
    ctx.service.admin.rlogs.createRlogs(logs);
  };
};
