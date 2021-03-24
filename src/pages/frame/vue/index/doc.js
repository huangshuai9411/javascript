import { reference } from '@/util';
import img from './index.png';
import files from './files.png';
import root from './root.png';

const doc1 = `
#### **详细中文教程**
[ Vue2 中文教程](https://cn.vuejs.org/v2/guide/installation.html)

[ Vue3 中文教程](https://v3.cn.vuejs.org/guide/installation.html/)

Vue 目前使用最广的版本是 Vue2，本着向前看的心态，Vue3 的文档也放了出来，不过后者也兼容前者的大部分场景。如果在 react 的学习中，你已经安装过 yarn，那么直接进行下面的操作（否则先安装 yarn 再继续）：

Vue 官网的介绍一定会让很多新人一头雾水，不知道哪些步骤是必需的，哪些是可以跳过的。对于实际项目开发，我们使用 [vue-cli](https://cli.vuejs.org/zh/guide/creating-a-project.html) 进行创建，这涉及到一系列的插件系统，所以这里不以 cdn 的形式引入 vue，而是直接创建一个前端工程。

#### **Create Vue App**

1. 在存放项目的文件夹内打开终端，执行命令 ${reference('yarn add vue --global')}，全局安装 vue。
2. 检查安装结果 ${reference('vue -V')}（大写 V，或者 ${reference('vue --version')}）
3. ${reference('vue create vue-app')}，在当前目录创建工程文件夹 vue-app
4. 选择预设时，默认第一个即可，回车继续。
5. 安装完成后，我们可以按照提示进入项目目录 ${reference('cd vue-app')} 并启动项目 ${reference('yarn serve')}
6. 终端出现以下日志时，表示启动成功，项目运行在 本地服务的 8080 端口，所以用浏览器打开这个地址 ${reference('http://localhost:8080/')} 吧~

![files](${files})

> 图上第二行地址也能访问，这是本机的 ip 地址，如果你的电脑与手机连接的是同一网络，那么手机便能通过 ${reference('http://192.168.43.163:8080/')} 访问到电脑上的页面了。

用编辑器打开项目，我们注意下面的结构：

![img](${img})

从 main.js 出发，类比 react，${reference('new Vue()')} 将根组件 ${reference('App.vue')} 挂载到了跟标签 ${reference('div#app')} （在  ${reference('/public/index.html')} 中）上，${reference('App.vue')} 引用了子组件 ${reference('HelloWorld.vue')}，抛开文件名的后缀的差异，这不就跟 react 的大体流程极致类似吗？

聚焦 App.vue（后面提到组件时省略后缀名）组件，其代码结构自上而下分别是 标签部分、逻辑脚本部分、CSS 样式。标签中用到的自定义组件有别于原生的 HTML 标签，必须在导出对象的 components 属性中声明。 CSS 样式部分，style 标签可以使用作用域标记 scoped（HelloWorld 组件上能看到），其作用是避免本组件的样式影响到其他组件。最后我们打开 HelloWorld 组件，开始学习 Vue 的使用。
`;

const doc2 = `

> 准备工作：

> 删除默认的 ${reference('App.vue')} 文件的图片标签；
> 删除默认的 ${reference('HelloWorld.vue')} 文件的内容如下：

![root](${root})

- 在页面上添加一个按钮，按钮文字为“点击次数”：
`;

const code2 = `
<div class="hello">
  <button>点击次数</button>
</div>
`;
const doc3 = `
页面更新后我们继续：

- 给按钮添加一些样式，这时候通过类名来定义，同时需要在 style 标签中实现相应的样式。**与 react 不同的是，类使用 class 而不是 className 定义**。
`;

const code3 = `
// template 标签中
<div class="hello">
  <button class="my-button">点击次数</button>
</div>

// style 标签中
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
接着：

- 按钮上的文字我们希望可以自定义，于是添加组件的 props（指父级传递下来的变量），命名为 text。当 App 组件没有传参时，默认显示“点击次数”。注意，变量 text 在 template 中使用时需要用**双花括号**括起来。
`;
const code4 = `
<template>
...
  <button class="my-button">{{ text }}</button>
...
</template>

export default {
  name: 'HelloWorld',
  props: {
    text: {
      type: String,
      default: '点击次数'
    }
  }
}

// App.vue
...
<HelloWorld text="我是按钮上的文字" />
...
`;

