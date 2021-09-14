const Router = require('koa-router');

const { register } = require('../controller/user.controller');

// 创建用户路由接口
const userRouter = new Router({prefix: '/user'});

// 用户注册接口
userRouter.post('/', register)

module.exports = userRouter;