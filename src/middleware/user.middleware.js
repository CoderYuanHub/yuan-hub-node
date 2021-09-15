const userService = require('../service/user.service');
const errorTypes = require('../constants/error-types');
// 判断用户是否存在
const judgeExistUser = async (ctx, next) => {
    const { username, password } = ctx.request.body;
    // 判断账号密码不能为空
    if (!username || !password) {
        const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRE);
        return ctx.app.emit('error', error, ctx);
    }
    const reslut = await userService.judgeExistUser(username);
    if (reslut) {
        const error = new Error(errorTypes.NAME_ALREADY_EXISIS);
        return ctx.app.emit('error', error, ctx);
    }
}

module.exports = {
    judgeExistUser
}