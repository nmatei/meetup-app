import React from 'react'
import Component from 'react-class'
import { Flex } from 'Flex'
import join from 'join'

import Info from './Info'

import styles from './index.scss'

export default class Header extends Component {

  render(){
    const props = this.props
    const { user } = props
    const className = join(props.className, styles.header)

    console.log(props)
    return <Flex {...props} column alignItems="start" className={className}>
      <button style={{marginBottom: 10}} onClick={props.onLogout}>Logout</button>

      <Info label="Username: ">{user.login}</Info>
      <Info label="Name: ">{user.name}</Info>
      <Info label="Email: ">{user.email}</Info>


    </Flex>
  }
}
