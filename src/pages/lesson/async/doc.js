import { reference } from '@/util';
import network from './network.png';
import request from './request.png';

export default {
  doc1: `
#### **从数据提交说起**

我们的生活经验里，肯定见过很多数据提交的网页，比如输入账号密码的登录表单，身份信息统计的表单等等。例如下面的一个表单：
  `,
  doc2: `
这样的表单结构类似下面这样（抛开样式不谈）：
  `,
  code1: `
<form>
  <div>
    <label for="username" title="用户名">用户名</label>
    <input type="text" id="username" value="" />
  </div>
  <div>
    <label for="password" title="密码">密码</label>
    <input type="password" id="password" value="" />
  </div>
  <label>
    <input id="remember" type="checkbox" value="" checked=""><span>记住我</span>
  </label>
  <button type="submit"><span>提 交</span></button>
</form>
`,
  doc3: `
  由于表单的原生提交方法过于简陋，交互体验很差，目前已经没有哪个优秀的平台还在使用了。这里简单提一提有个大概了解：以上面的标签为例，form 定义了一个表单域，包裹着所有的表单元素，每个表单元素上均有 id 属性，（IE 也支持 name 属性），当类型（type）为 submit 的按钮或 input 元素被点击的时候，页面填写的数据就会被提交到服务器。所以 form 标签需要定义提交的地址以及提交方式。例如：
  
${reference('<form action="http://www.nice.com" method="post">...</form>')}

意思是发起一个 post 请求，将数据提交到地址${reference('http://www.nice.com')}。请求方式还有 get、put、delete 等等。请求方式是人为区分的对数据操作的不同描述，没什么本质上的不同，所以很多开发者常常只用 get 获取数据、post 提交数据。不过为了规范性，建议对不同的请求方式进行区分，有越来越多的开发者开始重视这个问题了。另外，如果是上传文件，还要在 post 请求的 form 标签上定义 ${reference('enctype="multipart/form-data"')}属性。以上这种原生提交数据的方式，总会在提交完成后发生页面跳转，而且提交失败时开发者也无法优雅地捕捉处理错误。所以这块内容建议了解学习，毕竟一些现成的组件库已经有成熟的方案了。

### **ajax（ Asynchronous JavaScript and XML）**
上面提到的表单提交数据，其实就是用户通过浏览器与服务器进行的一次信息交换。如果我们可以不借助表单实现信息交换，那是不是就可以任意提交想提交的数据（而不必局限于页面的表单里有什么），也不用提交后刷新整个网页了？没错，**AJAX 最大的优点就是在不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容**。

以上述标签代码为例，我们提交数据就可以通过脚本来实现（假设提交数据的方法就叫 ajax）：
`,
  code2: `
window.onload = function () {
  // 这里刻意用了多种选择器，记得多加练习哦~
  document.getElementById('button[type=submit]').addEventListener('click', function () {
    let username = document.getElementById('username');
    let password = document.querySelector('input[type=password]');
    let remember = document.querySelector('#remember');
    // 组装数据对象，还可以加入表单之外的需要的值（如 type）。
    let data = {
      type: 'ajax',
      username: username,
      password: password,
      remember: remember
    };
    ajax(data); // ajax 是提交数据的方法
  }, false);
}`,
  doc4: `
这样提交数据显然更加舒适了，数据提交之前就能够对数据进行校验，在 ajax 方法内还可以做一些信息提示，错误处理等。那么 ajax 方法该怎么实现呢？
#### **XMLHttpRequest 对象**

老规矩，控制台先打印一下这个全局对象（结果返回了个函数）。那就打印这个对象的实例${reference('new XMLHttpRequest()')}吧！
> 老版本的 Internet Explorer 浏览器（IE5 和 IE6）使用的是 ActiveX 对象 ${reference('new ActiveXObject("Microsoft.XMLHTTP")')}，我们当然是选择【知道就好】，毕竟人生有限，早晚被淘汰的东西就让它赶紧淘汰吧。

这个对象实例上诸多方法我们结合代码拣重点讲解。发起一个请求的代码如下：
`,
  code3: `// 在谷歌浏览器中
function ajax(method, url) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function onReady() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };
  xhr.open(method || 'GET', url, true);
  xhr.send(null);
}`,
  doc5: `
上面封装了一个简单的 ajax 请求，${reference('xhr.onreadystatechange')} 方法监听请求的状态，只要有变化就会执行我们定义的 onReady 函数。网络请求的状态码（网上一搜一大堆，建议搜一下看看）多种多样，但是请求发送并返回成功的状态只有满足 ${reference('xhr.readyState === 4 && xhr.status === 200')}这个条件，${reference('xhr.responseText')}就是服务端返回的响应数据。

> 需要注意的是 open、send 的顺序。open 方法的第三个参数表示请求是否异步，前两个参数分别是请求方式和地址（与 form 标签上的 method、action 对应）。

#### **什么是异步**

之前所有的代码执行逻辑，全都是同步的。也就是说，代码自上而下执行，遇到循环就循环完成，再继续往后执行，一行逻辑也不会跳过去。同步容易引发的问题就是一个任务如果执行时间过长，页面就会“假死”，其他任务不能开始，只能等待同步任务完成。异步恰好相反，异步任务不会阻塞进程，它会在结果返回时再被调用，在这之前并不会影响后面同步代码的执行。例如在控制台执行：`,
  code4: `
console.log('同步代码开始');
setTimeout(function () {
 console.log('异步代码开始');
}, 10);

console.log('同步代码结束');`,
  doc6: `
10ms 之后执行的代码，并不影响“同步代码结束”的先行打印。言归正传，在前端领域，几乎没有使用同步请求的地方，因为网络交互总有时间间隔，我们不可能让用户的界面卡在那里等待接口响应。上面封装的 ajax 方法里，我们通过参数配置来给方法的使用者更多的选择：
`,
  code5: `
// 函数参数过多时，一般使用对象格式，不会受参数顺序影响，扩展性更好
function ajax(url, options) {
  options = options || {}; // 可以没有 options，默认使用空对象 
  let method = options.method || 'GET'; // 没有 options 时，默认使用 get 请求
  let async = 'async' in options ? options.async : true; // 有 options 时就用 options.async，否则就使用异步
  let data = options.data ? JSON.stringify(options.data) : null; // 将 data 参数补上，这是提交的数据
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function onReady() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };
  xhr.open(method, url, async);
  xhr.send(data);
}

// get 请求（带参数）
ajax('/api/menu/list?user=you&id=1');

// post 请求（带参数）
ajax('/api/menu/list', {
  method: 'POST',
  data: {
    user: 'you',
    id: 1
  }
});
`,
  doc7: `
下面就是发起请求测试了，把上面的代码贴到控制台并回车。然后切换到 Network 一栏：

![network!](${network})

显然请求已经发出去了，但是服务端没有定义这两个接口，所以返回 404 （常见的 http 状态码会在工作中逐渐了解）。点击一个请求，可以看到我们传递的参数（下图）。如果服务端存在这两个接口，恭喜你，数据已经提交上去了。

![request!](${request})

#### **回调函数**

请求发送成功是不是就完了呢？有时候是，但一般不会。例如返回结果的处理展示——一个获取数据的请求，拿到了数据是要把数据展示在页面上的。看上面的 ajax 函数，最后的响应是 ${reference('xhr.responseText')}，我们的处理方式是打印在了控制台，而控制台是程序员调试代码的地方，展示给用户才是我们真正要做的。其实控制台打印是一种处理方式，那我们把打印换成其他处理方式不就 OK 了吗？例如：
`,
  code6: `
function showData(response) {
  document.body.innerHTML = response;
}
  
function ajax(url, options) {
  options = options || {}; // 可以没有 options，默认使用空对象 
  let method = options.method || 'GET'; // 没有 options 时，默认使用 get 请求
  let async = 'async' in options ? options.async : true; // 有 options 时就用 options.async，否则就使用异步
  let data = options.data ? JSON.stringify(options.data) : null; // 将 data 参数补上，这是提交的数据
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function onReady() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      showData(xhr.responseText);
    }
  };
  xhr.open(method, url, async);
  xhr.send(data);
}  
`,
  doc8: `
上面的处理方式简单粗暴：直接将数据显示在 body 标签内。当然怎么处理数据是比较自由的，应该根据需求来定。现在的问题是，ajax 方法内只能固定调用 showData，对于不同的请求，肯定有不同的处理方式，把代码“写死了”肯定没得玩了。所以回调函数应运而生——将数据的处理方法也作为参数，传递给请求函数 ajax：
`,
  code7: ` 
function ajax(url, options) {
  options = options || {}; // 可以没有 options，默认使用空对象 
  let method = options.method || 'GET'; // 没有 options 时，默认使用 get 请求
  let async = 'async' in options ? options.async : true; // 有 options 时就用 options.async，否则就使用异步
  let data = options.data ? JSON.stringify(options.data) : null; // 将 data 参数补上，这是提交的数据
  let xhr = new XMLHttpRequest();
  
  let callback = options.callback; // 如果传递的回调函数 callback 不是一个函数类型，就把 callback 置为 console.log
  if (typeof callback !== 'function') {
    callback = console.log;
  }

  xhr.onreadystatechange = function onReady() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText); // 将数据作为参数来调用 callback，即：传进来什么方法就调用什么方法
    }
  };
  xhr.open(method, url, async);
  xhr.send(data);
}

// ajax-callback 的使用：

function createHTML(response) { // 会在 ajax 返回成功时执行（即 callback）
  let div = document.createElement('div');
  div.innerHTML = response;
  document.body.appendChild(div);
}

ajax('/api/menu/list?user=you&id=1', {
  callback: createHTML
});
`,
  doc9: `
有成功的回调，就有失败的回调，失败的回调其实是一样的逻辑，就交给同学们自己来实现了。

> 课后作业
实现一个 ajax 请求方法，要求有 onSuccess 和 onFail 两个回调处理器，分别处理请求的成功和失败逻辑。请求成功时，将数据放置在表单内。表单的代码为本节课开头的示例代码，响应数据假设为 ${reference("{ username: '张三', password: 'xyz', remember: true }")}。
`,
}