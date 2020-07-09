// 使用CommonJs的模块化规范
const {add, mul} = require('./js/mathUtils.js')

console.log(add(1,2))
console.log(mul(2,2))

// 使用ES6的模块化的规范
import {name, age, height} from './js/info'

console.log(name)
console.log(age)
console.log(height)

// 依赖css文件
require('./css/normal.css')
// 依赖less文件
require('./css/special.less')

document.writeln('<h2>我是好帅</h2>')

// 使用Vue进行开发
import Vue from 'vue'
import App from './vue/App.vue'

const app = new Vue({
    el: '#app',
    template: '<App />',
    components: {
        App
    }
})