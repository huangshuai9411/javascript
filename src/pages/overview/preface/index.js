import React from 'react';
import Markdown from '@/components/Markdown';
import docString from './doc';
import styles from './index.less';

export default function Preface() {
  
  return (
    <div className={styles.Preface}>
      <Markdown docString={docString} />
    </div>
  );
}
