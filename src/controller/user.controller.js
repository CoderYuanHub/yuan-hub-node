const userService = require('../service/user.service');
class UserController {
    // 用户注册
    async register (ctx, next) {
        const { username, password } = ctx.request.body;
        const result = await userService.register(username, password);
        console.log(result);
        ctx.body = result;
    }

}

module.exports = new UserController();