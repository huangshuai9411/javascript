import { reference } from '@/util';
import img from './index.png';
import files from './files.png';
import root from './root.png';

const doc1 = `
#### **详细中文教程**
如果把网上的[ React 中文教程](https://reactjs.bootcss.com/)搬过来，并没有什么意义，所以这里引入链接，并默认所有同学已经把教程了解了一遍。

下面，我们开始实现一个 Hello, world!。

1. 还记得**综述 > 准备工作**吧？现在 ${reference('node')} 和 ${reference('npm')} 开始派生用场了。我们先在某文件夹打开命令行终端（[参考地址](/overview/prepare)）
- 执行命令 ${reference('npm i yarn -g')}，全局安装 ${reference('yarn')} 包管理器。
- 安装完成后验证安装结果：${reference('yarn -v')} 检测 ${reference('yarn')} 版本。

> ${reference('yarn')}的使用方式与 npm 一样，${reference('npm i yarn -g')} 等同于 ${reference('npm install yarn -global')}，${reference('-global')}指定安装的参数，为全局位置。如果未指定，则会在当前文件夹安装 ${reference('yarn')}，届时能看到一个 ${reference('node_modules')} 文件夹，但是终端上是不能识别${reference('yarn')}命令的。

#### **Create React App**
开始之前，请先了解什么是单页应用，用命令行创建（不必须）和进入目录，在某目录打开终端的知识。

1. 在存放项目的文件夹内打开终端，逐个执行以下命令创建 ${reference('my-app')} 项目目录，进入 ${reference('my-app')} 目录，然后启动。
2. 顺利的话，最后我们的浏览器会自动打开一个本地链接${reference('http://localhost:3000/')}，有问题请及时反馈。
`;

const code1 = `
yarn create react-app my-app
cd my-app
yarn start
`;

const doc2 = `
在 React 脚手架默认页面如下：

![img](${img})

这个页面是怎么来的呢？
将我们的项目拖入代码编辑器，展开文件树如下：

![files](${files})

顺便一提 ES6 模块化的内容，通过 ${reference('import')} 导入一个模块，并将该模块默认导出的内容重新命名，这就是模块的使用方式之一。从第三方模块（在 node_modules 中）导入模块时，直接使用模块名如 ${reference("import React from 'react';")}；从相对位置导入时，使用相对路径。所以看到 ${reference("import App from './App';")} 时，说明目录同级一定要有 App.js 文件（导入时 .js 后缀通过配置可以省略）。

React 的一大便利就是可以使用 ${reference('jsx')} 语法来编写**组件**，将一个完整的代码逻辑封装到一个组件中便能到处使用，类比原生的 HTML 标签，我们需要将 React 组件首字母大写加以区分（文件名、导入命名，标签使用均保持这个规范）。事实上，这是一个入口文件，所有的代码均封装在了 App 组件内，打开 App.js 我们就能看到一个函数返回了我们熟悉的 HTML 原生标签。将 return 的内容更换并保存，浏览器就能实时看到更新后的内容。

在 ${reference('/src/index.js')} 文件中，我们注意到这里执行了一个 ${reference('ReactDOM.render')} 方法，第一个参数是一个标签，第二个参数是一个 id 为 root 的 HTML 节点。我们暂不深究该方法的实现，至少这里应该可以知道，它把一堆 ${reference('jsx')} 标签给放置到了根标签 div#root 中。这个根标签，就是下图的位置 ${reference('/public/index.html')}。

![root](${root})

对于 React 基础脚手架的结构就介绍到这里，下面我们通过实现一个小需求来了解 React 的用法。

> 准备工作：
>
1. 清空 ${reference('App.css')} 文件的内容。
- ${reference('App.js')} 文件中 return 的值只留下${reference('(<div className="App"></div>)')}，其他不动。

- 在页面上添加一个按钮，按钮文字为“点击次数”：
`;

const code2 = `
<div className="App">
  <button>点击次数</button>
</div>
`;
const doc3 = `
页面更新后我们继续：
- 给按钮添加一些样式，这时候通过类名来定义，同时需要在 ${reference('App.css')} 文件实现相应的样式。
`;

const code3 = `
// App.js
<div className="App">
  <button className="my-button">点击次数</button>
</div>

// App.css
.my-button {
  -webkit-appearance: button;
  color: #fff;
  background: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  user-select: none;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid #d9d9d9;
}
.my-button:focus {
  outline: 0;
}
.my-button:hover {
  color: #fff;
  background: #40a9ff;
  border-color: #40a9ff;
}
`;
const doc4 = `
页面更新后我们继续：

- 按钮上的文字我们希望可以自定义，于是添加组件的参数 text。当 App 组件没有传参时，默认显示“点击次数”。注意，变量需要用花括号括起来，花括号里用到的字符串应当加引号。
`;
const code4 = `
function App({ text }) {
  return (
    <div className="App">
      <button className="my-button">{text || '点击次数'}</button>
    </div>
  );
}

// index.js
...
<App text="我是按钮上的文字" />
...
`;

