import React from 'react';
import classnames from 'classnames';
import Markdown from '@/components/Markdown';
import { Table } from 'antd';
import { docString1, docString2, docString3 } from './doc';
import styles from './style.less';

const keywords = [
  ['break',	'case',	'catch', 'continue', 'default'],
  ['delete', 'do', 'else', 'finally', 'for'],
  ['function', 'if', 'in', 'instanceof', 'new'],
  ['return', 'switch', 'this', 'throw', 'try'],
  ['typeof', 'var', 'void', 'while', 'with']
];
const reserved = [
  ['abstract', 'boolean', 'byte', 'char', 'class'],
  ['const', 'debugger', 'double', 'enum', 'export'],
  ['extends', 'final', 'float', 'goto', 'implements'],
  ['import', 'int', 'interface', 'long', 'native'],
  ['package', 'private', 'protected', 'public', 'short'],
  ['static', 'super', 'synchronized', 'throws', 'transient'],
  ['volatile', 'let']
];

const columns = Array(5).fill(0).map((_, index) => ({ 
  dataIndex: `key${index}`,
  render: value => <span className={classnames(styles[value], keywords.some(a => a.includes(value)) && styles.blue)}>{value}</span>
}));
const dataSource1 = keywords.map(row => row.reduce((prev, cur, index) => ({ ...prev, id: index, [`key${index}`]: cur }), {}));
const dataSource2 = reserved.map(row => row.reduce((prev, cur, index) => ({ ...prev, id: index, [`key${index}`]: cur }), {}));

export default function Reserved() {

  return (<div className={styles.Reserved}>
    <Markdown docString={docString1} />
    <Table size="small" columns={columns} dataSource={dataSource1} pagination={false} showHeader={false} />
    <br />
    <Markdown docString={docString2} />
    <Table size="small" columns={columns} dataSource={dataSource2} pagination={false} showHeader={false} />
    <br />
    <Markdown docString={docString3} />
  </div>)
}

