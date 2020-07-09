// 丑化压缩代码
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
// 代码合并
const {merge} = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = merge(baseConfig, {
    plugins: [
        // 开发的时候不需要丑化，打包的时候才需要
        new uglifyjsWebpackPlugin()
    ]
})