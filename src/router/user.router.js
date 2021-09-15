const Router = require('koa-router');

const { register } = require('../controller/user.controller');
const { judgeExistUser } = require('../middleware/user.middleware');


// 创建用户路由接口
const userRouter = new Router({ prefix: '/user' });

// 用户注册接口
userRouter.post('/', judgeExistUser, register);

module.exports = userRouter;