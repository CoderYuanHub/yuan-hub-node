const mysql = require('mysql2');

// 创建数据库连接池
const poll = mysql.createPool({
    host: 'localhost', //主机
    port: 3306, //端口
    database: 'yuan_hub_test', //数据库名称
    user: 'root', //数据帐号
    password: 'Wyy12345.', //数据库密码
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