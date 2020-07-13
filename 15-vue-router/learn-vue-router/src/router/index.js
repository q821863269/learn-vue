import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'

// 1、通过Vue.use(插件)，安装插件
Vue.use(Router)

// 2、创建VueRouter对象
const routes = [
  {
    path: '',
    // redirect重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:id',
    component: User
  }
]

const router = new Router({
  // 3、配置路由和组件之间的应用关系
  routes,
  // 开启history模式，url中就没有#出现
  mode: 'history',
  // 设置路由匹配成功设置的class
  linkActiveClass: 'active'
})

// 4、将router对象传入到Vue实例
export default router