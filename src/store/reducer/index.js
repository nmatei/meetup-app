import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import connectedReducers from './connectedReducers'

const reducers = {
  app: connectedReducers,
  router
}

export default combineReducers(reducers)
