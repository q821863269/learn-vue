import Vue from 'vue'
import Router from 'vue-router'

// 这种是直接加载
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 这种是路由懒加载
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

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
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   // 设置默认显示新闻
      //   path: '',
      //   redirect: 'news',
      // },
      {
        path: 'news',
        component: HomeNews,
        meta: {
          title: '新闻'
        },
      },
      {
        path: 'message',
        component: HomeMessage,
        meta: {
          title: '消息'
        },
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
    beforeEnter: (to, from, next) => {
      console.log('我是About的beforeEach')
      next()
    }
  },
  {
    path: '/user/:id',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '我的'
    },
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

// 全局导航守卫(前置钩子)
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  // 这个方法必须调用
  next()
})

// 后置钩子
router.afterEach((to, from) => {
  //console.log(from)
  //console.log(to)
}) 

// 4、将router对象传入到Vue实例
export default router