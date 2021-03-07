import React from 'react';
import dimension from './dimension.jpg';
import styles from './style.less';

function TheObverseSide() {

  return (<div className={styles.TheObverseSide}>
    <div className={styles.left} />
    <div className={styles.right} />
    <div className={styles.content}>
      <h1>库库侠</h1>
      <article>Cookie Chivalrous</article>
      <h3>著名铲屎官</h3>
    </div>
  </div>)
}

function TheOtherSide() {

  return (<div className={styles.TheOtherSide}>
    <div className={styles.left} />
    <div className={styles.right} />
    <div className={styles.content}>
      <h1><img src={dimension} title="扫一扫添加我的微信" /></h1>
      <article>电话: 010-********</article>
      <h3>地址: 北京市朝阳区xx路xx街道xx号x层x01室</h3>
    </div>
  </div>)
}

export default class BusinessCard {
  static TheObverseSide = TheObverseSide
  static TheOtherSide = TheOtherSide
}

