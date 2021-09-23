const fs = require('fs');

const readAllRouter = function () {
    fs.readdirSync(__dirname).forEach(item => {
        if (item === 'index.js') return;
        const Router = require(`../router/${item}`);
        this.use(Router.routes());
        this.use(Router.allowedMethods())
    })
}

module.exports = readAllRouter;
