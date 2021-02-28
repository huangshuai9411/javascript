import React from 'react';
import Markdown from '@/components/Markdown';
import LittleTest from '@/components/LittleTest';
import Code from '@/components/Code';
import { loop, codes } from './doc';
import styles from './style.less';

export default function Loop() {
  return (
    <div className={styles.Loop}>
      <Markdown docString={loop.docString1} />
      <Code codeString={codes.for} />
      <LittleTest id="for" /><p />
      <Markdown docString={loop.docString2} />
      <Code codeString={codes.while} />
      <LittleTest id="while" /><p />
      <Markdown docString={loop.docString3} />
      <Code codeString={codes.doWhile} />
      <LittleTest id="doWhile" /><p />
      <Markdown docString={loop.docString4} />
      <LittleTest id="loop" /><p />
      <Markdown docString={loop.breakLoop} />
      <LittleTest id="break" /><p />
      <Markdown docString={loop.docString5} />
      <LittleTest id="continue" />
    </div>
  );
}
