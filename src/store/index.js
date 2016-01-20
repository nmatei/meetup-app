import { createStore, applyMiddleware } from 'redux'
import { syncHistory, routeReducer } from 'redux-simple-router'
import thunk from 'redux-thunk'

import history from './history'
import reducers from './reducer'
import logger from './logger'

//sync dispatched route actions to the history

const reduxRouterMiddleware = syncHistory(history)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware, thunk, logger)(createStore)

const store = createStoreWithMiddleware(reducers)

export default store

export { history }
