import { reference } from '@/util';
import nodePic from './1.png';
import terminal from './2.png';
import nodeNpm from './3.png';

export const header = `
### 工欲善其事，必先利其器，我们先下载好开发用到的工具
- IDE —— 代码编辑器。常见的有 [vscode](https://code.visualstudio.com/Download)、[sublime text](http://www.sublimetext.com/3)、[HBuilderX](https://www.dcloud.io/hbuilderx.html)（点击对应名称可以去下载，注意区分 windows 和 mac 平台）。本教程以 HBuilderX 为主要编辑器。
- node 运行环境。[下载地址](https://nodejs.org/zh-cn/download/) node 下载界面如下，我们可以点击当前发布版，windows 系统（当前电脑普遍都是 64 位操作系统了，如果是 32 位，记得点击 32-bit）。mac 笔记本选择相应的 macOS 安装包（.pkg）

![node 下载界面](${nodePic})

- 浏览器下载。作为初学者，还是面向谷歌编程比较方便。所以下载 [Chrome](https://www.google.cn/chrome/)（其他多少有点浏览器兼容性问题，当然 360 浏览器、FireFox，Safari 也行，如有需要自行百度下载即可）
- 编辑器、浏览器和 node 的安装过程略过（凭借百度就能解决问题）。由于新版本的 node 已经不需要手动配置环境变量，所以安装完就万事大吉了。
- 检测 node 安装结果。

> windows 平台

在任意文件夹（桌面也可），按下 ${reference('shift')} 的同时在空白处单击鼠标右键。

![右键图片](${terminal})

  点击 ${reference('在此处打开 Powershell 窗口(s)')}，打开终端，输入 ${reference('node -v')} 并回车检查 node 版本，然后输入 ${reference('npm -v')} 并回车检查 npm 版本。如果终端输出版本号（如下图），证明 node 安装成功。

![右键图片](${nodeNpm})
  
> mac 平台

mac 笔记本天然为编程而生，其命令行终端同样输入上面的命令检查 node 是否安装成功。建议将终端入口保存到任务栏，方便使用。

> 一些终端的命令操作可以自己搜索学习，对于初学者不是重点，不必刻意花时间。现在只需要知道一个操作：

在某个特定文件夹打开终端，windows 平台可以直接进入该文件夹，按下 ${reference('shift')} 的同时在空白处单击鼠标右键。

mac 平台可以直接将该文件夹拖放到任务栏终端图标上。

### 至此，准备工作完成。
`