import React, { PropTypes } from 'react'
import Component from 'react-class'
import { Flex } from 'Flex'
import join from 'join'
import Field from 'react-field'

import styles from './index.scss'

export default class Login extends Component {

  render(){
    const props = this.props
    const className = join(props.className, styles.login)

    return <Flex {...props} justifyContent="center" className={className}>
      <form className={styles.form} onSubmit={this.onSubmit}>
        <Field
          placeholder="Github username"
          className={styles.field}
          value={props.username}
          onChange={props.setGithubUsername}
        />
        <button className={styles.button} type="submit">Save</button>
      </form>
    </Flex>
  }

  onSubmit(e){
    e.preventDefault()
    this.props.onSubmit(this.props.username)
  }
}

Login.propTypes = {
}
