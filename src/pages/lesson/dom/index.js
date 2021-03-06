import React from 'react';
import { Table } from 'antd';
import Markdown from '@/components/Markdown';
import Code from '@/components/Code';
import docs from './doc';
import { codeString3 } from '@/pages/overview/css/index';
import styles from './index.css';

const list = [
  ['document.querySelector', '.querySelector("div")',	'.querySelector(".ant-layout")',	'.querySelector("#root")', '.querySelector("[type=button]")', '.querySelector("div > span:first-child")'],
  ['document.querySelectorAll', '.querySelectorAll("div")', '.querySelectorAll(".ant-layout")', '.querySelectorAll("#root")', '.querySelectorAll("[type=button]")', '.querySelectorAll("p a[title]")'],
];
const columns = ['方法', '根据标签获取 div', '根据类名获取', '根据 id 获取', '根据属性获取', '复杂的 CSS 选择器'].map((title, index) => ({ 
  dataIndex: `key${index}`,
  title
}));
const dataSource = list.map((row, id) => row.reduce((prev, cur, index) => ({ ...prev, [`key${index}`]: cur }), { id }));

const modifyStyle1 = `
<script type="text/javascript">
  let p = document.getElementsByTagName('p'); // 注意这是一个类数组集合，所以需要循环挨个修改样式。
  for (let i = 0; i < p.length; i++) {
// css 属性以短线连接的，在 JS 操作时均为“驼峰”形式，
// 例如：background-color => backgroundColor, font-size => fontSize， 想想为什么会有这样的规则？
    p[i].style.backgroundColor = '#ddd';
    p[i].style.fontSize = '20px';
  }
</script>
`;
const modifyStyle2 = `
<script type="text/javascript">
  // window.onload 会在页面结构加载完成时自动执行（本质上也是一个函数），这时候能保证代码获取 DOM 节点真实有效。
  window.onload = function() {
    let p = document.getElementsByTagName('p'); // 注意这是一个类数组集合，所以需要循环挨个修改样式。
    for (let i = 0; i < p.length; i++) {
    // css 属性以短线连接的，在 JS 操作时均为“驼峰”形式，
    // 例如：background-color => backgroundColor, font-size => fontSize， 想想为什么会有这样的规则？
      p[i].style.backgroundColor = '#ddd';
      p[i].style.fontSize = '20px';
    }
  }
</script>
`;

const modifyStyle3 = `
<script type="text/javascript">
  // window.onload 会在页面结构加载完成时自动执行（本质上也是一个函数），这时候能保证代码获取 DOM 节点真实有效。
  window.onload = function() {
    let p = document.getElementsByTagName('p'); // 注意这是一个类数组集合，所以需要循环挨个修改样式。
    for (let i = 0; i < p.length; i++) {
    // css 属性以短线连接的，在 JS 操作时均为“驼峰”形式，
    // 例如：background-color => backgroundColor, font-size => fontSize， 想想为什么会有这样的规则？
      p[i].style.backgroundColor = '#ddd';
      p[i].style.fontSize = '20px';
    }
    let newDiv = document.createElement('div');
    newDiv.style.color = 'red';
    newDiv.style.opacity = '0.8';
    newDiv.innerHTML = '我是新加的 div 元素，设置或替换节点内容时，可以设置节点的 innerHTML 值';
    document.body.appendChild(newDiv);
  }
</script>
`;

export default function DOM() {
  return (
    <div className={styles.Dom}>
      <Markdown docString={docs.docString1} />
      <Table rowKey="id" size="small" columns={columns} dataSource={dataSource} pagination={false} /><p />
      <Markdown docString={docs.docString2} />
      <Code codeString={codeString3} />
      <Markdown docString={docs.docString3} />
      <Code codeString={modifyStyle1} />
      <Markdown docString={docs.docString4} />
      <Code codeString={modifyStyle2} />
      <Markdown docString={docs.docString5} />
      <Code codeString={modifyStyle3} />
      <Markdown docString={docs.docString6} />
      <Markdown docString={docs.docString7} />
    </div>
  );
}
