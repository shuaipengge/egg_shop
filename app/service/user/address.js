'use strict';

const { Op } = require('sequelize');
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

  async getAddressList(pageSize, pageNum) {
    const { ctx } = this;
    const { openid } = ctx.state.user;
    const result = await ctx.model.Address.findAndCountAll({
      limit: parseInt(pageSize),
      offset: parseInt(pageSize) * (parseInt(pageNum) - 1),
      where: { uid: openid },
      distinct: true,
    });
    console.log(result);
    return { count: result.count, address: result.rows };
  }

  async createAddress(body) {
    const { ctx } = this;
    const { openid } = ctx.state.user;
    const address = { ...body, uid: openid };
    const result = await ctx.model.Address.create(address);
    if (result.id && result.isDefault) {
      await ctx.model.Address.update({ isDefault: null }, {
        where: {
          uid: openid,
          id: { [Op.ne]: result.id },
        },
      });
    }
    return result;
  }

  async updateAddress(body, id) {
    const { ctx } = this;
    const { openid } = ctx.state.user;
    const result = await ctx.model.Address.update(body, {
      where: {
        id,
        uid: openid,
      },
    });
    if (body.isDefault === 1) {
      await ctx.model.Address.update({ isDefault: null }, {
        where: {
          uid: openid,
          id: { [Op.ne]: id },
        },
      });
    }
    return result;
  }
}
module.exports = AddressService;
