import { reference } from '@/util';

export default {
  doc1: `
#### **ES6 简介**
  
ES6， 全称 ${reference('ECMAScript 6.0')} ，是 ${reference('JavaScript')} 的下一个版本标准，2015 年 6 月发版。换言之，是之前使用的 JS 语言的升级版，目前大多数主流浏览器已经支持了 ES6 的很多新特性。在本节课之前的代码示例和习题答案中，除了 ${reference('let ')} 关键字属于 ES6 的特性，其他均刻意回避了 ES6 的写法，目的是在本节课专门地集中学习 ES6 的知识。

> **let** 之前，声明变量只有一个关键字 **var**，在保留字那节课刻意将 **var** 标记为不推荐使用的关键字。因为 ES6 之前只有函数作用域和全局作用域，没有块作用域。var 声明的变量如果不在函数内，一经执行就会保留在全局。例如在控制台执行下面的代码：
`,
  code1: `
if (true) {
  var a =  1;
  let b = 2;
}
(function () {
  var x =  1;
  let y = 2;
})(); // 这是函数声明即调用的一种写法：立刻执行函数（IIFE）
`,
  doc2: `
执行完，再依次输入 a 回车；输入 b 回车；输入 x 回车；输入 y 回车。只有 a 的值打印了出来。这验证了什么呢？

- 不管是 **let** 还是 **var**，在函数内声明的变量局限在函数内部访问，离开函数作用域就被销毁了。
- 在块语句 ${reference('{}')} 内声明的变量，使用 **var** 会变成全局变量，而 **let** 不会。所以 **var** 会很容易造成变量污染。

#### **重要申明**
let 声明的变量，可以重新赋值，如果声明常量（即永远不会被重新赋值的值），应当使用 **const** 关键字（与 let 一样拥有块作用域）。**const** 必须在声明的同时进行赋值，否则编译阶段就会报错，使用时不允许改变 const 常量的指向，否则报错。这些机制都是为了确保代码在编写阶段的健壮性，避免隐形 bug 的出现。从本节课开始，所有的示例代码将严格区分 let 与 const 的使用规范。

#### **ES6 最常用的特性汇总**

诚然，网上有比较全面的 ES6 使用教程，所以本节课不会面面俱到，只列出必须掌握的特性，其他特性可在学有余力时逐渐了解。解析部分将一些基本原理分解出来，并不等同于真实的实现，学习其思想即可。
`
}