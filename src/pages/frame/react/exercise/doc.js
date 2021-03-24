import { reference } from '@/util';
import antd from './antd.png';
import form from './form.png';
import example from './form-example.png';

const doc1 = `
#### **使用第三方模块**

通过之前众多基础内容的学习，我们掌握了 HTML 标签、CSS、Jquery、react 的基本用法。你是否觉得自己写出来的页面完全无法直视？抑或是有了要实现的界面却无从下手？别着急，这节课我们逐个解决这些问题。

- 打开上节课的 react 项目，在项目目录内打开终端（如果项目运行中已经打开了，那就再开一个），输入命令${reference('yarn add antd')} 并回车;

> ${reference('yarn + add')} 是添加模块的命令，后面的模块名来自互联网上的模块，我们这里是要把阿里的 UI 框架 antd design 安装在项目中。安装完毕后，我们可以在项目的 ${reference('package.json')} 文件内看到这个依赖，也能在 ${reference('node_modules')} 文件夹下找到名为 antd 的模块文件夹。然后就可以愉快地开始乐高之旅了。

- 浏览器打开 antd design 官网（https://ant.design/components/overview-cn）[右键此处，在新标签中打开链接](https://ant.design/components/overview-cn/) 我们可以看到很多精美的组件，自带样式和状态，我们开发业务时，便可以节约大量实现样式的精力。

比如实现一套表单，在侧边栏找到 Form 表单

![antd](${antd})

将步骤 3 中的代码(框选的部分再往下，一直到${reference('ReactDOM.render(<Demo />, mountNode);')})复制出来（不包括最后一行）, 在我们的项目 src 文件夹下创建一个 Demo.js 文件，并粘贴刚才复制的代码。
>注意：文件第一行加上 react 的引入 ${reference("import React from 'react';")} 

> 最后一行加上 Demo 组件的导出 ${reference('export default Demo;')}

- App 组件导入 Demo 组件和 antd 的样式（${reference("import 'antd/dist/antd.css';")}一般在根组件 index.js 中，入口处加载 antd design 的样式表，可以确保后面所有的组件都能应用到，本例中也可以在 Demo 组件中引入。全局样式只需引入一次。）：

![form](${form})

这时候我们看到的界面是不是跟 antd 官网上的示例一样了？

![example](${example})

好了，antd 的所有组件都有详细的使用文档，本教程不再赘述，有问题可以群里咨询。

> 在后面的实战强化中我们还会专门对 react 项目进行手把手指导学习，下节课是与 React 并列的框架 Vue 的学习，也可以选择先跳过 Vue 集中学习 React，总之，同学们至少要掌握一个前端框架!
`;

export default {
  doc1,
};