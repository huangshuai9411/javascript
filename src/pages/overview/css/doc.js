import { reference } from '@/util';
import styleImg from './style.png';

export const cssString1 = `
#### CSS 简介
Cascading Style Sheets 指层叠样式表。美化网站用的标记语言，还不能算作是编程语言。我们接上节的内容继续：

- 在 img 标签上增加尺寸信息保存后刷新浏览器。图片是不是变化了？拖拽浏览器尺寸是不是也能适应变化？
`;

export const cssString2 = `
- 我们多加一些样式进去（注意 p 标签的是段落的意思，可以将文章分段）：
`;

export const cssString3 = `
现在网页又变了。是不是很神奇？

![增加样式](${styleImg})

代码添加的内容没什么逻辑性，相信认识单词的人就能看懂。那么问题来了，如果我们添加越来越多的样式，网页代码看起来不就成一锅粥了吗？没错，解决问题的思路就是把样式的书写从标签上拎出去。同时为了将拎出去的样式与它所描述的标签关联起来，我们需要在标签上留下一个“标记”，即 CSS 选择器。通常是类名 class。多说无益，我们开始改代码。
`;

export const cssString4 = `
我们再看网页，效果与之前是一样的。这时候我们回到 [HTML > 网页结构](/overview/html/example) 那节再看，是不是就看懂了标签上的各种 class ？

- class 的命名比较随意，包含数字（不可以作为首字符）、字母、下划线、中划线都是可以的，比如合法的类名可以是以下形式：

"I-love-U"   "areU_kidding"    "class1-_2"……

但是为了可读性维护性，命名尽量具有一定含义且和团队风格一致。

> 其实标签上除了 style， class，还可以存在很多其他属性（标签上的键值对中，键名的统称）如 id，title，name……[可点击链接简单了解](https://www.w3school.com.cn/html/html_attributes.asp) 这些属性也可以用作 CSS 选择器，只是没特别的必要时，以类名为主要选择器。当然直接使用标签作为选择器也是没问题的。顾名思义，选择器针对的是一类元素集合，当多个元素都有相同的类名时，该类定义的样式将应用到这多个元素上。


### CSS 选择器

除了类名，选择器的种类各式各样，其目的就是能够把样式准确地应用到元素上。

- 元素（标签）选择器
${reference('html {color:black;} h1 {color:blue;} h2 {color:silver;}')}  定义全文档中某种标签的样式
- 选择器分组
${reference('body, h2, p, table, th, td, pre, strong, em {color: gray;}')}  一次定义一组元素的样式
- 类选择器
${reference('<p class="important"></p>')}  具有 important 类名的元素样式，类名前 + “.”，如 ${reference('.important{color: #fff}')}
- id 选择器
${reference('<p id="important"></p>')}  具有 important 类名的元素样式，id 名前 + “#”，如 ${reference('#important{color: #fff}')}
- 属性选择器
${reference('a[title]')} 匹配具有 title 属性的 a 链接如 ${reference('<a title="">链接</a>')}；
${reference('a[title=bbb]')} 匹配 title 属性值为 bbb 的 a 链接如 ${reference('<a title="aaa">链接</a>')}
- 子代选择器
${reference('div > a')} 匹配具有 div 标签的直接子元素 a， 如 ${reference('<div><a>匹配</a><p><a>隔着p不匹配</a></p></div>')}；
- 后代选择器
${reference('div a')} 匹配具有 div 标签的内的所有元素 a， 如 ${reference('<div><a>匹配</a><p><a>隔着p也匹配</a></p></div>')}；
- 相邻元素选择器
${reference('h1 + p {margin-top:50px;}')} 匹配 h1 标签**紧随其后**的 p 标签如 ${reference('<div><h1></h1><p>能匹配</p></div>')}
- 伪类 (Pseudo-classes)
如锚点（即 a 标签）伪类：${reference('a:link {color: #FF0000}')}意思是没访问过的链接呈现红色字体
${reference('a:visited {color: #00FF00}')} 访问过的链接呈现绿色字体
${reference('a:hover {color: #FF00FF}')} 鼠标移动链接上呈现洋红字体
${reference('a:active {color: #0000FF}')} 选定的链接上呈现蓝色字体
- 伪元素
${reference('p:first-line')} 段落标签内的第一行文字
${reference('h1:before')} 定义 h1 标签前面的内容，本身不占据网页空间。必须要有 content 定义。
${reference('h1:after')} 定义 h1 标签后面的内容，本身不占据网页空间。必须要有 content 定义。

[详情可点击](https://www.w3school.com.cn/css/css_pseudo_elements.asp) 深入学习伪元素。
`;