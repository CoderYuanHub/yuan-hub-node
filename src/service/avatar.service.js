const poll = require('../app/database');
class AvatarService {
    async uploadAvatar (filename, mimetype, size) {
        const sql = `INSERT INTO avatar (filename, mimetype, size) VALUES(?,?,?);`;
        const [result] = await poll.execute(sql, [filename, mimetype, size]);
        return result;

    }
}

module.exports = new AvatarService();