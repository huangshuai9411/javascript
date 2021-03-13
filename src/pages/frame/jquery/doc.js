import { template, reference as r } from '@/util';

const doc1 = `
#### **JQuery 的由来**

${r('JQuery')} 是一个非常简单的 JS 库。在 JS 在 web 端兴起的时候，${r('JQuery')}简直就是独霸武林的存在，它极大地简化了 DOM 的操作。还记得[课程 > 事件](/lesson/event)一节的内容吗？如果没有${r('JQuery')}，我们实现 ${r('addEventListener')}绑定事件的代码是这样的（源码摘录如下）：
`;
const code1 = template(`
    <button>这是按钮1</button>
    <button>这是按钮2</button>
    <button>这是按钮3</button>
    <button>这是按钮4</button>
    <script type="text/javascript">
      window.onload = function () {
        let buttons = document.querySelectorAll('button');
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].addEventListener('click', function onClick(e) {
            console.log('onClick 中 this 和事件源相等吗？', this === e.target);
            console.log('onClick 中 this === 当前按钮吗？', this === buttons[i]);
            this.style.backgroundColor = 'grey'; // 背景色置灰
            this.style.color = '#00ff00'; // 文字变色
            this.style.width = '200px'; // 设置宽
            this.style.height = '50px'; // 设置高
            setTimeout(function anonymous() {
              e.target.innerHTML += ', 2s 后按钮追加的文本';
              console.log('anonymous 中 this 和 事件源相等吗？', this === e.target);
              console.log('anonymous 中 this === 当前按钮吗？', this === buttons[i]);
            }, 2000)
          }, false);
        }
      }
    </script>`);
const doc2 = `
可自从有了 ${r('JQuery')}，一切变得更简单了。一样的页面，代码会是这样（在使用前必须先引入jquery，这里使用的是官网地址，也可以下载到本地）：
`;
const code2 = template(`
    <button>这是按钮1</button>
    <button>这是按钮2</button>
    <button>这是按钮3</button>
    <button>这是按钮4</button>
    <script src="https://lib.baomitu.com/jquery/3.6.0/jquery.js"></script>
    <--这里是HTML文档中的注释，与脚本里的注释有区别
    如果下载jquery到本地，文件名为jquery.js且与html文件在同一目录，那么这样引入：
    <script src="./jquery.js"></script>
    -->
    <script type="text/javascript">
      $(document).ready(function () {
        $('button').on('click', function (e) { // on + 事件类型形式
          $(this).css('backgroundColor', 'grey') // 可链式调用
            .css('color', '#00ff00')
            .css('width', '200px')
            .css('height', '50px');

          setTimeout(function () {
            const html = $(e.target).html();
            $(e.target).html(html + ', 2s 后按钮追加的文本');
          }, 2000);
        });
      });
    </script>`);
const doc3 = `或者更简单点：`;
const code3 = template(`
    <button>这是按钮1</button>
    <button>这是按钮2</button>
    <button>这是按钮3</button>
    <button>这是按钮4</button>
    <script type="text/javascript">
      $(function () {
        $('button').click(function (e) { // 直接使用相应的事件方法
          $(this).css({ // 直接使用对象参数一次设定
            backgroundColor: 'grey',
            color: '#00ff00',
            width: '200px',
            height: '50px',
          });

          setTimeout(function () {
            const htmlString = $(e.target).html(); // 没传参表示获取
            $(e.target).html(htmlString + ', 2s 后按钮追加的文本'); // 传参表示设置
          }, 2000);
        });
      });
    </script>`);
const doc4 = `
新建HTML文件并贴入${r('JQuery')}版本的代码我们发现执行结果是一样的。下面我们从${r('$')}符号开始，浅析一下${r('JQuery')}的执行逻辑。如果你掌握了这些原理，你也可以实现一套自己的${r('JQuery')}。

> 首先我们注意到，$ 是一个能全局访问的函数，而且是在标签 ${r('<script src="https://lib.baomitu.com/jquery/3.6.0/jquery.js"></script>')}中引入的。那么引入的脚本代码中，应该有类似这样的代码：

> ${r('window.$ = function $() {...}')}

> 这样，在全局环境里就能访问 $ 了。

${r('$')}函数的参数支持的选择器与我们使用的 CSS 选择器是一致的。${r('$(selector)')} 返回的是一个汇集了各种操作方法的对象，因此能够继续使用点操作符执行后续逻辑。我们来简单实现上面的 jquery 选择器和添加事件的功能：
`;
const code4 = `
function $(selector) {
  if (typeof selector === 'string' || selector instanceof HTMLElement) { // 这里省略了字符串选择器合法性的校验
    if (selector instanceof HTMLElement) {
      return $.wraper(selector);
    }
    // 得到所有匹配的元素集合，可能匹配为空
    const selectors = document.querySelectorAll(selector);

    return $.wraper(selectors);
  }
  // 其他格式的参数比如函数不走选择器的逻辑。
}

$.addEvent = wraperSelectors => {
  // 添加点击事件
  wraperSelectors.click = function (clickEvent) {
    if (wraperSelectors.length) {
      wraperSelectors.forEach(node => {
        node.addEventListener('click', clickEvent, false);
        // 事实上，不同浏览器的绑定事件有差异，jquery 源码是有做兼容性处理的，这里学习原理，暂不处理兼容性
      });
    }
        
    return wraperSelectors; // 保证链式调用，每个方法执行完后均再次返回包装对象。
  };
  // 添加修改样式的 css 方法
  wraperSelectors.css = function (arg0, arg1) { // 参数可能是两个字符串，也可能是一个对象
    if (wraperSelectors.length) {
      if (typeof arg0 === 'string' && typeof arg1 === 'string') {
        wraperSelectors.forEach(node => {
          node.style[arg0] = arg1;
        });
      }
      if (typeof arg0 === 'object') { // 第一个参数是对象且不是 null
        Object.entries(arg0).forEach(cssKeyValue => {
          // cssKeyValue 的结构是 [key, value] 的格式，例如 ['color', '#fff']，因此可以多次调用第一种形式的设置方法
          wraperSelectors.css(...cssKeyValue);
        });
      }
    }
    return wraperSelectors; // 保证链式调用，每个方法执行完后均再次返回包装对象。
  };
  return wraperSelectors;
}

$.wraper = res => {
  let nodeList = []; // 没找到元素时，返回空数组，方便使用数组的方法处理
  if (res instanceof HTMLElement) {
    nodeList = [res];
  } else if (res) { // 否则视为匹配了一个列表
    nodeList = [...res];
  }
  return $.addEvent(nodeList); // 将添加了事件和方法的列表返回
}

$('button').click(function (e) { // 直接使用相应的事件方法
  $(e.target).css({ // 直接使用对象参数一次设定
    backgroundColor: 'grey',
    color: '#00ff00',
    width: '200px',
    height: '50px',
  });
});
`;

const doc5 = `
一个极简的具备 **选择器 + 点击事件 + css 操作** 的 jquery 就完成了，可以复制到自己的代码中试试。

> 其实说白了，jquery 就是一个功能齐全的操作 dom 的函数集合，将 dom 操作的很多原生接口封装在一个 $ 函数内，使我们不再写重复冗长的逻辑。所以这个 JS 库作为初学者应当熟练运用，熟记各种方法。[学习地址](https://www.runoob.com/jquery/jquery-tutorial.html)
`;

export default {
  doc1,
  code1,
  doc2,
  code2,
  doc3,
  code3,
  doc4,
  code4,
  doc5,
}