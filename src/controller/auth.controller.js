// const userService = require('../service/user.service');

class AuthController {
    // 用户登陆
    async login(ctx, next) {
        ctx.body = '登陆成功～';
        // const { username, password } = ctx.request.body;
        
        // const result = await userService.judgeExistUser(username);
        // return result;
    }
}

module.exports = new AuthController();