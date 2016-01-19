import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import keymirror from 'keymirror'

import users from './users'
import userFilter from './userFilter'
import connectedReducers from './connectedReducers'

import initialState from '../initialState'

const reducers = {
  users,
  userFilter,
  router
}

const combinedReducers = combineReducers(reducers)

export default (state = initialState, action) => {
  const newState = connectedReducers(state, action)

  if (newState != state){
    return newState
  }

  return combinedReducers(
    Object.keys(keymirror(reducers))
      .reduce((acc, key) => {
        acc[key] = state[key]
        return acc
      },
      {}
    ),
    action
  )
}
