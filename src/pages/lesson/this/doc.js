import { reference } from '@/util';

export default {
  doc1: `
#### **为什么要有 this**
上节课我们第一次碰到 this 这个关键字，初步了解了它的用法，** this 是随着执行环境动态变化的值，直觉上，this 与直接调用者密切相关**。这节课就来聊聊 this。

以上节的按钮点击事件为例：
`,
  code1: `
<button onclick="onClick()">按钮</button>
<div onclick="onClick()">这是一个普通容器，但是也绑定 onClick 事件</div>
<script>
  function onClick() {
    console.log(this);
  }
</script>
`,
  doc2: `
点击按钮打印 this，我们看到 this 指向按钮节点本身。而点击后面的 div 时打印的 this 指向 div 节点本身。所以同一个事件函数，绑到不同的元素上时，内部的 this 指向也是不同的。那 JS 语言这样的设计有什么意义呢？

假设没有 this，我们上面的代码只能这样写：
`,
  code2: `
<button onclick="onClickButton()">按钮</button>
<div onclick="onClickDiv()">这是一个普通容器，绑定 onClickDiv 事件</div>
<script>
  function onClickButton() {
    console.log(document.querySelector('button'));
  }
  function onClickDiv() {
    console.log(document.querySelector('div'));
  }
</script>
`,
  doc3: `
函数内部访问当前元素只能通过元素的选择器来获取，我们要声明多个事件函数（即使函数内部逻辑一样）。尤其是页面同种标签比较多的时候，获取元素会更加复杂，都要定义唯一的选择器。所以 this 的出现**使逻辑复用变得更容易**。

#### **this 的指向有什么规律**

下面的操作请同学们在控制台一起写，声明一个包含 name 属性和 say 方法的对象：
`,
  code3: `
let object = {
  name: 'Dog',
  say: function () {
    console.log(this.name);
  }
};
object.say();
`,
  doc4: `回车后看到控制台输出了 Dog。 object 调用自身的 say 方法，say 方法打印 this 上的 name 值 Dog，所以 say 方法里面的 this 指向 object，因为 object 对象中才有 name 值为 Dog。
  
升级版本：`,
code4: `
let object = {
  name: 'Dog',
  say: function () {
    console.log(this.name);
  }
};
let say = object.say;
say();
`,
  doc5: `
仅仅是保存了一下 say 方法，再执行却什么都没打印！其实打印是执行了的，只是打印的内容为空（注意有行空白）。也就是说访问 this.name 是没有值的，这时候 this 并不指向 object 了。Why？

其实这一次，代码执行到${reference('let say = object.say;')}以后，整体的逻辑等效于下面（已经脱离了 object）：
`,
code5: `
let say = function () {
  console.log(this.name);
};
say();
`,
  doc6: `所以你看，say 函数已经不知道是“谁”直接发起的调用了。**在非严格模式下，浏览器全局调用的函数中的 this 默认指向 window**（而 window 对象上没有设置 name 属性，在控制台打印个 this 看看是什么？），我们目前的代码就是非严格模式。如果我们在 say 执行前任意位置加一行代码${reference('window.name = "全局name";')}，这时候就能看到打印值“全局name”了。
#### **改变 this 的指向**
`,
code6: `
let object = {
  name: 'Dog',
  say: function () {
    console.log(this.name);
  }
};
let say = object.say.bind(object); // 这里加了 bind
say();
`,
  doc7: `
用新的变量保存 object.say 的同时增加 bind 后，又打印出了 Dog 。顾名思义，bind 就是绑定的意思，本质也是一个函数（所以能够调用执行，只不过这个方法是所有的 function 上自带的），bind 的第一个参数就是被绑定的对象。最终使得 say 方法中的 this 又指向了 object。因此，如果这行代码改成${reference('let say = object.say.bind(window);')}，那么打印的又将是 window 对象上的 name。

综上所述，下面的代码本身是不能正常打印的，如果要实现如期打印，该怎么办呢？
`,
code7: `
let object1 = {
  name: 'Dog',
  say: function () {
    console.log(this.name);
  }
};
let object2 = {
  name: 'Cat'
};
// 要求使用 object1.say 方法打印 object2.name
`,
  doc8: `
object2 上并没有 say 方法，${reference('object2.say()')} 肯定是报错的。不过结合前面的内容，我们可以改变 ${reference('object1.say')} 中的 this 指向 object2，不就可以了吗？如下：
`,
code8: `
let object1 = {
  name: 'Dog',
  say: function () {
    console.log(this.name);
  }
};
let object2 = {
  name: 'Cat'
};
let say = object1.say.bind(object2);
say();
`,
  doc9: `
是不是打印了 Cat ？如果没有什么疑问，我们继续。上面的 say 方法总要在 bind 之后手动调用，我们可不可以改变 this 指向的同时就调用呢？可以的，**call、apply** 登场~
`,
code9: `
let object1 = {
  name: 'Dog',
  say: function () {
    console.log(this.name);
  }
};
let object2 = {
  name: 'Cat'
};
object1.say.call(object2);
object1.say.apply(object2);
`,
  doc10: `
继续精简，我们既然能改变 this 的指向达到 object2 不定义 say 方法也能使用 say 方法、从而简化 object2 代码的目的，同样也能将 say 方法从 object1 上拿掉，像这样：
`,
code10: `
function say() {
  console.log(this.name);
}
let object1 = { name: 'Dog' },
    object2 = { name: 'Cat' };
say.call(object1);
say.apply(object2);
`,
  doc11: `最后一次升级。如果 say 方法执行需要传参呢？参数该怎么通过 bind，call，apply 交给 say 去执行？比如下面的 say 方法有两个参数：`,
  code11: `
function say(prefix, suffix) {
  console.log(prefix + this.name + suffix);
}
  `,
  doc12: `在这里，bind，call，apply 的参数格式是有一点差异的，如下`,
  code12: `
function say(prefix, suffix) {
  console.log(prefix + this.name + suffix);
}
let object = { name: 'Dog' };
say.call(object, 'Hi, Mr ', ', are you ok ?');
say.apply(object, ['Hi, Mr ', ', are you ok ?']);

// bind 并不会立即执行，而是返回一个函数等待调用，所以参数可以在绑定时和执行时两处传递。
// 1 都在执行时传递
let bindSay = say.bind(object);
bindSay('Hi, Mr ', ', are you ok ?');

// 2 均传递一部分
let bindSay = say.bind(object, 'Hi, Mr ');
bindSay(', are you ok ?');

// 3 都在绑定时传递
let bindSay = say.bind(object, 'Hi, Mr ', ', are you ok ?');
bindSay();
`,
  doc13: `总结：

- 三者第一个参数都是 this 新的指向，后续参数对应于 say 方法定义的参数。
- call 和 apply 都是绑定的同时调用方法，前者接受参数列表，后者接收一个数组作为参数。
- bind 绑定后返回一个新函数，参数也是列表形式，只不过可以分开传递，只要保证执行时参数总数与 say 定义时的数量一致即可正常运行。

> 改变 this 指向也可以发生在构造函数中，暂不需要深究，掌握本节内容即可。
`
}