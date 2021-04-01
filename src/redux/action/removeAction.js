import { START_REMOVECART, SUCCESS_REMOVECART, FAILURE_REMOVECART } from '../type/removeCartType'

export default removeCartAction = item => {
        return {
            type: SUCCESS_REMOVECART,
            payload: item
        }
}