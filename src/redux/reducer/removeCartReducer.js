// import { START_REMOVECART, SUCCESS_REMOVECART, FAILURE_REMOVECART } from '../type/removeCartType'

// const initialState = {
//     removeCart: ''
// }

// const removeCartReducer = (state = initialState, action) => {
//     const { type, payload } = action
//     switch (type) {
//         case SUCCESS_REMOVECART:
//             // return {cart: payload }
//             return { cart: [...state.cart.filter(cart => cart !== payload)] }
//         default:
//             return { state }
//     }
// }

// export default removeCartReducer