import React from 'react'
import Component from 'react-class'
import { connect } from 'react-redux'
import find from 'array-find'

import actions from 'src/store/action'

import User from 'src/component/User'

class UserPage extends Component {

  render(){
    const user = this.props.user

    return user?
      <User {...this.props} style={{padding: 10}} user={user} />:
      null
  }
}

const select = (state, props) => {
  return {
    user: find(state.app.users, u => u.login === props.params.login)
  }
}

export default connect(select, actions)(UserPage)
