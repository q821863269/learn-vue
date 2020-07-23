import { request } from './request'

export default {
    getGoodsDetail(iid) {
        return request({
            url: '/detail',
            params: {
                iid
            }
        })
    }
}