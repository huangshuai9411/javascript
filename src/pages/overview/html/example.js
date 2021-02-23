import React from 'react'
import Markdown from '@/components/Markdown';
import { example } from './dependency/doc';
import styles from './dependency/style.less'

export default function Example() {
  
  return (<div className={styles.Example}>
    <Markdown docString={example} />
  </div>)
}