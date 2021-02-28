import React from 'react';
import Markdown from '@/components/Markdown';
import LittleTest from '@/components/LittleTest';
import Code from '@/components/Code';
import { ifs, elseif, switchCase, docString1, docString2, docString3, docString4 } from './doc';
import styles from './index.less';

export default function Condition() {
  return (
    <div className={styles.Condition}>
      <Markdown docString={docString1} />
      <Code codeString={ifs} />
      <Markdown docString={docString2} />
      <Code codeString={elseif} />
      <LittleTest id="if" /><p />
      <Markdown docString={docString3} />
      <Code codeString={switchCase} />
      <Markdown docString={docString4} />
      <LittleTest id="switch" /><p />
    </div>
  );
}
