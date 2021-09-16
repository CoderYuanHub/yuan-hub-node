const userService = require('../service/user.service');
const md5Password = require('../utils/user.utils');
class UserController {
    // 用户注册
    async register(ctx, next) {
        const { username, password } = ctx.request.body;
        const newPassword = md5Password(password);
        const result = await userService.register(username, newPassword);
        ctx.body = result;
    }


}

module.exports = new UserController();