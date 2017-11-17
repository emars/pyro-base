/**
 * Create Store
 */
import { createStore, applyMiddleware, compose } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'

import { firebaseConfig } from './firebase'
import rootReducer from './reducer'
import sagas from './sagas'

const reduxFirebaseConfig = {
  userProfile: 'users'
}

export const history = createHistory()
const sagaMiddleware = createSagaMiddleware()

const initialState = {}
const enhancers = []

const middleware = [routerMiddleware(history), sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebaseConfig, reduxFirebaseConfig)
)(createStore)
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  composedEnhancers
)

sagas.forEach(saga => {
  sagaMiddleware.run(saga)
})

export default store
