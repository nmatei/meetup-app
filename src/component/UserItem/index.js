import React from 'react'
import Component from 'react-class'
import join from 'join'

import { Link } from 'react-router'

import styles from './index.scss'

export default class UserItem extends Component {
  render(){
    const props = this.props
    const user = props.user

    const className = join(props.classNames, styles.item)

    return <Link to={`/${user.id}`} {...props} className={className}>
      {user.name}
    </Link>
  }
}
