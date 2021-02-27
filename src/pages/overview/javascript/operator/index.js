import React from 'react';
import { Table } from 'antd';
import Markdown from '@/components/Markdown';
import Code from '@/components/Code';
import { docString1, docString2, docString3, docString4, docString5 } from './doc';
import styles from './style.less';

const getColumns = (title, index) => ({
  title,
  dataIndex: `key${index}`
});
const transform = (row, id) => row.reduce((prev, cur, index) => ({ ...prev, [`key${index}`]: cur }), { id });
const operators = [
  ['+', '加法运算', '1 + 2', '3'],
  ['-', '减法运算', '3 - 2', '0'],
  ['*', '乘法运算', '3 * 2', '6'],
  ['/', '除法运算', '3 / 2', '1.5'],
  ['++', '自增运算', 'let i = 0; i++;console.log(i);', '1'],
  ['--', '自减运算', 'let j = 0; j--;console.log(j);', '-1'],
  ['%', '取余运算', '8 / 5', '3'],
  ['**', '幂运算', '2 ** 5', '32'],
];
const columns1 = ['操作符', '描述', '控制台输入并回车', '输出'].map(getColumns);
const dataSource1 = operators.map(transform);

const columns2 = ['操作符', '描述', '示例', '等价于'].map((title, index) => ({
  title,
  dataIndex: `key${index}`
}));
const calculators = [
  ['=', '赋值', 'let x;  x = 5;'],
  ['+=', '求和再赋值', 'x += 2', 'x = x + 2'],
  ['-=', '求差再赋值', 'x -= 2', 'x = x - 2'],
  ['*=', '求积再赋值', 'x *= 2', 'x = x * 2'],
  ['/=', '求商再赋值', 'x /= 2', 'x = x / 2'],
  ['%=', '求商再赋值', 'x %= 2', 'x = x % 2'],
  ['**=', '求幂再赋值', 'x **= 2', 'x = x ** 2'],
];

const dataSource2 = calculators.map(transform);

const columns3 = ['操作符', '描述', '示例', '返回值均为布尔值（Boolean）'].map(getColumns);

const compares = [
  ['>', '大于', '2 > 3', 'false'],
  ['<', '小于', '2 < 3', 'true'],
  ['>=', '大于或等于', '2 >= 2', 'true'],
  ['<=', '小于或等于', '2 <= 3', 'true'],
  ['==', '等于', '"3" == 3', 'true'],
  ['===', '绝对等于（值和类型均相等）', '"3" === 3', 'false'],
  ['!=', '不等于', 'true != false', 'true'],
  ['!==', '不绝对等于（值和类型有一个不相等，或两个都不相等）', '5 !== "5"', 'true'],
];
const dataSource3 = compares.map(transform);

const columns4 = ['运算符', '描述', '示例', '运算结果'].map(getColumns);

const logical = [
  ['&&', '并且，遇到假值即返回', 'true && false', 'false'],
  ['||', '或， 遇到真值即返回', 'true || false', 'true'],
  ['！', '非，真假取反', '!false', 'true'],
];
const dataSource4 = logical.map(transform);

const columns5 = ['表达式', '返回结果', '解释'].map(getColumns);

const examples = [
  ['0 || 2 || 3', '2', '遇到真值 2 的时候，就不再继续运算，直接返回 2'],
  ['0 || false || ""', '""', '一直没有遇到真值，运算到结束，返回最后的空字符串，数字中只有 0 为假值'],
  ["[1, 2] && 0 && 'JS'", '0', '遇到假值 0，运算结束，返回 0'],
  ["[1, 2] && '0' && 'JS'", '0', '一直没有遇到假值，运算结束，返回 "JS"'],
  ["!'ddd'", 'false', '字符串除了空串 "" 或 \'\'，只要有内容均为真值，所以取反后为 false'],
  ["!0,  !'',  !null", 'true', '假值取反均为 true'],
  ["!!20,  !false,  !NaN", 'true', 'NaN 为假值取反为 true，真值两次取反依然为真值，只是返回布尔值'],
];
const dataSource5 = examples.map(transform);


export default function Operator() {
  
  return (<div className={styles.Operator}>
    <Markdown docString={docString1} />
    <Table rowKey="id" size="small" columns={columns1} dataSource={dataSource1} pagination={false} /><br />
    <Markdown docString={docString2} />
    <Table rowKey="id" size="small" columns={columns2} dataSource={dataSource2} pagination={false} /><br />
    <Markdown docString={docString3} />
    <Table rowKey="id" size="small" columns={columns3} dataSource={dataSource3} pagination={false} /><br />
    <Markdown docString={docString4} />
    <Table rowKey="id" size="small" columns={columns4} dataSource={dataSource4} pagination={false} /><br />
    <Markdown docString={docString5} />
    <Table rowKey="id" size="small" columns={columns5} dataSource={dataSource5} pagination={false} />
  </div>)
}