import React from 'react';
import { Table } from 'antd';
import Markdown from '@/components/Markdown';
import Code from '@/components/Code';
import { dataSource } from '@/pages/overview/javascript/data-type';
import docs from './doc';
import styles from './style.less';

const columns = ['类型名称', '构造函数或原生对象', '实例'].map((title, index) => ({
  title,
  dataIndex: `key${index}`
}));

export default function Prototype() {
  
  return (<div className={styles.Prototype}>
    <Markdown docString={docs.doc1} />
    <Table rowKey="id" size="small" columns={columns} dataSource={dataSource} pagination={false} />
    <p />
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
  </div>)
}