import React from 'react'
import Component from 'react-class'

import UserItem from 'src/component/UserItem'

class UserList extends Component {

  render(){
    return <ul>
      {this.renderUsers()}
    </ul>
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

export default UserList
