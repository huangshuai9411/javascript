import React from 'react';
import Markdown from '@/components/Markdown';
import Code from '@/components/Code';
import docs from './doc';
import styles from './style.less';

export default function Scope() {
  
  return (<div className={styles.scope}>
    <Markdown docString={docs.docString1} />
    <Code codeString={docs.closure} />
    <Markdown docString={docs.docString2} />
  </div>)
}