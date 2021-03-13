import React from 'react';
import { Modal, Button, Popover, Drawer } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import Code from './Code';
import { useToggle } from '@/hooks';
import styles from './style/LittleTest.less';
import examination from './examination';

export default function LittleTest({ id, type = 'button' }) {
  const { state, toggle } = useToggle();
  const { state: visible, toggle: onVisible } = useToggle();
  const { title, question, code, data, hide } = examination[id] || { question: 'id 不存在，题库还没有这道题' };

  return (<>
    <Button danger onClick={toggle} className={styles.danger} type={type}>{ title || '请先暂停，立即做个小练习' }</Button>
    <Modal
      title="小练习"
      visible={state}
      onCancel={() => toggle()}
      footer={null}
      destroyOnClose
      width={760}
      wrapClassName={styles.wrapClassName}
    >
      {!hide && <strong><font color="#faad14"><WarningOutlined />&nbsp;</font>务必在自己的编辑器或控制台实现代码逻辑，运行之后再查看参考答案</strong>}
      <p className={styles.question} dangerouslySetInnerHTML={{ __html: question }} />
      {
        data && <> 
          <Button type="link" onClick={onVisible}>测试数据在这里</Button>
          <Drawer visible={visible} onClose={() => onVisible()} width={730} title="测试数据">
            <Code codeString={data} />
          </Drawer>
        </>
      }
      {
        code &&
        <Popover
          placement="right"
          title=""
          content={<div className={styles.content}><Code codeString={code} /></div>}
          trigger="click"
          getPopupContainer={triggerNode => triggerNode}
        >
          <Button type="link">参考答案</Button>
        </Popover>
      }
    </Modal>
  </>)
}