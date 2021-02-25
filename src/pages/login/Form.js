import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import styles from './style.less';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default function () {
  const onFinish = console.log;
  
  return (<div className={styles.Form}>
    <Form {...layout} name="basic" onFinish={onFinish}>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button htmlType="submit" type="text">
          <span style={{color: 'green'}}>Submit</span>
        </Button>
      </Form.Item>
    </Form>
  </div>)
}