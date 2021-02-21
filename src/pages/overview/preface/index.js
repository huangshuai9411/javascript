import React, { useState, useEffect } from 'react';
import { markdown } from 'markdown';
import docString from './doc';
import styles from './index.less';

export default function Preface() {
  const [innerHTML, setInnerHTML] = useState('');
  useEffect(() => {
    setInnerHTML(markdown.toHTML(docString));
  }, []);
  
  return (
    <div className={styles.Preface}>
      <h3 className={styles.intro} dangerouslySetInnerHTML={{__html: innerHTML}} />
    </div>
  );
}
