import React from 'react';
import { Table } from 'antd';
import Markdown from '@/components/Markdown';
import LittleTest from '@/components/LittleTest';
import Code from '@/components/Code';
import docs from './doc';
import styles from './style.less';

const columns = [{
  title: '特性描述',
  dataIndex: 'key0',
  width: 400
}, {
  title: 'ES6 之前的写法',
  dataIndex: 'key1',
  render: value => <pre>{ value }</pre>
}, {
  title: 'ES6 的写法',
  dataIndex: 'key2',
  render: value => <pre>{ value }</pre>
}, {
  title: '原理解析',
  dataIndex: 'key3',
  render: value => typeof value === 'string' ? <LittleTest id={value} /> : value,
  maxWidth: 400
}];

const data = [
[
'数组的遍历 forEach，以数组 arr 为例', 
`for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}`, 
`arr.forEach(function (item, index) {
// item 就是当前遍历到的每一项
  console.log(item);
});`, 'forEach',
],
[
'数组的遍历 map，返回新数组', 
`const result = [];
for (let i = 0; i < arr.length; i++) {
  result.push(arr[i] + 1);
}
// 最后返回的 result 进行利用`, 
`const result = arr.map(function (item) {
  return item + 1;
});`, 'map',
],
[
'这里先插一个箭头函数及对象方法的简化形式',
`function () {
  const a = 0;
  return a;
}
const obj = {
  say: function(name) {
    console.log(name);
  }
};
const foo = function (x, y) {
  return x * y;
};
const bar = function (x) {
  return x ** 2;
};
const baz = function (x) {
  return {
    name: x
  };
};

`, 
`() => {
  const a = 0;
  return a;
}

const obj = {
  say(name) {
    console.log(name);
  }
};
const foo = (x, y) => x * y;


const bar = x => x ** 2;


const baz = x => ({ name: x });



`,
<>省略函数关键字, 并用箭头指向函数体;<br />
函数体只有一条 return 语句时, 可以省略 return 关键字以及花括号;<br />
参数只有一个参数时, 参数的小括号也可以省略;<br />
直接返回对象值时, 对象必须用小括号括起来(避免对象与代码块混淆);<br />
箭头函数中的 this, 总是与函数外的 this 指向一致, 或者说它就没有自己的 this;<br />
后续章节, 有必要时会尽可能以简洁的箭头函数实现示例代码
</>
],
[
`数组的遍历 every，返回布尔值，表示只要存在一项元素迭代的返回值为 false 就直接返回 false`, 
`let flag = true;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 5) {
    flag = false;
    break;
  }
}
// 最后对 flag 值进行利用`, 
`const flag = arr.every(function (item) {
  return item <= 5;
}); 
或者
const flag = arr.every(i => i <= 5);
是不是愈发体现出 ES6 的优越性了呢？后面只会更简单！
`, 'every',
],
[
`数组的遍历 some，返回布尔值，表示只要存在一项元素迭代的返回值为 true 就直接返回 true，恰好与 every 相反`, 
`let flag = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 5) {
    flag = true;
    break;
  }
}
// 最后对 flag 值进行利用`, 
`const flag = arr.some(i => i > 5);

简单值的相等性查找，判断是否包含 5 : 
const has5 = arr.includes(5);
`, 'some',
],
[
`数组元素的查找 find，返回满足条件的第一项元素, 没找到时返回 undefined`, 
`let ele;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 5) {
    ele = arr[i];
    break;
  }
}
// 最后的 ele 值要么是找到的元素，要么是 undefined`, 
`const ele = arr.find(i => i > 5);
`, 'find',
],
[
`数组元素位置的查找 findIndex，返回满足条件的第一项元素的索引, 没找到时返回 -1`, 
`let index = -1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 5) {
    index = i;
    break;
  }
}
// 最后的 index 值要么是找到的元素位置，要么是 -1`, 
`const index = arr.findIndex(i => i > 5);
`, 'findIndex',
],
[
`数组累加器 reduce 和 reduceRight，二者的区别是后者从后往前遍历，返回值由使用者决定，每一项均会作为临时结果参与下一迭代。虽然叫累加器，但并不是只能做加法，做什么运算是开发者决定的。`, 
`// 求 1~100 的和
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
// 最后的 sum 值就是数组迭代后的结果`, 
`const sum = arr.reduce((prev, cur) => prev + cur, 0);
`, 'reduce',
],
[
`for-of 循环`, 
`
for (let i = 0; i < arr.length; i++) {
  arr[i];
}
`, 
`不再记录索引，只关注每一项的值：
for (const item of arr) {
  item;
}
`,
],
[
`对象遍历`, 
`
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  obj[key];
}
`, 
`不再记录索引，只关注每一项的值：
for (const item of arr) {
  item;
}
对象转数组再遍历
Object.keys(obj)： ['a', 'b', 'c']，键名的顺序与浏览器实现机制有关，
虽然规范已有，但各大浏览器厂商目前是与否一致有待验证
Object.values(obj)： [1, 2, 3]
Object.entries(obj)： [['a', 1], ['b', 2], ['c', 3]]
`, <>
数组也是键名为索引值的对象，所以也可用 for-in 遍历<br />
之所以讲 for 循环时没提 for-in, 是因为它会把原型链上的属性也遍历出来<br />
这往往不是预期的行为,所以一般会加 hasOwnProperty 的判断<br />
了解即可, 不建议使用!
</>,
],
[
'对象解构，定义若干个变量分别等于对象中某属性的对应值, 以 const obj = { a: 1, b: 2, c: 3 }; 为例',
`
声明出变量 a , b , custom 如下：
let a = obj.a, b = obj.b, custom = obj.c;
`,
`
声明出变量 a , b , custom 如下：
let { a, b, c: custom } = obj;
此时 c 称为模式，并不是变量，真正的变量是a , b, custom
`,
<>等号右侧一定是对象才能正常解构!</>
],
[
'数组解构，定义若干个变量分别等于数组中对应位置的值, 以 const arr = [1, 2, 3]; 为例',
`
声明出变量 a , c 如下：
let a = arr[0], c = arr[2];
`,
`
声明出变量 a , c 如下：
let [a, , c] = arr;
第二个元素跳过去时，用逗号表示留空。
`,
<>等号右侧一定是数组才能正常解构!</>
],
[
'函数参数解构，函数的参数为对象或数组，可以直接解构取值，注意解构对象时，参数必须要有小括号',
`
function (arr) {
  return arr[0] * arr[1];
}
function (obj) {
  return obj.a * obj.b;
}
`,
`
function ([a, b]) {
  return a * b;
}
function ({ a, b }) {
  return a * b;
}
`,
<>函数的参数一定保证是对应的类型才能正常解构!否则运行出错</>
],
[
`复杂类型解构，以 obj = {
  a: 1,
  b: [{
    c: 2
  }],
  d: {
    e: 3
  }
} 为例`,
`
const a = obj.a;
const c = obj.b[0].c;
const e = obj.d.e;
`,
`
const {
  a,
  b: [{ c }],
  d: { e }
} = obj;
`,
<>解构时, 变量与源数据的位置是一一对应的, 解构完成时, 只有 a, c, e 是变量; b, d 是匹配的模式, 不是变量</>
],
[
'解构默认值，以 const obj = { a: 1, b: 2, c: null } 为例',
'-',
`
const { a, b = 3, c = 4, e = 5, f } = obj;

则 a === 1; b === 2; c === null; e === 5; f === undefined
`,
<>当且仅当模式匹配的值为 undefined 时, 变量会启用默认值语法; 即 obj.b !== undefined, b 不会使用默认值 3<br />
obj.f 不存在, 所以变量 f === undefined<br />
obj.e 不存在, 所以变量 e 启用默认值 5<br />
</>
],
[
'解构默认值（数组），以 const arr = [undefined, 2] 为例',
'-',
`
const [a = 0, b = 4, c = 3] = arr;

则 a === 0; b === 2; c === 3
`,
<>访问数组第三个元素时为 undefined, 所以 c 启用默认值 3<br />
arr[0] 本身为 undefined, 所以 a 启用默认值 0<br />
arr[1] !== undefined, 所以变量 b 不启用默认值, b === arr[1]<br />
</>
],
[
  '对象/数组合并 spread 运算符',
`
const arr = arr1.concat(arr2).concat(arr3).concat(arr4, arr5);

const obj1 = { a: 1 }, obj2 = { b: 2 };
for (const key in obj2) {
  if (obj2.hasOwnProperty(key)) {
    obj1[key] = obj2[key];
  }
}

`,
`
const arr = [...arr1, ...arr2, ...arr3, ...arr4, ...arr5];

const obj1 = { a: 1 }, obj2 = { b: 2 };
Object.assign(obj1, obj2);
`
]
];

const dataSource = data.map((row, id) => row.reduce((prev, cur, index) => ({ ...prev, [`key${index}`]: cur }), { id }));

export default function ES6() {

  return (<div className={styles.ES6}>
    <Markdown docString={docs.doc1} />
    <Code codeString={docs.code1} />
    <Markdown docString={docs.doc2} />
    <Table rowKey="id" size="small" columns={columns} dataSource={dataSource} pagination={false} />
  </div>)
}