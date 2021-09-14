const poll = require('../app/database');
class UserService {
    async register (username, password) {
        try {
            const sql = `INSERT INTO user (username, password) VALUES(?,?);`;
            const result = await poll.execute(sql, [username, password]);
            console.log(2);
            console.log(result);
            return result;
        } catch (error) {
            console.log(error);
        }
        
    }
}

module.exports = new UserService();