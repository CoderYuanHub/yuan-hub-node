const avatarService = require('../service/avatar.service');
class AvatarController {
    async uploadAvatar(ctx, next) {
        const { filename, mimetype, size } = ctx.req.file;
        const result = await avatarService.uploadAvatar(filename, mimetype, size);
        ctx.body = result;
    }
}

module.exports = new AvatarController();


