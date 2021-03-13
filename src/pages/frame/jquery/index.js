import React from 'react';
import Markdown from '@/components/Markdown';
import Code from '@/components/Code';
import docs from './doc';
import styles from './style.less';

export default function JQuery() {
  
  return (<div className={styles.JQuery}>
    <Markdown docString={docs.doc1} />
    <Code codeString={docs.code1} />
    <Markdown docString={docs.doc2} />
    <Code codeString={docs.code2} />
    <Markdown docString={docs.doc3} />
    <Code codeString={docs.code3} />
    <Markdown docString={docs.doc4} />
    <Code codeString={docs.code4} />
    <Markdown docString={docs.doc5} />
  </div>)
}