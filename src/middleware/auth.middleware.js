const userService = require('../service/user.service');
const errorTypes = require('../constants/error-types');
const md5password = require('../utils/user.utils');


const verifyLogin = async (ctx, next) => {
    const { username, password } = ctx.request.body;
     // 判断账号密码不能为空
     if (!username || !password) {
        const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRE);
        return ctx.app.emit('error', error, ctx);
    }
    // 判断用户是否存在
    const reslut = await userService.judgeExistUser(username);
    if (!reslut.length) {
        const error = new Error(errorTypes.NAME_IS_NOT_EXISIS);
        return ctx.app.emit('error', error, ctx);
    } 
    const loginPassword = md5password(password);
    const dataBasePassword = reslut[0].password;
    if (loginPassword != dataBasePassword) {
        const error = new Error(errorTypes.PASSWORD_IS_ERROR);
        return ctx.app.emit('error', error, ctx);
    }
    await next();
}

module.exports = {
    verifyLogin
}