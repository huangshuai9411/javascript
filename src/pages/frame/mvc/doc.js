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
上面是传统的基于 jquery 实现的数据获取、页面更新的一个简单流程。我们发现，如果要加一个更新操作，就要再实现一个新的更新方法；如果动态插入的标签需要添加点击事件，就要再处理动态绑定事件的路基，甚至使用**事件委托**来处理。一旦逻辑愈发复杂，维护起来就成了噩梦！因为我们不仅要维护数据，也要同时兼顾视图的更新。显然这里有很多工作是重复的。

那如果我们只维护页面的副作用：数据的输入和状态，把视图的更新交给框架来做，岂不是更好？

这就是 MVC 框架诞生的初衷。

#### **MVC**
#### **MVVM**
`;

export default {
  doc1,
  code1,
  doc2,
};