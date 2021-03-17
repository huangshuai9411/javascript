import { reference } from '@/util';

const doc1 = `
#### **详细中文教程**
如果把网上的[ React 中文教程](https://reactjs.bootcss.com/)搬过来，并没有什么意义，所以这里引入链接，并默认所有同学已经把教程了解了一遍。

下面，我们开始实现一个 Hello, world!。

1. 还记得**综述 > 准备工作**吧？现在 ${reference('node')} 和 ${reference('npm')} 开始派生用场了。我们先打开命令行终端（[参考地址](/overview/prepare)）
- 执行命令 ${reference('npm i yarn -g')}，全局安装 ${reference('yarn')} 包管理器。
- 安装完成后验证成败：${reference('yarn -v')} 检测 ${reference('yarn')} 版本。

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

export default {
  doc1,
  code1,
};