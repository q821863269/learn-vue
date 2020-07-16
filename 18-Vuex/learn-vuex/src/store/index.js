import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from "./mutaions-type"

// 1.安装插件
Vue.use(Vuex)

// 模块A
const moduleA = {
    state: {
        name: 'zhangsan'
    },
    mutations: {
        updateName(state, payload) {
            state.name = payload
        }
    },
    actions: {
        // 这里的context只能调用本moduleA的mutations
        aUpdateName(context) {
            // 这里的context可以获取到很多东西，包括根
            console.log(context)
            setTimeout(() => {
                context.commit('updateName', 'wunai')
            }, 1000)
        }
    },
    getters: {
        fullName(state) {
            return state.name + ' ' + state.name;
        }
    }
}

// 2.创建对象
const store = new Vuex.Store({
    // 放状态相关信息
    state: {
        counter: 0,
        info: {
            name: 'kobe',
            age: 40,
            height: 198
        }
    },
    // Vuex的sotre状态的更新唯一方式
    mutations: {
        // 常量写法（推荐使用）
        [INCREMENT](state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        incrementCount(state, count) {
            state.counter += count
        },
        incrementCount2(state, payload) {
            console.log(payload)
        },
        updateInfo(state) {
            state.info.name = 'who'

            // 这种方式不会触发响应式
            //state.info['address'] = '洛杉矶'
            //delete state.info.age
            // 这种方式会触发响应式
            //Vue.set(state.info, 'address', '洛杉矶')
            //Vue.delete(state.info, 'age')

            // 不推荐在mutation中执行异步操作
            // 否则devtools将不能很好的跟踪这个操作什么时候被完成
            // 异步操作应该在action中执行
            // setTimeout(()=> {
            //     state.info.name = 'who'
            // }, 1000)
        }
    },
    actions: {
        // context: 上下文
        aUpdateInfo(context, payload) {
            console.log(payload)
            setTimeout(() => {
                context.commit('updateInfo')
                payload.success()
            }, 1000)
        },
        bUpdateInfo(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(payload)
                    context.commit('updateInfo')
                    resolve('dispatch完成了')
                }, 1000)
            })
        }
    },
    // 类似于计算属性, 这里还有个getters属性
    getters: {
        powerCounter(state, getters) {
            return state.counter * state.counter
        },
        // 如果要接收参数要这么做
        testParams(state) {
            return function (param) {
                return state.counter * param
            }
        }
    },
    modules: {
        // 这个的用法有点奇怪，这里面的元素会变放到state中
        a: moduleA
    }
})

// 3.导出store对象
export default store