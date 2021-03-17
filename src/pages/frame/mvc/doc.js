import { reference } from '@/util';

const doc1 = `
#### **MVC—— Model View Controller**
${reference('Jquery')} 之前，我们实现一个网页功能的心智模型，一直都是要做什么操作，就写什么代码，一行代码对应一条业务逻辑。这种命令式的编程方式，对于项目的维护性，逻辑的复用性、代码的可读性都是不利的。因为视图的渲染、更新操作均在一个 JS 文件中完成，这种完全依赖于开发者自觉进行模块划分的编程方式，极大地限制了项目的规模化、集成化。随着前端的发展，${reference('React')}（Facebook 主导）、${reference('Vue')}（尤雨溪）、${reference('Angular')}（Google 团队维护）等一系列 ${reference('MVC/MVVM(Model-View-ViewModel)')} 框架应运而生。我们以最简单的方式了解一下原先实现一个功能有什么问题。
`;

const code1 = `
// 页面中原先有一个 div#root 元素，假如后面动态生成的结构全都塞进这个 div 里。
<div id="root"></div>

function ajax(id) { // fetch 是浏览器原生支持的请求对象，可以代替 XMLHttpRequert
  return fetch(\`/api?id=\${id}\`).then(res => {
    if (res.status === 'ok') {
      insertHTML(res.list);
    } else {
      alert('请求失败');
    }
  });
}
// 使用了 jquery
function insertHTML(list) { // 假设返回结果是一个列表

  // 拼接一个列表字符串出来
  const childList = list.map(({ id, name }) => \`<span id="\${id}">\${name}</span>\`).join('');

  // 将列表字符串统统塞到根元素内
  $('div#root').append(
    $(childList)
  );
}
`;

const doc2 = `
上面是传统的基于 jquery 实现的数据获取、页面更新的一个简单流程。我们发现，如果要加一个更新操作，就要再实现一个新的更新方法；如果动态插入的标签需要添加点击事件，就要再处理动态绑定事件的逻辑，甚至使用**事件委托**来处理。一旦逻辑愈发复杂，维护起来就成了噩梦！因为我们不仅要维护数据，也要同时兼顾视图的更新。显然这里有很多工作是重复的。

那如果我们只维护页面的副作用：数据的输入和状态，把视图的更新交给框架来做，岂不是更好？

这就是 MVC 框架诞生的初衷。关于更详细的概念可以网上了解。本教程将以 React、Vue 框架为例，穿插前端工程化的内容来理解 MVC 和 MVVM。

#### **什么是前端框架**
 
回到**综述 > 前言 > 流行框架**部分：

> 框架不是编程语言本身的内容，框架的诞生是为了提升开发效率、降低维护成本，本质上是要求开发者在一种约定的格式内开发业务。同时框架也抹平了不同平台的差异性、兼容性，使开发者能专注于业务逻辑。因为这些脏乱的工作，也是滋生 bug 的温床。react、vue、angular 是当前最为流行的前端框架，对于初学者而言，vue 的上手成本最低。react 学习成本稍高，angular 也是 Google 维护的老牌前端框架了，不过近年来前两者风头正劲，有兴趣的可以在掌握前两者后自学。

[从 React 开始](/frame/react)
`;

export default {
  doc1,
  code1,
  doc2,
};