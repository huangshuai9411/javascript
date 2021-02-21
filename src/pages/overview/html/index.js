import React from 'react';
import Markdown from '@/components/Markdown';
import docString from './doc';
import styles from './style.less';

export default function Html() {
  
  return (<div className={styles.Html}>
    <Markdown docString={docString} />
  </div>)
}