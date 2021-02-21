import React, { useMemo } from 'react'
import { markdown } from 'markdown';
import styles from './style/markdown.less';

export default function Markdown({ docString }) {
  const __html = useMemo(() => markdown.toHTML(docString || ''), [docString]);

  return <div className={styles.Markdown} dangerouslySetInnerHTML={{__html}} />;
}