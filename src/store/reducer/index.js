import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'

import users from './users'
import userFilter from './userFilter'

const allReducers = combineReducers({
  users,
  userFilter,
  router
})

export default (state = {}, action) => {
  return allReducers(state, action)
}
