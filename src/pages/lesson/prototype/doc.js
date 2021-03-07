import { reference } from '@/util';
import proto from './proto.png';
import prototypes from './prototype.png';

export default {
  doc1: `
### **引子**

回顾数据类型一节，JS 中的数据类型有字符串（String）、数字（Number）、对象（Object）、布尔（Boolean）、null、undefined、符号（Symbol，比较特殊，不能使用 new 调用）、BigInt（比较特殊，不能使用 new 调用），对象可细分为数组（Array）、函数（Function）、object（Object）。除去 null、undefined，其他数据都有相应的构造函数，按照约定，构造函数均以大写首字母的事实规范来定义。利用构造函数初始化得到的结果，我们称之为实例。例如：
`,
  doc2: `
通常，声明一个对象的实例只需要调用它的构造函数。如 ${reference('let arr = new Array(1, 2, 3); let obj = new Object(); let f = new Function();...')}但是对于大多数内置对象（语言本身提供，并非用户自己自定义）而言，更好的创建实例方式是使用字面量形式，不仅仅是字面量代码更少更易读，也因为往往具有更快的运行速度，当然也有其他必要原因可以自行查阅（例如 new Boolean(false) 与 false 并不相等！，因为构造函数返回的都是包装对象，与简单值的真假性可能不一致）。除非字面量不能满足需求才考虑使用构造函数，例如基于变量创建正则表达式时。

了解到这里，我们开始切入主题。在控制台输入一个字面量对象 ${reference('{ key: 1}')} 并回车，展开返回值前面的折叠三角，看到 ${reference('__proto__')} 后再展开。

![__proto__](${proto})

有没有好奇过，为什么我们声明对象的时候只加入了 key 值，而生成的对象却有这么多“隐秘的东西”？这些内容来自哪里？我们已经知道，字面量 {} 声明对象的形式其实是代替构造函数 new Object() 声明的简化形式，循其本，我们不难推测实例上多的那些属性，肯定和 Object 有着密切的联系。好了，我们在控制台打印 ${reference('Object.prototype')} 看看有什么：

![prototype](${prototypes})

是不是很熟悉？在控制台回车下面这行代码将会印证你的想法，注意字面量对象不能直接使用“.”操作符，所以用小括号括起来（也可以先用变量保存对象再用“.”取值）。

> ${reference('({ key: 1}).__proto__ === Object.prototype')}

这行代码返回了${reference('true')}，推而广之，下面继续在控制台验证：

> ${reference('[].__proto__ === Array.prototype')}

> ${reference('"字符串".__proto__ === String.prototype')}

> ${reference('(123456).__proto__ === Number.prototype')}

> ${reference('new Boolean(false).__proto__ === Boolean.prototype')}

> ${reference('(function () {}).__proto__ === Function.prototype')}

> ......

无疑的，上面的表达式均为 ${reference('true')}。说明实例的 ${reference('__proto__')} 属性与构造函数的 ${reference('prototype')} 对象是一个东西。不过还有一个问题，这些数据类型的构造函数本质上也是一个函数（某种角度上也可以叫实例），那它们与函数构造器 ${reference('Function')} 满足上面的关系吗？下面动手验证：

> ${reference('Array.__proto__ === Function.prototype')}

> ${reference('String.__proto__ === Function.prototype')}

> ${reference('Number.__proto__ === Function.prototype')}

> ${reference('Boolean.__proto__ === Function.prototype')}

> ${reference('BigInt.__proto__ === Function.prototype')}

> ${reference('Symbol.__proto__ === Function.prototype')}

> ${reference('Object.__proto__ === Function.prototype')}

> ${reference('Function.__proto__ === Function.prototype')}

全都是 ${reference('true')} ！事情越来越有意思了，所有的构造函数${reference('__proto__')}属性均指向了函数构造器 ${reference('Function')} 的 ${reference('prototype')} 对象。这也不难理解，不管什么函数，只要是函数就该由函数的“祖宗”产生嘛。那是不是到这里就结束了呢？其实不然，${reference('Function.prototype')} 还不是最终的“大boss”。现在可以请出那句著名的格言了：**在 JS 中一切皆对象**。所以我们把 ${reference('Function.prototype')} 当做实例看待（即上面式子的左边），那么会有如下关系成立：

> ${reference('Function.prototype.__proto__ === Object.prototype')}

你一定很不甘心，世界的尽头是不是止步于 ${reference('Object.prototype')} 了？那就以 ${reference('Object.prototype')} 为实例，看看下面表达式的值：

> ${reference('Object.prototype.__proto__')}

看着熟悉的控制台，只剩下孤零零的一个——${reference('null')} 。看来宇宙万物，真的源于虚空……

### **原型链的内容，还没开始讲，就已经结束了**

总结一下：

- 实例的 ${reference('__proto__')} 属性指向构造函数的 ${reference('prototype')} 对象，把构造函数当做实例依然有这层关系成立。
- 所有的构造函数都是 ${reference('Function')} 的实例，${reference('Function.prototype')} 是 ${reference('Object')} 的实例。
- 回归主题，实例可以访问原型链上的方法，这也是原型链继承的本质。访问实例上存在的方法时不会到原型链上查找，除非实例上不存在某个方法，才会顺着原型链向上查找。

### **原型链继承**
我们借助一个例子梳理一下这条链路：
定义父类为 ${reference('function Person() {}')}，实例为 ${reference('let p = new Person();')}。则有：

> ${reference('p.__proto__ === Person.prototype;')}

> ${reference('Person.__proto__ === Function.prototype;')}

> ${reference('Function.__proto__ === Function.prototype;')}

> ${reference('Function.prototype.__proto__ === Object.prototype;')}

> ${reference('Object.prototype.__proto__ === null;')}

`,
  code1: ``,
}