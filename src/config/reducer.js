/**
 * The Application Root Reducer, use this to include 3rd party reducers
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { firebaseStateReducer } from 'react-redux-firebase'
import { Notifications } from 'pyro-components'

import { reducer as appReducer } from 'app/redux'

export default combineReducers({
  routing: routerReducer,
  app: appReducer,
  firebase: firebaseStateReducer,
  notifications: Notifications.reducer
})
