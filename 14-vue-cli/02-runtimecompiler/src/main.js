// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

// runtime-compiler
// template -> ast -> render -> vdom -> UI

// runtime-only
// 那么.vue文件中的template是由谁处理的？
// 答：由vue-template-compiler编译成了render对象
// render -> vdom -> UI