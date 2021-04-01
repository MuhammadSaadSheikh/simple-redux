import { CART_SUCCESS, CART_START } from '../type/cartType'
import { SUCCESS_REMOVECART } from '../type/removeCartType'


const initialState = {
    cart: []
}
console.log("🚀 ~ file: cartReducer.js ~ line 8 ~ cart", initialState.cart)

const cartReducer = (state = initialState, action) => {
    const { type, payload } = action
    console.log("🚀 ~ file: cartReducer.js ~ line 12 ~ cartReducer ~ payload", payload)
    
    switch (type) {
        case CART_START:
            return { state }
        case CART_SUCCESS:
            return { ...state, cart: [...state.cart, payload] }
        case SUCCESS_REMOVECART:
            return { cart: [...state.cart.filter(cart => cart !== payload)] }
        default:
            return state
    }
}

export default cartReducer