const doc5 = `
在 props 对象中声明的属性，会被挂到当前的组件实例上，也就是 this 下，此时，this.text === "我是按钮上的文字"。那组件自己的状态应该在哪里声明呢？类比 react，react 是使用类组件，将状态声明在了 state 中，而 vue 则是声明在实例的 data 方法中返回：
`;
const code5 = `
export default {
  name: 'HelloWorld',
  data() {
    return {
      
    }
  },
  props: {
    text: {
      type: String,
      default: '点击次数'
    }
  }
}
`;
const doc6 = `
- 给组件定义一个状态 count，初始值为 0，显示在按钮内：

`;

const code6 = `
<template>
...
  <button class="my-button">{{ text }}{{ count }}</button>
...
</template>
...
export default {
  name: 'HelloWorld',
  data() {
    return {
      count: 0
    }
  },
  props: {
    text: {
      type: String,
      default: '点击次数'
    }
  }
}
`;
const doc7 = `
- 给按钮添加点击事件，点击一次，显示的数字就加 1：

> vue 中标签绑定事件的方式是 @ + 事件类型，如 @click，方法的声明在 methods 属性对象中。

> 点击事件我们还命名为 onPlus，点击按钮执行 onPlus 方法，即修改 this.count，这就可以触发组件的渲染了。
`;
const code7 = `
...
<button class="my-button" @click="onPlus">{{ text }}{{ count }}</button>
...
export default {
  name: 'HelloWorld',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    onPlus() {
      this.count++;
    }
  },
  props: {...}
}
`;
const doc8 = `
点击按钮，按钮上的数字按照预期变化了！是不是比 react 还简单些？没错，vue 就是公认的让人快速上手的前端框架。
`;

const doc9 = `
上面就实现了一个具有自身状态的组件，需要更多状态时可以在 data 返回的对象中继续添加。这次，我们同样来模拟一下网页请求数据并加载的过程：
`;

const code9 = `
<template>
  <div class="hello">
    <img v-if="loading" src="../assets/logo.png" />
    <span v-else>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'loadAnimate',
  data() {
    return {
      loading: true,
      text: ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
      this.text = '你最终看到的内容在这里';
    }, 3000);
  }
}
</script>
<style scoped>
// 上面那一坨，略
</style>
`;
const doc10 = `
${reference('mounted')} 与 React 的 ${reference('componentDidMount')} 一样，是 Vue 一个生命周期，也是框架固定的钩子函数，在组件加载完成后自动调用。这里用 ${reference('setTimeout')} 模拟一次异步请求，3 秒后将一些状态更新，我们注意模板中的标记：**v-if** 和 **v-else**，通过名字我们就很容易得知，这是一组互斥的展示逻辑，在 Vue 中，这样的内置指令（也可以自定义指令）有很多，通过文档我们就能了解一大部分。
`;

const doc11 = `
在真实的项目环境中，${reference('mounted')} 应该包含一个真正的请求，比如：
`;
const code11 = `
...
mounted() {
  fetch('/api').then(({ code, data, message }) => {
    if (code === 200) { // 前后端约定 200 为成功状态码
       this.text = '你最终看到的内容在这里'；
    } else {
      console.error(message); // 将接口的错误信息打印出来
    }
  }).catch(err => {
    console.error(err); // 将请求错误信息打印出来
  }).finally(() => { // 无论接口成功还是失败，加载状态都将结束
    this.loading = false；
  });
}
...
`;
const doc12 = `
以上就是 vue 的基础内容。[马上进行强化学习~](/frame/vue/exercise)
`;

export default {
  doc1,
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
  doc9,
  code9,
  doc10,
  doc11,
  code11,
  doc12
};