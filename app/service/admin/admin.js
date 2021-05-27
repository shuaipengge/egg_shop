'use strict';

const Service = require('egg').Service;
const bcrypt = require('bcryptjs');

class AdminService extends Service {
  async getAdminList(pageSize, pageNum) {
    const {
      ctx: { model },
    } = this;
    const result = await model.Admins.findAndCountAll({
      limit: parseInt(pageSize),
      offset: parseInt(pageSize) * (parseInt(pageNum) - 1),
      attributes: {
        exclude: [ 'password' ],
      },
      include: [
        {
          model: model.AdminRole,
          attributes: [ 'role_id' ],
          include: [{ model: model.Role, attributes: [ 'role_name' ] }],
        },
      ],
      raw: true, // 扁平化
      distinct: true,
    });
    return result;
  }

  async getAdminInfo(id) {
    const {
      ctx: { model },
    } = this;
    const result = await model.Admins.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: [ 'password' ],
      },
      include: [
        {
          model: model.AdminRole,
          attributes: [ 'role_id' ],
          include: [{ model: model.Role, attributes: [ 'role_name' ] }],
        },
      ],
      raw: true, // 扁平化
      distinct: true,
    });
    return result;
  }

  async deleteAdmin(id) {
    const {
      ctx: { model },
    } = this;
    const result = await model.Admins.destroy({
      where: { id },
    });
    await model.AdminRole.destroy({
      where: { admin_id: id },
    });
    return result;
  }

  async updateAdmin(id, body) {
    // TODO 修改密码
    const {
      ctx: { model },
    } = this;
    // TODO 事务 & 校验数据
    const result = await model.Admins.update(
      body,
      { where: { id } }
    );
    if (body.roleid) {
      const adminRole = await model.AdminRole.findOne({
        where: { admin_id: id },
      });
      if (adminRole.id) {
        await adminRole.update({ role_id: body.roleid });
      } else {
        await adminRole.create({
          admin_id: id,
          role_id: body.roleid,
        });
      }
    }
    return result;
  }

  async adminLogin(body) {
    const {
      ctx: { model },
    } = this;
    const admin = await model.Admins.findOne({
      where: { tel: body.tel },
    });
    if (admin) {
      if (admin.state === -1) return { code: -1, msg: '账号异常已被锁定，请联系客服解锁' };
      const match = await bcrypt.compare(body.password, admin.password);
      if (!match) return { code: -1, msg: '用户名或密码错误' };
      const { id, username, avatar } = admin;
      const { jwt: { secret, expiresIn } } = this.app.config;
      const token = this.app.jwt.sign({
        id, username,
      }, secret, { expiresIn });
      const newCount = admin.login_count + 1;
      const now = new Date();
      await admin.update({ login_count: newCount, login_time: now });
      return { code: 200, msg: '登陆成功', data: { id, username, avatar, token } };
    }
    return { code: -1, msg: '该手机号尚未注册' };
  }

  async adminRegister(body) {
    const {
      ctx: { model },
    } = this;
    // TODO 数据校验
    const { tel, username, nickname, sex, password, avatar } = body;
    const admin = await model.Admins.findOne({
      where: { tel },
    });
    if (admin) return { code: -1, msg: '该号码已被注册' };
    const hash = bcrypt.hashSync(password, this.config.bcrypt.saltRounds);
    const result = await model.Admins.create({
      tel, username, nickname, sex, avatar, password: hash,
    });
    if (result.id) {
      return { code: 200, msg: '注册成功' };
    }
    return { code: -1, msg: '注册失败' };
  }
}

module.exports = AdminService;
