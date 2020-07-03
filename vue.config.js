let path = require('path');

function resolve (dir) {
    path.join(__dirname, dir);
}

module.exports = {
    chainWebpack: config => {
        // config.resolve.alias.set('@', resolve('src'))
    },
    configureWebpack: {
        resolve: {
            extensions: ['js', 'vue'],
            alias: {
                '@': resolve('src')
            }
        }
    }
}