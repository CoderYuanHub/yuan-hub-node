# YuanHubDemo

## 项目介绍

​		该项目针对的方式为社区、博客这一类编写一些通用接口，该项目以Koa框架为主以及结合其他中间件编写而成，同时该项目也是一个本人一个学习的项目，项目中存在任何问题或者有疑问可以随时联系我。

## 安装

```
npm install
```

## 启动

```
npm run start
```

## 项目结构



## 数据库以及表结构

本项目使用的数据库是`mysql8.0.26`版本，本项目有用户表、头像表、动态表、评论表、文件表、标签表以及标签和动态的关系表。sql语句在项目中。

## JWT实现token机制

jwt生成token的三步：header, payload,signature;

安装JWT包`npm install jsonwebtoken`，如下是项目中的使用

```javascript
//引入依赖包
const JWT = require('jsonwebtoken');
//openssl生成的私钥
const { PRIVATE_KEY } = require('../app/config');
class authController {
    async login (ctx, next) {
        const { id, name } = ctx.user;
        // jwt生成token
        const token = JWT.sign({id, name}, PRIVATE_KEY, {
            expiresIn: 60 * 60 * 24, //设置时长
            algorithm: 'RS256' //加密方式
        })
        ctx.body = {
            id,
            name,
            token
        };
    }
    async success (ctx, next) {
        ctx.body = '成功获取token～';
    }
}
module.exports = new authController();
```

## 本地加密（openssl）

1. 进入openssl环境: `opemssl`。
2. 生成私钥: `genrsa -out 私钥名称 大小` ，例：`genrsa -out private.key 1024` 。
3. 生成公钥: `rsa -in 私钥名称 -pubout -out 公钥名称`，例: `rsa -in private.key -pubout -out public.key`。



## 读取.env文件（dotenv）

具体操作可以查阅NPM中dotenv简介:https://www.npmjs.com/package/dotenv

