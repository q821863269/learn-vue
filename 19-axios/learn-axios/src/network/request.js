import axios from 'axios'

/* export function request(config, success, failure) {
    // 创建axios的实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 3000
    })

    instance(config)
        .then(res => {
            success(res)
        })
        .catch(err => {
            failure(err)
        })
} */

/* export function request(config) {
    // 创建axios的实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 3000
    })

    instance(config.baseConfig)
        .then(res => {
            config.success(res)
        })
        .catch(err => {
            config.failure(err)
        })
} */

/* export function request(config) {
    return new Promise((resolve, reject) => {
        // 创建axios的实例
        const instance = axios.create({
            baseURL: 'http://123.207.32.32:8000',
            timeout: 3000
        })

        instance(config)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
} */

export function request(config) {
    // 创建axios的实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 3000
    })

    // 如何使用axios拦截器
    instance.interceptors.request.use(config => {
        console.log(config)
        return config
    }, err => {
        console.log(err)
    })

    instance.interceptors.response.use(config => {
        console.log(config)
        return config
    }, err => {
        console.log(err)
    })

    // instance本身返回的就是Promise
    return instance(config)
}