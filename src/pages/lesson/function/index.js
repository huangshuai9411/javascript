import React from 'react';
import Markdown from '@/components/Markdown';
import Code from '@/components/Code';
import LittleTest from '@/components/LittleTest';
import docs from './doc';
import styles from './style.less';

export default function Functions() {

  return (<div className={styles.Functions}>
    <Markdown docString={docs.introduce1} />
    <Code codeString={docs.sumOf100} />
    <Markdown docString={docs.introduce2} />
    <Code codeString={docs.codeString1} />
    <Markdown docString={docs.introduce3} />
    <Code codeString={docs.codeString2} />
    <Markdown docString={docs.introduce4} />
    <LittleTest id="function1" />
    <LittleTest id="function2" /><p />
    <Markdown docString={docs.introduce5} />
  </div>)
}