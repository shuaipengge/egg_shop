'use strict';

const Service = require('egg').Service;

class CartService extends Service {
  async getCartList(pageSize, pageNum) {
    const { ctx } = this;
    const { openid } = ctx.state.user;
    const result = await ctx.model.Carts.findAndCountAll({
      limit: parseInt(pageSize),
      offset: parseInt(pageSize) * (parseInt(pageNum) - 1),
      attributes: [ 'id', 'goodsNum' ],
      where: { uid: openid, status: 1 },
      include: [
        {
          model: ctx.model.Goods,
          attributes: [ 'name', 'price', 'img_md', 'status' ],
        },
      ],
      distinct: true,
    });
    return { count: result.count, goods: result.rows };
  }

  async cartAddGoods(goodsId, goodsNum) {
    const { ctx } = this;
    const { openid } = ctx.state.user;
    const cart = await ctx.model.Carts.findOne({
      where: { uid: openid, goodsId },
    });
    if (cart) {
      const result = await cart.update({ goodsNum, status: 1 });
      return result;
    }
    const result = await ctx.model.Carts.create({
      uid: openid,
      goodsId,
      goodsNum,
    });
    return result;
  }

  async cartDelGoods(goodsId) {
    const { ctx } = this;
    const { openid } = ctx.state.user;
    const result = await ctx.model.Carts.destroy({
      where: {
        uid: openid,
        goodsId,
      },
    });
    return result;
  }
}
module.exports = CartService;
