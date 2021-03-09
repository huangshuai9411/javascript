import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Markdown from '@/components/Markdown';
import Code from '@/components/Code';
import docs from './doc';
import styles from './style.less';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

export default function Async() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Markdown docString={docs.doc1} />
      <div className={styles.Async}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Markdown docString={docs.doc2} />
      <Code codeString={docs.code1} />
      <Markdown docString={docs.doc3} />
      <Code codeString={docs.code2} />
      <Markdown docString={docs.doc4} />
      <Code codeString={docs.code3} />
      <Markdown docString={docs.doc5} />
      <Code codeString={docs.code4} />
      <Markdown docString={docs.doc6} />
      <Code codeString={docs.code5} />
      <Markdown docString={docs.doc7} />
      <Code codeString={docs.code6} />
      <Markdown docString={docs.doc8} />
      <Code codeString={docs.code7} />
      <Markdown docString={docs.doc9} />
    </>
  );
}
