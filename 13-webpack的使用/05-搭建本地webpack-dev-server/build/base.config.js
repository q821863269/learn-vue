const path = require('path')
// 处理vue-loader打包出错
const vueLoaderPlugin = require('vue-loader/lib/plugin')
// 设置打包js的banner
const webpack = require('webpack')
// 打包html
const htmlWebpackPlugin = require('html-webpack-plugin')
// 丑化压缩代码
//const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
        // 在公共资源前面会加上publicPath
        //publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // css-loader只负责加载
                // style-loader负责将样式添加到DOM中
                // 使用多个loader的时候，是从右向读的，所以顺序不能变
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 当加载的图片，小于limit时，会将图片编译成base64字符串形式
                            // 当加载的图片，大于limit时，需要使用file-loader模块进行加载
                            limit: 30000,
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    plugins: [
        new vueLoaderPlugin(),
        new webpack.BannerPlugin('最终版权归null所有'),
        new htmlWebpackPlugin({
            template: 'index.html'
        }),
        // 开发的时候不需要丑化，打包的时候才需要
        //new uglifyjsWebpackPlugin()
    ],
    // 解决路径问题
    resolve: {
        // alias: 别名配置
        extensions: ['.js', '.css', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    // webpack-dev-server配置
    // devServer: {
    //     contentBase: './dist',
    //     inline: true
    // }
}