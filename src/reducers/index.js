/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux'
import authenticationReducer from './authentication/reducer'

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer (injectedReducers = {}) {
  const rootReducer = combineReducers({
    auth: authenticationReducer,
    ...injectedReducers
  })

  return rootReducer
}
