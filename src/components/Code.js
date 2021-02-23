import React from 'react'
import styles from './style/code.less';

export default function Code({ codeString }) {
  return <pre className={styles.pre}>
    <code>{ codeString }</code>
  </pre>
}
