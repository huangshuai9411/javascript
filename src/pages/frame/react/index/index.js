import React from 'react';
import Markdown from '@/components/Markdown';
import Code from '@/components/Code';
import docs from './doc';
import styles from './style.less';

export default function Reacts() {
  
  return (<div className={styles.React}>
    <Markdown docString={docs.doc1} />
    <Code codeString={docs.code1} />
  </div>)
}