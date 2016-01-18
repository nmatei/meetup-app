import React, { PropTypes } from 'react'
import Component from 'react-class'

export default class User extends Component {

  render(){
    return <div>
      Users {this.props.user.name}
    </div>
  }
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
}
