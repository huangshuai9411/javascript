import React from 'react';
import styles from './style.less';

export default function BusinessCard() {
  
  return (<div className={styles.BusinessCard}>
    <div className={styles.left} />
    <div className={styles.right} />
    <div className={styles.content}>
      <h1>库库侠</h1>
      <article>Cookie Chivalrous</article>
      <h3>著名铲屎官</h3>
    </div>
  </div>)
}