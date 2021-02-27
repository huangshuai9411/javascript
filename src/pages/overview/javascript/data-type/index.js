import React from 'react';
import { Table } from 'antd';
import Markdown from '@/components/Markdown';
import { docString1, docString2 } from './doc';
import styles from './style.less';

const dataType = [
  ['字符串', 'String', `'JavaScript'， "Lily"，"5"...`, '"string"', '一对单/双引号包裹的任意字符，即为字符串'],
  ['数字', 'Number', '0，1，2，NaN', '"number"', 'NaN 即 not a number 简称，非数字，但该值的类型为数字类型，且是 JavaScript 中唯一一个与自身不相等的值'],
  ['对象', 'Object', '{key: 1}，[2, 4]，new Set()，new Map()，function(){}，class A {}，/abc/g，...', '"object"', '引用类型的数据，包括键值集合、数组、不重复集合、函数、类、正则、...'],
  ['布尔', 'Boolean',' true，false', '"boolean"', '只有两个值，代表是/真、否/假'],
  ['空', 'null', 'null', '"object"，与正常思维不同', 'null 类型只有一个值，由于历史原因，typeof 判断 null 类型返回的是 "object"。'],
  ['未定义', 'undefined', 'undefined', '"undefined"', 'undefined 类型只有一个值'],
  ['符号，常规业务中不常用', 'Symbol', `Symbol('描述')，Symbol()`, '"symbol"', '创建的任意两个实例都不相等，ES6 之后新增类型'],
  ['大型整数，常规业务中不常用', 'BigInt', '1n，1654684949494n，BigInt(10)，BigInt("1514544165161")', '"bigint"', '字面量上，与 Number 的区别是数字末尾加了字母 n，ES6 之后新增类型']
];
const columns = ['类型名称', '构造函数或原生对象', '实例', 'typeof 返回值', '备注'].map((title, index) => ({
  title,
  dataIndex: `key${index}`
}));
const dataSource = dataType.map((row, id) => row.reduce((prev, cur, index) => ({ ...prev, [`key${index}`]: cur }), { id }));

export default function DataType() {
  
  return (<div className={styles.DataType}>
    <Markdown docString={docString1} />
    <Table rowKey="id" size="small" columns={columns} dataSource={dataSource} pagination={false} />
    <br />
    <Markdown docString={docString2} />
  </div>)
}