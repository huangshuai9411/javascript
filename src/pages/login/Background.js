import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import styles from './style.less';

const list = [
`Javascript Cascading
Style Sheets HTML`,
`function fighting(could) {
  if (could) do {
    console.log('never give up');
  } else {
    console.log('hold on');
  }
}`,
`for (const item of array) {
  document.write(
  'I known U can do it, right ?'
 );
}`, 
`while (true) {
  fighting(!0);
}`,
`todo: yourPower => {
  const luck = Math.random() > 0.5;
  const success = yourPower && luck;
  return success;
}`];

export default function Background() {
  const [colors] = useState(() => ['red', 'yellow', 'white', 'orange', '#0cf9cd'].sort(() => Math.random() - 0.5));
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const length = colors.length;
    const interval = setInterval(() => {
      setCount(count => count + 1 >= length ? 0 : count + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [])
  
  return (<div className={styles.Background}>
    {
      list.map((motto, index) => <pre
        className={styles.preCode}
        key={motto}
      >
        <code style={{color: colors[index]}} className={classnames(count === index && styles.active)}>{ motto }</code>
      </pre>)
    }
  </div>)
}