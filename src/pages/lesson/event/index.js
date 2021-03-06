import React from 'react';
import { Table } from 'antd';
import { template } from '@/util';
import Markdown from '@/components/Markdown';
import Code from '@/components/Code';
import docs from './doc';
import BusinessCard from './homework/BusinessCard';

const list = [
  ['auxclick', '鼠标按下非主按钮时触发的事件，是DOM Events规范的一部分，但不是任何官方规范的一部分，了解即可，几乎不会用到', 0],
  ['click', '鼠标按下主按钮时触发的事件，一般为左键，使用频率最高的事件', 100],
  ['dblclick', '鼠标双击触发的事件', 10],
  ['mousedown', '鼠标按键按下时触发', 50],
  ['mouseup', '鼠标按键抬起时触发', 50],
  ['mouseover', '鼠标箭头悬停在某元素时触发该元素的 mouseover 事件', 60],
  ['mouseout', '鼠标箭头移出在某元素时触发该元素的 mouseout 事件', 60],
  ['mouseenter', '鼠标箭头进出在某元素时触发该元素的 mouseenter 事件', 20],
  ['mouseleave', '鼠标箭头离开在某元素时触发该元素的 mouseleave 事件', 20],
  ['mousewheel', '鼠标滚轮在某元素上滚动时触发该元素的 mousewheel 事件', 5],
  ['wheel', '与 mousewheel 一样，额外的，可以在触摸板上滚动或放大缩小区域时触发', 5],
  ['contextmenu', '鼠标右击元素时显示上下文菜单事件', 0],
];
const columns = ['事件类型', '描述', '常见的开发使用频率（0~100）'].map((title, index) => ({ 
  dataIndex: `key${index}`,
  title
}));
const dataSource = list.map((row, id) => row.reduce((prev, cur, index) => ({ ...prev, [`key${index}`]: cur }), { id }));

const modifyStyle1 = template(`
    <button onclick="onClick()">这是一个按钮</button>
    <script type="text/javascript">
      function onClick() {
        alert('我被点击了！');
      }
    </script>`);
const modifyStyle2 = template(`
    <button onmouseover="onMouseOver()" onmouseout="onMouseOut()">这是一个按钮</button>
    <script type="text/javascript">
      function onMouseOver() {
        console.log('鼠标移入了。');
      }
      function onMouseOut() {
        console.log('鼠标移出了。');
      }
    </script>`);

const modifyStyle3 = template(`
    <button onclick="onClick('这是按钮1')">这是按钮1</button>
    <button onclick="onClick('这是按钮2')">这是按钮2</button>
    <button onclick="onClick('这是按钮3')">这是按钮3</button>
    <button onclick="onClick('这是按钮4')">这是按钮4</button>
    <script type="text/javascript">
      function onClick(html) {
        alert(html);
      }
    </script>`);

const modifyStyle4 = template(`
    <button onclick="onClick(this)">这是按钮1</button>
    <button onclick="onClick(this)">这是按钮2</button>
    <button onclick="onClick(this)">这是按钮3</button>
    <button onclick="onClick(this)">这是按钮4</button>
    <script type="text/javascript">
      function onClick(param) {
        console.log(param);
      }
    </script>`);

const modifyStyle5 = template(`
    <button onclick="onClick(this)">这是按钮1</button>
    <button onclick="onClick(this)">这是按钮2</button>
    <button onclick="onClick(this)">这是按钮3</button>
    <button onclick="onClick(this)">这是按钮4</button>
    <script type="text/javascript">
      function onClick(curButton) {
        console.log(curButton.innerHTML); // 打印出按钮的文字内容
        curButton.style.backgroundColor = 'grey'; // 背景色置灰
        curButton.style.color = '#00ff00'; // 文字变色
        curButton.style.width = '200px'; // 设置宽
        curButton.style.height = '50px'; // 设置高
        setTimeout(function () {
          curButton.innerHTML += ', 2s 后按钮追加的文本';
        }, 2000)
      }
    </script>`);

const modifyStyle6 = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>醉翁亭记</title>
    <style>
      .active {
        background-color: grey;
        color: #00ff00;
        width: 200px;
        height: 50px;
      }
    </style>
  </head>
  <body>
    <button onclick="onClick(this)">这是按钮1</button>
    <button onclick="onClick(this)">这是按钮2</button>
    <button onclick="onClick(this)">这是按钮3</button>
    <button onclick="onClick(this)">这是按钮4</button>
    <script type="text/javascript">
      function onClick(curButton) {
        console.log(curButton.innerHTML); // 打印出按钮的文字内容
        curButton.classList.add('active'); // 添加一个类，注意上面 style 标签增加了该类的样式定义
        // curButton.className = 'active'; // 这行代码也可以，但会覆盖掉原先元素上的所有类！
        setTimeout(function () {
          curButton.innerHTML += ', 2s 后按钮追加的文本';
        }, 2000)
      }
    </script>
  </body>
</html>`;

const modifyStyle7 = template(`
    <button>这是按钮1</button>
    <button>这是按钮2</button>
    <button>这是按钮3</button>
    <button>这是按钮4</button>
    <script type="text/javascript">
      window.onload = function () {
        let buttons = document.querySelectorAll('button');
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].addEventListener('click', function onClick(e) {
            console.log('onClick 中 this 和事件源相等吗？', this === e.target);
            console.log('onClick 中 this === 当前按钮吗？', this === buttons[i]);
            this.style.backgroundColor = 'grey'; // 背景色置灰
            this.style.color = '#00ff00'; // 文字变色
            this.style.width = '200px'; // 设置宽
            this.style.height = '50px'; // 设置高
            setTimeout(function anonymous() {
              e.target.innerHTML += ', 2s 后按钮追加的文本';
              console.log('anonymous 中 this 和 事件源相等吗？', this === e.target);
              console.log('anonymous 中 this === 当前按钮吗？', this === buttons[i]);
            }, 2000)
          }, false);
        }
      }
    </script>`);

export default function Event() {
  return (
    <div>
      <Markdown docString={docs.docString1} />
      <Table rowKey="id" size="small" columns={columns} dataSource={dataSource} pagination={false} /><p />
      <Markdown docString={docs.docString2} />
      <Code codeString={modifyStyle1} />
      <Markdown docString={docs.docString3} />
      <Code codeString={modifyStyle2} />
      <Markdown docString={docs.docString4} />
      <Code codeString={modifyStyle3} />
      <Markdown docString={docs.docString5} />
      <Code codeString={modifyStyle4} />
      <Markdown docString={docs.docString6} />
      <Code codeString={modifyStyle5} />
      <Markdown docString={docs.docString7} />
      <Code codeString={modifyStyle6} />
      <Markdown docString={docs.docString8} />
      <Code codeString={modifyStyle7} />
      <Markdown docString={docs.docString9} />
      <BusinessCard />
    </div>
  );
}
