'use strict';

const Service = require('egg').Service;

class AddressService extends Service {
  async getDefaultAddress() {
    const { ctx } = this;
    const { openid } = ctx.state.user;
    const result = await ctx.model.Address.findOne({
      attributes: {
        exclude: [ 'deletedAt', 'createdAt', 'updatedAt', 'isDefault' ],
      },
      where: {
        uid: openid,
        isDefault: 1,
      },
    });
    return result;
  }
}
module.exports = AddressService;
