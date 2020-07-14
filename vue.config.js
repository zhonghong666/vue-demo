let path = require('path');

function resolve (dir) {
    path.join(__dirname, dir);
}

module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['js', 'vue'],
            alias: {
                '@': resolve('src')
            }
        }
    }
}