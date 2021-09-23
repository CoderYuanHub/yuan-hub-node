const Router = require('koa-router');
const Multer = require('koa-multer');
const avatarRouter = new Router({ prefix: '/avatar' });
const { uploadAvatar } = require('../controller/avatar.controller');
const { uploadAvatarSingle } = require('../middleware/file.middleware');



// 头像上传
avatarRouter.post('/', uploadAvatarSingle , uploadAvatar);

module.exports = avatarRouter;