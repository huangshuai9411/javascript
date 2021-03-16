import React from 'react';
import Markdown from '@/components/Markdown';
import Code from '@/components/Code';
import docs from './doc';
import styles from './style.less';

export default function MVC() {
  
  return (<div className={styles.MVC}>
    <Markdown docString={docs.doc1} />
    <Code codeString={docs.code1} />
    <Markdown docString={docs.doc2} />
  </div>)
}