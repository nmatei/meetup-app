import React from 'react'

import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

import store, { history } from 'src/store'

import { Main, User } from 'src/page'

import Presentation from 'src/presentation'

import './index.scss'

export default (
  <Provider store={store}>
    <Router history={history}>

      <Route path="/presentation" component={Presentation} />
      <Route path="/:slide" component={Presentation} />

      <Route path="/">
        <IndexRoute component={Main} />
        <Route path="user/:login" component={User} />
      </Route>
    </Router>
  </Provider>
)
