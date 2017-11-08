import { combineReducers } from 'redux'
import { default as hello } from './modules/hello'

/**
 * Define Sagas
 */
export const sagas = []

/**
 * Define Reducers
 */
export const reducer = combineReducers({
  hello
})
