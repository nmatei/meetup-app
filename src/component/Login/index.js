import React, { PropTypes } from 'react'
import Component from 'react-class'
import { Flex } from 'Flex'
import join from 'join'
import Field from 'react-field'
import LoadMask from 'LoadMask'

import styles from './index.scss'

export default class Login extends Component {

  render(){
    const props = this.props
    const className = join(props.className, styles.login)

    return <Flex {...props} justifyContent="center" className={className}>
      <LoadMask visible={props.loading} />
      <form className={styles.form} onSubmit={this.onSubmit}>
        <Field
          placeholder="Github username"
          className={styles.field}
          value={props.loginUsername}
          onChange={props.setLoginUsername}
        />
        <button className={styles.button} type="submit">Login</button>
      </form>
    </Flex>
  }

  onSubmit(e){
    e.preventDefault()
    e.stopPropagation()

    this.props.onSubmit(this.props.loginUsername)
  }
}

Login.propTypes = {
}
