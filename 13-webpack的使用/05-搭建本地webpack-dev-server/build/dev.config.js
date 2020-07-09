// 代码合并
const {merge} = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = merge(baseConfig, {
    // webpack-dev-server配置
    devServer: {
        contentBase: './dist',
        inline: true
    }
})