const doc5 = `
- 将函数 App 转换为 class 组件：
上面的 App 组件其实是一个函数，也是无状态（stateless）组件，即：传什么参数，展示什么内容，自身并没有改变显示内容的能力。
而类组件的是最基本的可以定义状态的组件形式，组件有了自己的状态，就可以呈现更复杂的形态。

> 这里开始大量出现 ES6 的知识了，命名导入（Component）、类的继承（extends），类方法的定义（render），变量的解构（text）、默认导出（export default）。
在 React 的类组件里，render 方法必不可少，这是框架定死的内容。${reference('this.props')} 等同于刚才的 App 函数的参数，是一个对象。
`;
const code5 = `
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const { text } = this.props;
     return (
      <div className="App">
        <button className="my-button">{text || '点击次数'}</button>
      </div>
    );
  }
}

export default App;
`;
const doc6 = `
- 给组件定义一个状态 count，初始值为 0，显示在按钮内：

> 组件的状态为 state 属性，是一个对象，内部可以定义组件需要的值。在 ${reference('render')} 方法内可以通过 ${reference('this.state')} 访问到。
`;

const code6 = `
...
export default class App extends Component {
  state = {
    count: 0
  }
  render() {
    const { text } = this.props;
    const { count } = this.state;
    return (
      <div className="App">
        <button className="my-button">{text || '点击次数'}{ count }</button>
      </div>
    );
  }
}
`;
const doc7 = `
- 给按钮添加点击事件，点击一次，显示的数字就加 1：

> 还记得事件类型吗？on + 事件类型是 React 框架的准则，使用驼峰命名。修改 state 只能通过 ${reference('this.setState')}，否则不能触发更新。

> 点击事件自定义命名，比如 onPlus，点击按钮执行 onPlus 方法，即修改了 state.count，${reference('this.setState')} 可以触发组件的渲染，我们只需要维护 state 即可。
`;
const code7 = `
...
export default class App extends Component {
  state = {
    count: 0
  }
  onPlus = () => {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    const { text } = this.props;
    const { count } = this.state;
    return (
      <div className="App">
        <button className="my-button" onClick={this.onPlus}>{text || '点击次数'}{ count }</button>
      </div>
    );
  }
}
`;
const doc8 = `
点击按钮，按钮上的数字按照预期变化了！当然也可以使用函数类型的参数如
${reference('this.setState(({ count }) => ({ count: count + 1 }));')}
这里是箭头函数的解构形式，原本是这样：
`;
const code8 = `
this.setState(function (state) { 
  return { count: state.count + 1 };
});
`;
const doc9 = `
上面就实现了一个具有自身状态的组件，需要更多状态时可以在 state 中继续添加。我们看到的网页上各种复杂交互逻辑的实现，最基本的结构就是这样。通常一个页面加载时，会先显示一个加载动画，等待数据返回时，显示出正常的页面，这是怎么做到的呢？我们来模拟一下这个过程：
`;

const code9 = `
import React, { Component } from 'react';
import image from './logo.svg';

function Loading({ loading, children }) {
  return loading ? <img src={image} style={{width: '100px'}} /> : children;
}

export default class App extends Component {
  state = {
    loading: true
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
        data: '你最终看到的内容在这里'
      })
    }, 3000);
  }
  render() {
    const { loading, data } = this.state;
    return (
      <Loading loading={loading}>
        <div className="App">
          <div>{data}</div>
        </div>
      </Loading>
    );
  }
}
`;
const doc10 = `
${reference('componentDidMount')} 是一个 React 生命周期，也是框架固定的钩子函数，在组件加载完成后自动调用。这里用 ${reference('setTimeout')} 模拟一次异步请求，3 秒后将数据同步到 state 中，并将 loading 状态置为 false。${reference('Loading')} 组件接收一个参数 loading，我们注意到当 loading 为 truthy 时会返回一张图片（过渡动画），loading 为 false 时，返回参数 children。children 是什么呢？其实我们可以留意到${reference('Loading')} 组件使用的是**双标签**的形式，与 App 组件使用略有不同，这是 React 框架的一个特点，双标签组件会默认得到一个 children 参数，来引用标签内部的内容，即 children 就是这一坨：
`;
const code10 = `
<div className="App">
  <div>{data}</div>
</div>
`;
const doc11 = `
在真实的项目环境中，${reference('componentDidMount')} 应该是一个真正的请求，比如：
`;
const code11 = `
...
componentDidMount() {
  fetch('/api').then(({ code, data, message }) => {
    if (code === 200) { // 前后端约定 200 为成功状态码
       this.setState({
        data: '你最终看到的内容在这里'
      });
    } else {
      console.error(message); // 将接口的错误信息打印出来
    }
  }).catch(err => {// 将请求错误信息打印出来
    console.error(err);
  }).finally(() => { // 无论接口成功还是失败，加载状态都将结束
    this.setState({
      loading: false
    });
  });
}
...
`;
const doc12 = `
以上就是 react 的基础内容。
`;

export default {
  doc1,
  code1,
  doc2,
  code2,
  code3,
  doc3,
  doc4,
  code4,
  doc5,
  code5,
  doc6,
  code6,
  doc7,
  code7,
  doc8,
  code8,
  doc9,
  code9,
  doc10,
  code10,
  doc11,
  code11,
  doc12
};