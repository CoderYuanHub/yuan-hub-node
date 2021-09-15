const errorTypes = require('../constants/error-types');

const handlerError = (error, ctx) => {
    const errorMsg = error.message;
    let status, message;
    switch (errorMsg) {
        case errorTypes.NAME_OR_PASSWORD_IS_REQUIRE:
            status = 400;
            message = "用户名或者密码不能为空。";
            break;
        case errorTypes.NAME_ALREADY_EXISIS:
            status = 409; //conflict
            message = "用户已经存在～";
            break;
        case errorTypes.NAME_IS_NOT_EXISIS:
            status = 400; //参数错误
            message = "用户不存在～";
            break;
        case errorTypes.PASSWORD_IS_ERROR:
            status = 400; 
            message = "密码错误～";
            break;
        case errorTypes.UNAUTHORIZATION:
            status = 401; 
            message = "token失效～";
            break;
        case errorTypes.UNPERMISSION:
            status = 401; 
            message = "权限不够～";
            break;    
        default:
            status = 404;
            message = "NOT FOUND";
            break;
    }
    ctx.status = status;
    ctx.body = message;
}

module.exports = handlerError;