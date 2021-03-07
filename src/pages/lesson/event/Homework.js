import React, { useCallback } from 'react';
import { Button, Modal, Form, Image } from 'antd';
import { useToggle } from '@/hooks';
import image from '@/pages/overview/css/homework/cat.jpg';
import styles from './style.less';

const FormItem = Form.Item;
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

export default function Homework() {
  const { state, toggle } = useToggle();
  
  return (<div className={styles.Homework}>
    <Button onClick={toggle} type="link">成品示例</Button>
    <Modal visible={state} onCancel={() => toggle()} footer={null} centered>
      <Form {...layout} colon={false}>
        <Form.Item label="头像">
          <Image height={200} width={200} preview={false} src={image} />
        </Form.Item>
        <Form.Item label="姓名">
          库库侠
        </Form.Item>
        <Form.Item label="性别">
          男
        </Form.Item>
      </Form>
    </Modal>
  </div>)
}