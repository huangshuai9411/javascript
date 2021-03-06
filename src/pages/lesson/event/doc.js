import { reference } from '@/util';
import eventListenerBreakpoints from './listener.png';
import clickevent from './clickevent.png';
import mouseoverevent from './mouseoverevent.png';
import addeventlistener from './addeventlistener.png';

const docString1 = `
#### **事件的类型**

在上节课程里，我们已经接触到了一个事件：${reference('wondow.onload')}——浏览器在文档结构加载完成后默认调用的一个函数，开发者可以在这个函数里面写下需要执行的逻辑。那么问题来了，代码执行的条件有各种各样的场景，比如用户鼠标点击时执行、按下键盘执行、鼠标滑过执行……所以文档加载完成执行远远不能满足开发者和用户的需要。也就是说，我们需要更多的事件类型来丰富用户的操作、实现有条件的代码执行逻辑。

常见的事件类型集中在鼠标操作上，如单击（特指主要键，默认是左键）、双击、右击（特指次要键，默认是右键）、移入、移出、滚动（滚轮）等。我们打开 Chrome 浏览器控制台，切换到 **Sources** 面板，找到 **Event Listener Breakpoints** 展开如图：

![Event Listener Breakpoints](${eventListenerBreakpoints})

在 **Mouse** 属性下面列出了鼠标上面的所有事件类型，先简单了解一下：
`;

const docString2 = `
在上图中，还框住了一个 **Touch** 属性，这些事件是移动端特有的，根据名称很容易就能猜到是什么意思，这里就不作为重点展开了。根据笔者的经验，上表对鼠标事件的使用频率作了简单的定性的归总，作为初学者对它们重要程度的一个认识依据。当然，一些专门库的开发使用的事件类型是有侧重的，例如地图上，**wheel**事件必然是一个重点类型，所以这里只针对普通常见业务，给普通开发者提供一些参照。

> 图中未框选的其他事件类型，其使用方式与鼠标事件类似，不再一一描述。事件类型虽然众多，对于初学者，建议掌握**鼠标事件（Mouse）**、**拖放事件（Drag/drop）**、**键盘事件（Keyboard）**即可（不要在其他事件上浪费时间）。

#### **事件的绑定**

使用编辑器以默认的模板新建 event.html 文件，写入以下内容后保存并用浏览器打开这个文件。
`;

const docString3 = `
点击页面上的按钮看看发生了什么？如下图

![Event Listener Breakpoints](${clickevent})

我们来简单分析一下代码的逻辑：

> 按钮元素上绑定了一个鼠标点击事件（"on"+ 事件类型）onclick，其值等于一个函数调用。点击按钮时执行函数 onClick 的逻辑，所以页面上显示出了我们设定的内容。

我们再升级一下，修改代码（建议每次复制文件再修改，保留历史文件方便回溯复习）
`;

const docString4 = `
这一次，我们使用的是 ${reference('console.log')} 打印东西，所以打开控制台的 **Console** 栏，当鼠标滑过按钮（每次保存代码后都要刷新网页确保加载最新的代码）时，控制台如下：

![Event Listener Breakpoints](${mouseoverevent})

上述示例均执行了写死的逻辑，那如果有很多元素，我们希望执行的逻辑是动态的呢？例如，不同的元素有不同的内容，我们要用一个事件处理函数，执行不同元素上的逻辑，例如这样：
`;

const docString5 = `
上面示例使用一个带参数的函数处理了所有按钮的点击事件，当然按钮的点击事件不同时，我们就要使用不同的函数来处理了。如果函数不传实际的内容，我们能否实现同样的逻辑呢？继续修改代码：
`;

const docString6 = `
大名鼎鼎的 [this](/lesson/this) 终于登场了，在未来的日子里，它将伴随我们整个职业生涯。在英文里，${reference('this')} 是一个就近的指示代词。在代码里，this 的这层含义也很微妙。这个示例中，this 指代事件处理器的**当前宿主**——当前按钮对象。所以我们可以在控制台打印出 param 的值是一个按钮节点。在 DOM 一节我们知道访问和设置一个节点的属性的方法，相信你一看就明白下面的代码做了什么：

`;

const docString7 = `
一般地，对元素样式的修改触发的页面重排及重绘（简单了解，暂不深究）不宜过于频繁，能批量进行的最好不分开进行，所以像上面对 style 属性的多次变更，通常会像下面这样实现：
`;

const docString8 = `
> 事件绑定就是这样。只要把“onclick”换成其他事件类型，比如 “onmouseover”，“ondrag”，“onmousewheel”，就可以实现其他事件类型了。是不是很简单？那好，我们现在再讲一种绑定事件的方式。

#### **addEventListener**

前面讲述的绑定事件方式，都要开发者在元素标签上定义事件类型和处理函数，这种“写死”的方式显然不利于代码的扩展性、动态性以及维护性（通常标签与脚本是分开组织的，混在一起会很难维护）。我们用前面的代码作为示例：
`;

const docString9 = `
这里使用了 window.onload（想想为什么前面的示例可以不用？），保证获取元素的操作在文档加载之后。使用循环为每一个按钮绑定了点击事件。这种绑定事件的方式不需要在事件类型前面加前缀“on”。${reference('addEventListener')} 是 DOM 元素共有的方法，第一个参数为“事件类型字符串”，第二个参数为事件处理函数，第三个参数为布尔值，表示是否允许冒泡（为了浏览器之间的行为一致，通常为 false）。打开控制台，点击按钮触发上面的事件，查看打印日志。

![打印日志](${addeventlistener})

> 代码执行结果不言而喻，我们重点关注这份代码中刻意添加的 4 行打印语句，根据打印结果我们可以得到以下信息：

> 1. 事件处理函数（这里指 onClick）会被默认传入一个参数（这里指参数 e），这个参数叫做**事件对象**（有兴趣可以打印 e，看看都有什么）；
> - 事件对象上的 target 属性就是目前触发事件的目标元素（这里指某个 button）；
> - 事件处理函数中的 this，指向触发事件的目标元素，也就是当前的 button；
> - 在函数 anonymous 中访问 this，已经不是函数 anonymous 外面的 this 了。也就是不等于前述的按钮或事件目标元素。
> - 根据第 4 点得知，this 是随着执行环境变化的，（想想指示代词是不是也有这种特点），所以当你不清楚 this 的指向时，最好选择使用确定含义的变量（这里指 button[i] 或 e.target）
> - 预测一下，在 anonymous 函数中，把第一行代码改成 ${reference("this.innerHTML += ', 2s 后按钮追加的文本';")} 是不会达到预期的。

课后作业：新建一个HTML文件，放置一个按钮（按照自己的审美适当加点样式），为按钮添加点击事件，要求

1. 按钮点击后网页中心弹出一个弹框（使用标签实现，不是 alert 弹框）
- 弹框内列出个人信息。
`;

export default {
  docString1,
  docString2,
  docString3,
  docString4,
  docString5,
  docString6,
  docString7,
  docString8,
  docString9,
}