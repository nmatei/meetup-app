import React, { PropTypes } from 'react'
import Component from 'react-class'

export default class User extends Component {

  render(){
    const { user } = this.props

    return <div {...this.props} user={null}>
      User {user.login}
      {this.renderDetails(user)}
    </div>
  }

  renderDetails(user){
    return <ul>
      {Object.keys(user).map(k => {
        return <li key={k}>{k}: {user[k]}</li>
      })}
    </ul>
  }
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
}
