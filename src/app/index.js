const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const userRouter = require('../router/user.router');
const errorHandle = require('./error-handle');

const app = new Koa();
// 引用请求参数解析中间件
app.use(bodyparser());
// 路由注册
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
app.on('error', errorHandle);

module.exports = app;