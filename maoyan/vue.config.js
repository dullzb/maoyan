// webpack 配置 node.js 文件 

const path = require('path')
module.exports = {
    //1. 给路径起别名
    // chainWebpack: callback(config)
    chainWebpack: config => {
        // config.resolve.alias.set(pathName,绝对路径)
        config.resolve.alias
            .set('components', path.resolve(__dirname, './src/components'))
            .set('pages', path.resolve(__dirname, './src/pages'))
            .set('styles', path.resolve(__dirname, './src/assets/styles'))
            .set('utils', path.resolve(__dirname, './src/utils'))
            .set('theatre', path.resolve(__dirname, './src/components/common/theatre'))
    },
    devServer: {
        proxy: {
            '/ajax': {
                target: 'http://m.maoyan.com',
                changeOrigin: true
            },
        }
    }
}