import { reference } from '@/util';
import element from './elements.png';
import nostyle from './nostyle.png';
import cat from './cat.png';

const HTML = reference('HTML');

const labels = [
  ['p', '段落'],
  ['header', '文档或节的页眉'],
  ['aside', '页面内容之外的内容'],
  ['article', '定义文档的主内容'],
  ['main', '文档内的文章'],
  ['nav', '文档内的导航链接'],
  ['section', '文档中的节'],
  ['footer', '文档或节的页脚'],
  ['div', '块级容器'],
  ['span', '行内容器'],
  ['img', '图片'],
  ['a', '超文本链接'],
  ['head', '文档头，唯一'],
  ['body', '文档体，唯一'],
  ['html', '文档根标签，唯一'],
  ['style', '包裹css样式的标签'],
  ['link', '引入外部样式表的标签'],
  ['script', '引入外部脚本的标签'],
  ['form', '表单域'],
  ['select', '下拉选框'],
  ['radio', '单选框'],
  ['input', '输入框'],
  ['table', '表格，内部只能使用表格相关的标签'],
  ['thead', '表格头，只能在table标签内使用'],
  ['tbody', '表格体，只能在table标签内使用'],
  ['tfoot', '表格底部，只能在table标签内使用'],
  ['tr', '表格行，只能在上面四种标签内使用'],
  ['th', '表头单元格，只能在tr标签内使用'],
  ['td', '表单元格，只能在tr标签内使用'],
  ['ul，ol', '无/有序列表域，搭配li元素'],
  ['li', '无序列表单项，只在ul，ol标签内使用'],
  ['dl', '自定义列表域，搭配dt，dd元素'],
  ['dt', '自定义列表分组标题，只在dl标签内使用'],
  ['dd', '自定义列表单项，只在dl标签内使用'],
  ['audio', '音频标签，如果不做专门的业务，几乎用不到'],
  ['video', '视频标签，如果不做专门的业务，几乎用不到'],
].map(([label, desc]) => reference(label) + ': ' + desc).join(`

`); // 这里插入了一个换行符

const htmlElement = `
### HTML 是什么？
${HTML}的英文全称是 ${reference('Hyper Text Markup Language')}，即超文本标记语言。它包括一系列标签．通过这些标签可以将网络上的文档格式统一，使分散的${reference('Internet')}资源连接为一个逻辑整体。${HTML}文本是由${HTML}命令组成的描述性文本，${HTML}命令可以说明文字，图形、动画、声音、表格、链接等。

- 例如要描述文档的标题：
${reference('<title>这是标题</title>')}
一对**开始标签（opening tag）**和**结束标签（closing tag）**包裹着标题的内容。
- 例如网站上我们常用的[超链接](http://www.baidu.com)代码长这样：
${reference('<a href="http://www.baidu.com">超链接</a>')}
- 例如我们在网站上看到的一张图片，真实的代码：
${reference('<img src="http://www.xxx.picture.jpg" alt="图片加载失败显示的文案" title="鼠标悬停在图片上显示的文案" />')}

上面的标签中，有的成双成对(title，a)，有的独自闭合（img），区别在于双标签只能表述内容的特征而不能表达内容，单标签本身就是内容的载体。这点差异很容易理解，记住即可。
好了，剩下的标签类似，不同的是各个标签因功能不同而展示的样式有差异①、文档对象${reference('DOM')}的方法②有差异。差异①会在下节的 [CSS](/overview/css) 进行分解，差异②会在 [课程>DOM](/lesson/dom) 进行分解。

### 下面是一些 HTML 常用标签
${labels}

这些标签之外的部分也建议了解一下[点击学习更多](https://www.w3school.com.cn/tags/tag_a.asp)，事实上真正用框架写项目的时候，直接使用的原生标签类型已经不多了。所以初学者知道有这么些东西，知道使用标签的规则即可。
这里是一个页面结构分析，[点击前往](/overview/html/example)

`;

export default htmlElement;

export const example = `
- 打开 Google 浏览器，在任一网站的页面右键，点击 “检查” （windows 电脑快捷键 F12），打开控制台。以本页面为例，打开控制台在 ELements 栏查看结果（标签可以点击左侧三角符号展开或关闭）：

![Elements](${element})

我们先忽略标签上的其他信息如${reference('class="ant-layout ant-layout-has-sider" style="min-height: 100vh;"')}
图中的所有标签不就是上节说的那些吗？这里可以直观地看出，大部分都是双标签，都是互相嵌套使用的。标签内可以嵌套其他标签或直接放置文本信息。放置文字的${reference('li')}标签的父级就是${reference('ul')}，上节提过，这是一个固定搭配。

HTML 的内容其实就这么多，就像英语单词，常用的记一下，接下来就是运用了。
`;

export const createFile1 = `
### 学习创建一个最简单的网页
打开 HBuilderX 编辑器，（后面均以 HBuilderX 为例），点击左上角的第一个按钮，选择 ${reference('html 文件')}，命名后确认（保存位置自己定）。不要修改文件的后缀  ${reference('.html')}。
这时候我们的文件自动填充了 H5 模板（[什么是 H5 ？](https://baike.baidu.com/item/html5/4234903?fr=aladdin)）如下
`
export const createFile2 = `
双击刚才新建的 html 文件（或者拖放文件到 Chrome 浏览器上），我们已经浏览到一个空白的网页——这就是我们网上冲浪看到的基本结构。倘若我们把这个页面放到服务器上，那么其他人上网的时候就能看到。

现在我们随便填一些内容进去：

`;

export const createFile3 = `
保存代码并刷新浏览器，可以看到以下内容

![初始页面](${nostyle})

`;

export const createFile4 = `
还记得图片标签吗？我们再加一张图片进去。
随便找一张图片，示例图片的名称为 cat.jpg，所以图片标签的链接为 ${reference('src="./cat.jpg"')}，把这张图放在 index.html 文件的同一目录下。
保存代码并刷新浏览器，不出意外的话我们将看到文字下面的图片

![初始页面](${cat})

显然这张图片不是太大就是太小，网页也跟我们看到的正常网站相去甚远……所以，样式表登场了。[马上学习样式表](/overview/css)

`;