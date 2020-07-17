import Vue from 'vue'
import App from './App'
//import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 基本使用
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(data => {
//   console.log(data)
// })

// axios({
//   method: 'get',
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(data => {
//   console.log(data)
// })

// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 3000

// // axios发送并发请求
// axios.all([
//   axios({
//     url: '/home/multidata',
//   }),
//   axios({
//     url: '/home/data',
//     params: {
//       type: 'pop',
//       page: 1
//     }
//   })
// ]).then(axios.spread((res1, res2) => {
//   console.log(res1)
//   console.log(res2)
// }))

// 对象解构
// const obj = {
//   name: 'kobe',
//   age: 30
// }

// const {name, age} = obj;

// const names = ['whu', 'kobe', 'james']
// // const name1 =  names[0]
// // const name2 =  names[1]
// // const name3 =  names[2]
// // 数组解构
// const [name1, name2, name3] = names