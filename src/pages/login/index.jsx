import React from 'react';
import Background from './Background';
import Flowers from './Flowers';
import Form from './Form';
import styles from './style.less';

export default function Login() {

  return (
    <>
      <Background />
      <div className={styles.Login}>
        <Form />
      </div>
      <Flowers />
    </>
  )
}