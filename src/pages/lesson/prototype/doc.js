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

了解了这一层，我们以实际的代码剖析一下原型链的继承关系（一起在控制台实践）。
`,
  code1: `
// 下面的代码 you、he 是 Person 的实例，打印实例的 name 和 age 都是没问题的。
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let you = new Person('张三', 24);
let he = new Person('李四', 28);
console.log(you.name, you.age);
console.log(he.name, he.age);
`,
  doc3: `
- 开始升级：我希望实例能通过方法“喊出”自己的名字，例如执行 ${reference('you.say()')} 能打印 ${reference('you.name')}；${reference('he.say()')} 能打印 ${reference('he.name')}。
显然不会有人在实例上都声明一个 say 方法，不仅仅是啰嗦，而且再 new 一个实例依然不满足需求。说到继承，自然是把一些方法放到父类，子类或实例均能访问的地方。那像下面这样行吗？
`,
  code2: `
Person.say = function () {
  console.log(this.name);
}`,
  doc4: `
试试确实不行。我们结合上一部分内容来思考就很容易得到答案：子类/实例上没有的方法，会顺着**原型链**向上查找，这里的原型链是

> ${reference('you.__proto__ === Person.prototype;')}

> ${reference('he.__proto__ === Person.prototype;')}

所以我们访问 ${reference('you.say')} 时，会查找到 ${reference('Person.prototype.say;')} 而非 ${reference('Person.say')}！所以代码有了：
`,
  code3: `
Person.prototype.say = function () {
  console.log(this.name);
}`,
  doc5: `
终于，${reference('you.say()')} 打印了“张三”，${reference('he.say()')} 打印了“李四”。补充一点，${reference('Person.say')} 方法的定义并非没用，只不过这样定义的方法属于类的**静态方法**，实例是不能访问的，只能通过 ${reference('Person.say()')} 来调用。并且，该方法内也是不需要使用 **this** 的。想想为什么？

- 终极版本：

父类 Person 直接实例化后，得到了 you 、he 俩对象。如果我们不去实例化 Person，而是再创建一个子类 Superman 呢？先明确一下继承的关系：

> 
1. 子类没有的方法可以来自父类，因此父类原型链得定义需要继承的方法。
2. 以父类的实例作为子类原型对象，以便子类实例能顺着原型链访问父类的方法。
3. 子类也是子类实例的构造器，即满足 ${reference('new Superman().constructor === Superman')}
4. 子类也可以有自己的方法，像父类那样去定义。

我们将上面的关系用代码表述如下（注意这里均为赋值，不是相等判断。赋值后判断时不就相等了嘛）：

> 
1. ${reference('Person.prototype.something = ...')}
2. ${reference('Superman.prototype =  new Person()')}
3. ${reference('Superman.prototype.constructor = Superman')}
4. ${reference('Superman.prototype.fly = function () { 自己定义，略 }')}

完整代码如下：
`,
  code4: `
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function () {
  console.log(this.name);
}
function Superman(skill) {
  this.skill = skill;
}
Superman.prototype = new Person();
Superman.prototype.constructor = Superman;
Superman.prototype.fly = function () {
  console.log(this.skill);
}

let superman = new Superman('超人', 44, 'flying');
superman.say();
superman.fly();
`,
  doc6: `
细心的同学已经发现问题了，这句代码 ${reference('Superman.prototype =  new Person()')} 调用 Person 并没有传参，所以 superman 原型链上虽然有 name，age 属性，但是都为 undefined，且这些属性不再实例上，这意味着会被共享。即：

> ${reference("superman.name === undefined; 'name' in superman === true")}

问题就出在这样的继承方式我们无法实现对 Person 实例化时进行传参，因为参数只有在 Superman 实例化时才能得知具体顺序，无法提前实例化。
那是不是可以这样改一下 Superman 呢？
`,
  code5: `
...
// Superman 的构造函数中再次调用 Person 构造函数，以便对属性进行赋值。
function Superman(name, age, skill) {
  Person.call(this, name, age);
  this.skill = skill;
}
...
`,
  doc7: `
没错，这样是可行的，只不过父类构造函数被调用了两次。第一次在指定子类的原型对象时，继承父类的方法；第二次就是子类实例化时，为了获得属性。不过这次解决了属性不在实例上的问题，了解到这儿，我们就可以学习目前最有效的继承方式了：
`,
  code6: `
function inheritPrototype (child, parent) {
    // 基于父类的原型对象创建，第三步作为子类的原型对象（也就是原型链上方法的继承）
　　let prototype = Object(parent.prototype);
    // 结合下一行来看，就是将子类作为子类实例的构造器。满足 "实例 instanceof 子类 === true" 的关系
　　prototype.constructor = child;
    // 结合第一步来看，指定子类的原型对象
　　child.prototype = prototype;
}
function Person (name, age) {
　　this.name = name;
　　this.age = age;
}
Person.prototype.say = function () {
  console.log(this.name);
}
function Superman (name, age, skill) {
  Person.call(this, name, age);
　this.skill = skill;
}
inheritPrototype(Superman, Person);
Superman.prototype.fly = function () {
  console.log(this.skill);
}

let superman = new Superman('我是超人', 18, '我能飞');
`,
  doc8: `
> 终于搞定。但有个注意点，${reference('inheritPrototype')} 方法必须在 ${reference('Superman.prototype.fly')} 定义之前调用，因为 ${reference('Superman.prototype')} 是在 ${reference('inheritPrototype')} 方法内生成并指定的，如果顺序反了 ${reference('Superman.prototype.xxx')} 将会被覆盖掉！

继承还有其他很多方式可以自己单独了解，本节课的内容其实就是**原型链继承**和**寄生组合式继承**，后者是目前比较完美的基于类型继承的最有效方式。初学者暂时不必过多纠结，等工作了一年半载后一定要再来了解。
`
}