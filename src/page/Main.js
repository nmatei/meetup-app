import React from 'react'
import Component from 'react-class'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import assign from 'object-assign'

import UserItem from 'src/component/UserItem'
import Login from 'src/component/Login'
import Header from 'src/component/Header'
import UserList from 'src/component/UserList'

import actions from 'src/store/action'

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
  }
  render(){

    const props = this.props

    if (!props.user){
      return <Login
        loading={props.loading}
        loginUsername={props.loginUsername}
        setLoginUsername={props.setLoginUsername}
        onSubmit={props.loadGithubInfo}
      />
    }

    return <div style={{padding: 10}}>
      <Header user={props.user} onLogout={props.logout}/>
      <UserList users={props.users}/>
    </div>
  }

}

const select = (state) => {
  return assign({}, state.app, state.router)
}

export default connect(select, actions)(Main)
