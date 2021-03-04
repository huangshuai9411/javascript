import { reference } from '@/util';
import dom from './dom.png';
import js from './js.png';

const docString1 = `
#### **文档对象对象模型 (DOM，Document Object Model)**

本节内容围绕 ${reference('document')} 对象展开，在网页操作中最重要的对象莫过于 ${reference('document')}。
打开本网站控制台，输入 ${reference('document')} 并回车，我们可以看到类似下面的文档结构：

![DOM](${dom})

#### **DOM——查询**

从根节点 html 标签开始，层层展开依次能够看到 head、body、div#root、section...整篇文档的结构。每一个文档标签，对应的 DOM 结构我们称之为节点 node，获取节点有很多方法（操作节点的前提是先获取节点），下面一一分析（学习前后端都涉及到四个字：**增删改查**，我们从查开始）。

1. ${reference('document.all')}。控制台查看该对象，可以发现这是一个 ${reference('HTMLAllCollection')}，即 HTML 标签集合，形式上很像一个数组，但其实并不是（叫做类数组对象比较合适）。所以也没有数组的操作方法，不过可以通过 length 属性得到节点的数量。${reference('document.all.length')}。这个方法作为了解，因为操作 dom 是有选择性的，所以用不到。
- 通过标签名获取元素节点 ${reference('document.getElementsByTagName')} 。如获取所有的 div 元素：${reference('document.getElementsByTagName("div")')}（务必在控制台打印并查看，获取任意的标签试试）
- 通过类名获取元素节点 ${reference('document.getElementsByClassName')} 。获取类名为 "site-layout" 的元素集合：${reference('document.getElementsByClassName("site-layout")')}
- 通过 id 获取元素节点 ${reference('document.getElementById')}。注意，设置 id 的时候讲究“唯一性”，这个方法返回的是一个元素，不是元素集合。如获取 id 为 root 的元素： ${reference('document.getElementById("root")')}。
- 通过 name 属性获取节点 ${reference('document.getElementsByName')}。name 属性在标签上的使用并不多见，跟上面的方法类似，返回元素集合。
- 万能大法：${reference('document.querySelector')} 和 ${reference('document.querySelectorAll')} 。顾名思义，这两个方法只用传递合法的 [CSS 选择器](/overview/css)即可获取到元素。前者返回匹配的第一个元素，后者返回所有匹配的元素。
- 通过元素之间的关系查询，假设当前元素用 curNode 表示，则
  - 获取 curNode 的子元素列表：curNode.childNodes
  - 获取 curNode 父元素：curNode.parentNode
  - 获取 curNode 的下一个相邻元素：curNode.nextSibling
  - 获取 curNode 的下一个相邻实体元素（文本、空白节点会跳过）：curNode.nextElementSibling
  - 获取 curNode 的上一个相邻元素：curNode.previousSibling
  - 获取 curNode 上一个相邻实体元素（文本、空白节点会跳过）：curNode.previousElementSibling
  - 获取 curNode 第一个子元素：curNode.firstChild
  - 获取 curNode 最后一个子元素：curNode.lastChild
`;

const docString2 = `
#### **DOM 操作——修改**

学了选择 DOM 的方法有什么用呢？还记得 [综述 > CSS](/overview/css) 部分留过的实现 Chrome 浏览器官网静态页面的作业吧，我们实现的是纯展示状态，没有任何动态交互效果。而学完这一节，你的网站就可以“动起来了”。

一、 找到我们学习 HTML 标签时建的 index.html 文件用编辑器打开，同时在浏览器上查看该文件。代码如下：
`;

const docString3 = `
二、 在文档末尾添加 script 标签：${reference('<script type="text/javascript"></script>')}

网页中的代码就是在 script 标签中运行的，代码直接放到 HTML 文档中只会被当做普通的文本。

三、在 script 标签中实现代码，对 p 元素增加样式，p 元素的背景颜色值设为“#ddd”，字体大小设为“20px”。 
`;

const docString4 = `
保存代码，然后刷新网页，看看是不是下面这样？(忽略图片的不同)

![JS](${js})

现在我们已经拥有了改变静态网站的能力，这也是网页操作的核心内容：获取要修改的文档节点——修改节点相应的值。一般地，获取文档节点需要在文档已经加载完成的情况下，否则 JS 代码可能不会如愿拿到 DOM 节点。所以 script 标签通常都在文档的末尾，且在 window.onload 事件中执行。
`;

const docString5 = `
#### **DOM——增加**

即向网页添加原先不存在的节点，涉及到节点的创建 createElement 和插入两类方法。
还以 index.html 文档为例，我们在文档 body 标签末尾加入一些内容，在 script 标签后面接着补充代码。
`;

const docString6 = `
> 刷新 index.html 网页，在底部能看到新加的元素吗？新加元素的样式相信同学们都能读懂每一行代码。在 HTML 文档中，body, head, html 标签都是唯一的，因此可以不用 document.getElementByXXX 的方式来获取，直接用 document.body, document.head, document.documentElement（chrome浏览器，IE 的 document.rootElement，初学者建议忽略 IE，维护前端环境从你我做起） 即可。

添加元素除了 appendChild，还有 insertBefore，例如 ${reference('document.body.insertBefore(newDiv, oldElement)')}; 其中 oldElement 是 body 的子元素，将 newDiv 元素插入到 body 中的 oldElement 前面。

#### **DOM操作——删除**

没什么好说的，只有一个方法，父节点调用 removeChild 来删除一个子节点。例：${reference('document.body.removeChild(document.body.firstChild)')}，可以在控制台执行几次看看效果。
`;

const docString7 = `
#### **DOM CSS**
刚才的代码，其实是元素样式属性的操作，元素都有哪些样式属性呢？我们在控制台打印一下：${reference('document.body.style')}，看完后还好吗？在学习 CSS 的章节接触到的所有 CSS 属性，全部出现在了这里。只不过为了支持对象的点取值操作，改成了驼峰形式。很多属性通过合并、简化的形式使用如 border，可以细分为 borderTop、borderRight、borderLeft、borderBottom、borderBottomWidth 等等，所以千万不要死背。当我们需要做什么的时候，我们是知道的，自然就会去接触相应的知识点。在 HTML 节点对象上，我们可以通过 style 属性访问到这些样式值，当然也可以通过重新赋值来修改样式。

> ${reference("let p = document.querySelector('p');")} // 注意这是一个元素，不是集合

> 获取 p 标签字体颜色：${reference("p.style.color")}

> 修改 p 标签字体颜色：${reference("p.style.color = '#000';")}

> 获取 p 标签高度：${reference("p.style.height")}

> 修改 p 标签高度：${reference("p.style.height = '100%';")}

> ……
`;

export default {
  docString1,
  docString2,
  docString3,
  docString4,
  docString5,
  docString6,
  docString7,
}