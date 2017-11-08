/**
 * The Application Root Reducer, use this to include 3rd party reducers
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { reducer as appReducer } from 'app/redux'

export default combineReducers({
  routing: routerReducer,
  app: appReducer
})
