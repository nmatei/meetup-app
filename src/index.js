import React from 'react'

import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

import store, { history } from 'src/store'

import { Main, User } from 'src/page'

import './index.scss'

export default (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/">
        <IndexRoute component={Main} />
        <Route path=":id" component={User} />
      </Route>
    </Router>
  </Provider>
)
