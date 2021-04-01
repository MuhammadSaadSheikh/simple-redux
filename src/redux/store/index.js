import { createStore, applyMiddleware } from 'redux'
import { createLogger  } from 'redux-logger'
import { persistStore } from 'redux-persist'

//All Reducer
import allReducer from '../reducer'

const store = createStore(allReducer, applyMiddleware(createLogger()))
const persistor = persistStore(store)

export { store, persistor }