import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

// 1、通过Vue.use(插件)，安装插件
Vue.use(Router)

// 2、创建VueRouter对象
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/category',
        component: Category,
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/profile',
        component: Profile,
    },
]

const router = new Router({
    // 3、配置路由和组件之间的应用关系
    routes,
    // 开启history模式，url中就没有#出现
    mode: 'history'
})

// 4、将router对象传入到Vue实例
export default router