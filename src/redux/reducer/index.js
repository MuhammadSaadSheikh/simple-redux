import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-community/async-storage'

import cartReducer from './cartReducer'
import removeCartReducer from './removeCartReducer'

const persistConfig = {
    key: 'root',
    storage : AsyncStorage,
    whileList : ['cartReducer']
}

const rootReducer =  combineReducers({
    cartReducer,
    removeCartReducer
})

export default persistReducer(persistConfig, rootReducer)