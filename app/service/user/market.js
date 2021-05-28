'use strict';

const Service = require('egg').Service;

class MarketService extends Service {
  async getSwipper() {
    const {
      ctx: { model },
    } = this;
    const result = await model.Market.findAll({
      order: [[ 'market_order', 'desc' ]],
      where: { type: 'swipper' },
    });
    return result;
  }

  async getPopups() {
    const {
      ctx: { model },
    } = this;
    const result = await model.Market.findOne({
      where: { type: 'popups' },
    });
    return result;
  }

  async getIndex() {
    const {
      ctx: { model },
    } = this;
    const items = await model.Market.findAll({
      order: [[ 'market_order', 'desc' ]],
      attributes: [ 'id', 'text', 'market_order' ],
      where: { type: 'item' },
      raw: true,
    });
    const childs = await model.Market.findAll({
      order: [[ 'market_order', 'desc' ]],
      attributes: [ 'id', 'goods_id', 'text', 'img_url', 'path', 'pid' ],
      where: { type: 'goods' },
      raw: true,
    });
    // 整合数据
    items.forEach(item => {
      item.children = [];
      childs.forEach(child => {
        if (child && child.pid === item.id) {
          item.children.push(child);
        }
      });
    });
    return items;
  }
}
module.exports = MarketService;
