const { verify } = require('jsonwebtoken');
const Router = require('koa-router');

const { login } = require('../controller/auth.controller');
const { verifyLogin  } = require('../middleware/auth.middleware');

const anthRouter = new Router();
anthRouter.post('/login', verifyLogin, login);

module.exports = anthRouter;
