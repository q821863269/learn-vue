import axios from 'axios'

export function request(config) {
    // 创建axios的实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 3000
    })

    // 如何使用axios拦截器
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        return err
    })

    instance.interceptors.response.use(response  => {
        return response.data
    }, err => {
        return err
    })

    // instance本身返回的就是Promise
    return instance(config)
}