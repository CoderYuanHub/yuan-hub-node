const JWT = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../app/config');
class AuthController {
    // 用户登陆
    async login(ctx, next) {
        const { id, username } = ctx.user;
        const token = JWT.sign({id, username}, PRIVATE_KEY, {
            expiresIn: 60 * 60 * 24 //设置token时长，单位秒
        });
        ctx.body = {
            id,
            username,
            token
        };
    }
}

module.exports = new AuthController();