import React from 'react'
import Component from 'react-class'
import { connect } from 'react-redux'
import find from 'array-find'

import actions from 'src/store/action'

import User from 'src/component/User'

class UserPage extends Component {

  render(){
    const id = this.props.params.id
    const users = this.props.users
    const user = find(users, u => u.id == id)

    return user?
      <User {...this.props} user={user} />:
      null
  }
}

const select = (state) => {
  return state
}

export default connect(select, actions)(UserPage)
