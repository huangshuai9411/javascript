import React from 'react';
import Markdown from '@/components/Markdown';
import docString from './dependency/doc';
import styles from './dependency/style.less';


export default function Html() {
  
  return (<div className={styles.Html}>
    <Markdown docString={docString} />
  </div>)
}