const mysql = require('mysql2');
const { MYSQL_HOST, MYSQL_PORT, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD } = require('./config');
// 创建数据库连接池
const poll = mysql.createPool({
    host: MYSQL_HOST, //主机
    port: MYSQL_PORT, //端口
    database: MYSQL_DATABASE, //数据库名称
    user: MYSQL_USER, //数据帐号
    password: MYSQL_PASSWORD, //数据库密码
    connectionLimit: 10 //连接数
});
// 测试连接是否连接成功
poll.getConnection((err, conn) => {
    conn.connect(err => {
        if (err) {
            console.log('数据库连接失败');
        } else {
            console.log('数据库连接成功～');
        }
    })
})
// 数据库返回的是primes方便后续操作
module.exports = poll.promise();