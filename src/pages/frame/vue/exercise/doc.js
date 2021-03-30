import { reference } from '@/util';
import vue from './antd.png';
import form from './form.png';
import example from './form-example.png';
import element from './element.png';

const doc1 = `
#### **使用第三方模块**

和 Vue 搭配的 UI 框架，比较常用的要数 ${reference('Element UI')} 了。

- 打开上节课的 Vue 项目，在项目目录内打开终端（如果项目运行中已经打开了，那就再开一个），输入命令${reference('yarn add element-ui')} 并回车;

- 浏览器打开 Element UI 组件使用文档（https://element.eleme.cn/#/zh-CN/component/layout）[右键此处，在新标签中打开链接](https://element.eleme.cn/#/zh-CN/component/layout) 我们可以看到很多精美的组件。

这次我们同样实现一套表单，在侧边栏找到 Form 表单

![vue](${vue})

展开代码区域，将代码复制到一个 Demo.vue 文件，保存在 ${reference('src/components/')} 文件夹内。
>注意复制的标签部分外边嵌套一个 ${reference('template')} 标签。 

- App 组件导入 Demo 组件并注册使用如下：

![form](${form})

这时候我们看到的界面并没有出现期望中的表单，因为在创建的 Demo.vue 组件中，很多标签如 ${reference("el-form")}、${reference("el-form-item")} 并不能被有效识别，所以 Vue 使用第三方组件库时，需要提前注册。官网介绍所示：

![example](${example})

在 ${reference('main.js')} 文件加了上面 3 行代码后，我们立马就看到了一套表单：

![element](${element})

> 表单填写后可以在 Demo 组件的 form 属性拿到所有值用于提交， 起关键作用的是 ${reference('v-model')} 指令。指令的学习可以在 Vue 官网上详细阅读，本教程不再赘述，有问题可以群里咨询。
`;

export default {
  doc1,
};