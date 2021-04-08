import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
//container
import { Home, Location } from './src/container'

const App = props => {

  return (
    <Provider store={store} >
      <PersistGate persistor={persistor} loading={null} >
        {/* <Home /> */}
        <Location />
      </PersistGate>
    </Provider>
  )
}

export default App