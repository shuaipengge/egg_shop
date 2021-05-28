'use strict';

const fs = require('fs');
const path = require('path');
const sendToWormhole = require('stream-wormhole');
const Controller = require('egg').Controller;

class UploadController extends Controller {
  /**
   * @api {post} /api/v1/upload 文件上传
   * @apiGroup upload
   * @apiName Upload
   * @apiDescription 文件上传
   *
   * @apiSampleRequest /api/v1/upload
   *
   * @apiUse DefineError
   * @apiSuccess {Sting} filename 文件名
   * @apiSuccessExample  {json} success-example
   * {
   *    "code" : 200,
   *    "msg": "获取成功"
   *    "data": {
   *      "filename": "1622215170954zshz1.jpg"
   *    }
   * }
   */

  async upload() {
    const { ctx } = this;
    // file读取方式的IO操作有写入缓存文件，读取缓存文件，写入文件，总共3次IO操作。而stream流的方式没有缓存文件这个操作，也就是说IO操作只有一次
    const stream = await ctx.getFileStream();
    const filename = new Date().getTime() + stream.filename;

    // 创建文件写入路径
    const target = path.join('./app/', `public/${filename}`);

    const result = await new Promise((resolve, reject) => {
      // 创建文件写入流
      const remoteFileStrem = fs.createWriteStream(target);
      // 以管道方式写入流
      stream.pipe(remoteFileStrem);

      let errFlag;
      // 监听error事件
      remoteFileStrem.on('error', err => {
        errFlag = true;
        // 停止写入
        sendToWormhole(stream);
        remoteFileStrem.destroy();
        console.log(err);
        reject(err);
      });

      // 监听写入完成事件
      remoteFileStrem.on('finish', () => {
        if (errFlag) return;
        resolve({ filename, name: stream.fields.name });
      });
    });

    ctx.body = { status: true, msg: '上传成功', data: result };
  }
}

module.exports = UploadController;
