const Multer = require('koa-multer');

const uploadAvatar = Multer({
    dest: './upload/avatar'
});

const uploadAvatarSingle = uploadAvatar.single('avatar')
module.exports = {
    uploadAvatarSingle
}