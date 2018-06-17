// 引入依赖模块
var path = require('path')
var utils = require('./utils')
    // 获取配置
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var webpack = require("webpack")

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    // 配置webpack编译入口
    entry: {
        // babel-polyfill 兼容Promise等ES6新方法
        app: ["babel-polyfill", "./src/main.js"]
    },
    // 配置webpack输出路径和命名规则
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath :
            config.dev.assetsPublicPath
    },
    resolve: {
        // 自动解析确定的拓展名,
        extensions: ['.js', '.vue', '.json'],
        // 创建import或require的别名，一些常用的，路径长的都可以用别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            // 静态资源目录
            'static': resolve('static'),
            // 根目录
            '@': resolve('src'),
            // 公共资源
            'common': resolve('src/common'),
            // 公共组件
            'components': resolve('src/components'),
            // 后台请求API目录
            'api': resolve('src/api')
        }
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 90000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}