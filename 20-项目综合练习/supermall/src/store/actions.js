import {
    ADD_COUNTER,
    ADD_TO_CART
} from "./mutation-types"

export default {
    addToCart(context, payload) {
        // let oldProduct = null;
        // for (let item of state.cartList) {
        //     if (item.iid === payload.iid) {
        //         oldProduct = item;
        //     }
        // }

        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
        // 判断oldProduct是否有值
        if (oldProduct) {
            context.commit(ADD_COUNTER, oldProduct)
        } else {
            payload.count = 1;
            context.commit(ADD_TO_CART, payload)
        }
    }
}