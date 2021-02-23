import React from 'react';
import Markdown from '@/components/Markdown';
import { header } from './doc';
import styles from './style.less';

export default function Prepare() {
  
  return (<div className={styles.Prepare}>
    <Markdown docString={header} />
  </div>)
}