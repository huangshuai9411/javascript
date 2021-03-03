import { reference } from '@/util';
import { codes } from '../loop/doc';

const introduce1 = `
#### **函数简介**

在数学中，函数是因变量 f(x) 与自变量 x 的一组映射关系，多元函数也一样的道理。
编程中的函数也有类似的性质，简单地说，函数是方便逻辑复用进行的代码封装（类比数学函数表达式），其返回值可类比输出值 f(x)。
不同的是，程序中的函数可以没有返回值，纯粹只有逻辑封装，不仅参数作为输入，函数能访问到的所在的环境的值都能作为输入。所以函数是能够对环境产生副作用的（比如修改全局的对象，访问除参数之外的值等）。我们把不产生副作用的函数称为**纯函数**。纯函数的概念和用途可自行了解，这里不作深入探讨。

言归正传，我们接着考虑上节课的问题**求和 1~100 之间的整数**，源码如下
`;

const introduce2 = `
现在需求增加了，我们要接着算出 1~1000 中的整数和， 1~10000 中的整数和，...难道我们要把上面的代码写无数遍吗？显然不可能！
那么，函数来了~声明一个求和函数（**关键字 function + 函数名 + 参数 + 逻辑体(return + 结果)**）：
`;

const codeString1 = `
function sumUp(end) {
  let total = 0;
  for (let index = 1; index <= end; index++) {
    total = total + index;  // 或者 total += index;
  }
  return total;
}
console.log(sumUp(1000)); // 1~1000 的整数和
console.log(sumUp(10000)); // 1~10000 的整数和
...
`;

const introduce3 = `
函数的调用通过**函数名 + (参数列表)**。
如果希望求的是从 start 到 end 之间的整数和呢？（start，end 均为整数，且 start < end）;
`;

const codeString2 = `
function sumUp(start, end) {
  let total = 0;
  for (let index = start; index <= end; index++) {
    total += index;
  }
  return total;
}
console.log(sumUp(50, 1000)); // 50~1000 的整数和
console.log(sumUp(8, 54)); // 8~54 的整数和
...
`;

const introduce4 = `
相信聪明的同学已经注意到了，当我们希望某些因素可变的时候，就把这些因素定义为**函数的参数**。代码区域使用这些参数进行**“占位”**，函数调用时，按照函数**定义的参数**顺序传入**实际参数**即可。函数**定义的参数**如 start 和 end 称为**形参**，调用时传递的参数如 **8** 和 **54** 称为**实参**。**形参**和**实参**是按照顺序一一对应的。

总结一些函数的特征：

- 函数执行结果通过 return 返回，函数一旦 return 就等于执行完毕，后面的代码将不再执行（即使循环还没完成也会终止）；
- 对于变量应该先声明后使用，而函数存在提升，使用在前声明在后也是允许的。
- 用声明语句创建函数时，应当遵循变量的先声明后使用规则：${reference('let sum = function () {...};')}
- 函数可以在内部调用自身，这样的函数方式成为**递归函数**，递归函数必须要有结束条件，否则极易陷入死循环。

来用函数解决两个小问题吧！
`;

const introduce5 = `

1. 如果你以前没有代码基础，但能对之前所有代码测试小题目都能又快又简洁地实现出来，那么恭喜你，你的学习效率和逻辑能力真的很棒！请继续往后进行。
- 没有第一时间做出来，但能看懂参考答案的小伙伴也不必焦虑，因为你的表现还算正常，只是缺少练习。
- 对于一头雾水的小伙伴，需要仔细理解教程中的每一句话，不要忽略每一个字，有任何疑问就应当立马停下来。建议回到 **综述 > Javascript > 数据类型** 处重新学习，否则后面会很被动。等再次到这个位置时，认真对待下面的练习题目。

对于前两类同学，这里准备了一些题目一定要好好做（[开始练习](/lesson/practice)）。
`;

export default {
  introduce1,
  sumOf100: codes.for,
  introduce2,
  codeString1,
  introduce3,
  codeString2,
  introduce4,
  introduce5
};