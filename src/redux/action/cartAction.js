import { CART_SUCCESS } from '../type/cartType'

export default cartAction = (payload, cart) => {
    return {
        payload,
        type: CART_SUCCESS
    }
}