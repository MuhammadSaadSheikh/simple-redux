import { CART_SUCCESS, CART_START } from '../type/cartType'
import { SUCCESS_REMOVECART } from '../type/removeCartType'


const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    const { type, payload } = action
    
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