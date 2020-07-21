import { request } from './request'

export default {
    getHomeMultidata() {
        return request({
            url: '/home/multidata'
        })
    },
    getHomeGoods(type, page) {
        return request({
            url: '/home/data',
            params: {
                type, page
            }
        })
    }
}