import { reference } from '@/util';

const docString1 = `
#### **浏览器对象模型 (BOM，Browser Object Model)**

在作用域章节，我们已经知道，任何变量的使用都要先声明，否则不能访问。但是我们已经碰到过几个并没有声明就使用的变量（对象），比如日期对象 ${reference('Date')}（计算“日龄”时使用到的），比如打印函数 ${reference('console.log')}，这是为什么呢？

> 在浏览器中，其实这样可以直接访问的对象有很多。但是本节内容的重点，是浏览器提供的一些最常用的对象，这些对象是 JavaScript 与浏览器交互的接口，使开发者可以获取或更新浏览器的一些状态。

- window 对象。打开控制台，在 Console 一栏输入 window 并回车，可以看到返回的结果是一个 Window 对象，展开以后能看到不计其数的方法或属性。不要慌张，没有人去背这些东西，也没见过有谁全都用过这些方法的。我们只要知道 Window 对象上堆着很多有用的东西即可。常用的几个方法我们必须牢记（在讲对象上的方法的时候，指的是某个键值对的值为函数，该函数又称为该对象的方法。普通的键值对的键，也可称作对象的属性）：

> 关于窗口尺寸，${reference('window.innerHeight，window.innerWidth')}，单位像素（px）

> 打开新窗口 ${reference('window.open()')}（在控制台执行一下试试？传入一个链接字符串再试试？）

> 关闭当前窗口 ${reference('window.close()')}（有权限限制）

> **关于导航信息 ${reference('window.location')}，包含当前网站的地址信息，导航网站的一下方法等，这个是重点中的重点**

在 window 上的属性和方法也是全局可访问的，均可以省略 ${reference('window.')} 直接访问。例如在控制台输入 location，open 等均有效。


- screen 对象。关于屏幕信息。在做布局的时候可以用得到，务必在控制台打印观察。
- history 对象，${reference('window.history')}。顾名思义，历史记录的前进、回退可以使用该对象的一些方法。不过基于 history 封装的较为成熟的库已经不需要我们直接操作浏览器中的历史了。熟悉并了解。
- navigator 对象。打印后我们找到 userAgent 属性其值为一个带有设备信息的字符串。通过这个信息，基本可以确定代码是在 PC 端还是移动端运行的。
- alert 方法。在控制台执行 alert('what is this ?')，好了这个你已经会了，一般地，代码执行到某处逻辑，需要通过显示器反馈一些信息比如错误、提示时用得到。但是这个提示会中断其他任务，也不美观。所以开发已经很少使用了。
- 定时器。setInterval 和 setTimeout 方法。这两个方法很常用。当我们需要每隔固定的时间（毫秒数）就执行一次函数时：

> ${reference('setInterval(function () { 每隔 1000ms 执行一次此处的代码 }, 1000)')}

当我们需要等一段的时间（毫秒数）再执行函数时：

> ${reference('setTimeout(function () { 1000ms 后开始执行此处的代码 }, 1000)')}

这两个函数也是有返回值的，返回值是一个用于清除自身的 id，取消一个定时器：

> ${reference('let interval = setInterval(function loop() { 每隔 1000ms 执行一次 loop 函数}, 1000)')}

> ${reference('clearInterval(interval)')} // 之后就不再执行 loop 函数

取消 timeout 任务：

> ${reference('let timeout = setTimeout(function loop() { 1000ms 后开始执行 loop 函数}, 1000)')}

> ${reference('clearTimeout(timeout)')} // 1000ms 后不会执行 loop 函数

BOM 的主要内容就这些，其他的不必花费过多精力，不要忘了我们的目标。
强调一点，这些 BOM 对象在我们的代码执行于浏览器环境（相对于 node 环境，目前还没接触到）时，是可以处处访问到的，这是全局对象的共同特点。
`;

export default {
  docString1,
}