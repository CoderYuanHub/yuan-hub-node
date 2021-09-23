const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
// const userRouter = require('../router/user.router');
// const authRouter = require('../router/auth.router');
const errorHandle = require('./error-handle');
require('./config');
const readAllRouter = require('../router/index');


const app = new Koa();
app.useRouter = readAllRouter;
// 引用请求参数解析中间件
app.use(bodyparser());
app.useRouter();

// 路由注册
// app.use(userRouter.routes());
// app.use(userRouter.allowedMethods());
// app.use(authRouter.routes());
// app.use(authRouter.allowedMethods());
app.on('error', errorHandle);

module.exports = app;