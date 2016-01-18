import React from 'react'
import Component from 'react-class'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import UserItem from 'src/component/UserItem'

import actions from 'src/store/action'

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
  }
  render(){
    return <div>
      Hello

      <input
        type="text"
        value={this.state.username}
        onKeyPress={this.onKeyPress}
        onChange={e => this.setState({ username: e.target.value})}
      />
      {this.renderUsers()}
      {this.props.children}
    </div>
  }

  onKeyPress(e){
    if (e.key === 'Enter' && this.state.username){
      this.addUser(this.state.username)
      this.setState({
        username: ''
      })
    }
  }

  addUser(username){
    this.props.addUser({
      name: username
    })
  }

  renderUsers(){
    const users = this.props.users

    return <ul style={{margin: 0, padding: 0}}>
      {users.map(this.renderUser)}
    </ul>
  }

  renderUser(user, index){
    return <UserItem key={index} user={user} />
  }
}

const select = (state) => {
  return state
}

export default connect(select, actions)(Main)
