const poll = require('../app/database');
class UserService {
    // 注册用户
    async register(username, password) {
        try {
            const sql = `INSERT INTO user (username, password) VALUES(?,?);`;
            const result = await poll.execute(sql, [username, password]);
            return result;
        } catch (error) {
            console.log(error);
        }
    }
    // 根据用户名查找用户
    async judgeExistUser(username) {
        try {
            const sql = `SELECT * FROM user WHERE user.username = ?;`;
            const [result] = await poll.execute(sql, [username]);
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new UserService();