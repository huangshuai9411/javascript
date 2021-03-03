import React from 'react';
import Markdown from '@/components/Markdown';
import docs from './doc';
import styles from './index.css';

export default function BOM() {
  return (
    <div className={styles.Bom}>
      <Markdown docString={docs.docString1} />
    </div>
  );
}
