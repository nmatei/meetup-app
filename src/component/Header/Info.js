import React from 'react'
import Component from 'react-class'
import InlineBlock from 'react-inline-block'

import styles from './index.scss'

export default class Info extends Component {
  render(){
    const props = this.props

    return <InlineBlock className={styles.info}>
      <InlineBlock className={styles.infoLabel}>{props.label}</InlineBlock>
      <InlineBlock className={styles.infoValue}>{props.children}</InlineBlock>
    </InlineBlock>
  }
}
