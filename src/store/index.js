import { createStore, applyMiddleware } from 'redux'
import { syncHistory, routeReducer } from 'redux-simple-router'

import history from './history'
import reducers from './reducer'

//sync dispatched route actions to the history

const reduxRouterMiddleware = syncHistory(history)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)

export default createStoreWithMiddleware(reducers)

export { history }
