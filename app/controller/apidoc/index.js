/**
 * @apiDefine DefineSuccess
 * @apiError {String} msg 错误信息
 * @apiError {Number} code 状态码
 * @apiErrorExample  {json} error-example
 * {
 *   "code": -1
 *   "message": "错误提示"
 * }
 */

/**
 * @apiDefine getList
 * @apiParam {String} pageNum 页数
 * @apiParam {String} pageSize 每页条数
 * @apiParamExample {string} 请求参数格式:
 *   ?pageNum=1&pageSize=10
 *
 */
