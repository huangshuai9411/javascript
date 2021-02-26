import React, { useRef } from 'react';
import { useHistory } from 'umi';
import { Button, message } from 'antd';
import styles from './style.less';

export default function Form() {
  const history = useHistory();
  const username = useRef('');
  const password = useRef('');

  const changeUsername = str => {
    username.current = str;
  };
  const changePassword = str => {
    password.current = str;
  };

  const onSubmit = () => {
    if (!username.current) {
      return message.error('请输入用户名');
    }
    if (!password.current) {
      return message.error('请输入密码');
    }
    history.push('/');
  }

  return (<div className={styles.Form}>
    <FormElement type="text" label="用户名" value={username.current} onChange={changeUsername} />
    <FormElement type="password" label="密码" value={password.current} onChange={changePassword} />
    <Button className={styles.Submit} onClick={onSubmit}>
      <span>确认</span>
    </Button>
  </div>)
}

function FormElement({ label, type, onChange }) {
  const onInput = e => {
    onChange(e.target.value);
  };
  
  return (
    <div className={styles.formItem}>
      <div className={styles.label}>
        { label }
      </div>
      <input type={type} className={styles.value} onChange={onInput} />
    </div>
  )
}