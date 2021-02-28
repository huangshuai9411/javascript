import { reference } from '@/util';

const docString1 = `
> **循环是编程语言中最重要的功能之一，能够在短时间内处理大量重复的工作，因此我们需要十分重视这部分内容的学习**。

下面是 JS 中的几种循环语句，无论哪种循环，都要有退出循环的条件。我们以求和 1~100 之间的整数为例讲述几种循环的实现（${reference('index > 100')} 时为退出循环的条件）。
### **for 循环（for-in 循环暂时不讲，有兴趣可自行搜索）**

`;

const docString2 = `
> for 循环的结构为 ${reference('for (语句1；语句2；语句3) { 循环体 }')}，语句1在**循环开始前**执行，且**只执行一次**；语句2为**进入循环**的条件，每次循环开始前**都要执行一次**，其计算结果为真时继续循环，否则循环结束；语句3在**每轮循环结束时执行一次**。所以一般情况下我们会在语句1中声明索引的起始值，语句3用来更新索引。

### **while 循环**
`;

const docString3 = `
> while 循环体外只有一个条件判断，我们需要自己单独维护索引的声明和更新。

### **do-while 循环**

`;

const docString4 = `
do-while 循环与 while 循环类似，不同的是它的条件判断在循环体后面，即使条件为 false 它的循环体也会执行一次。

> 趁热打铁，模仿上面的语法，请在自己的编辑器上完成本节课的题目，然后把代码粘贴到控制台，回车运行，检测结果。
`;

const breakLoop =  `
### **循环内的 break**

我们在上节课已经见过 break 这个词了。顾名思义，break 有打断终止的意思，在循环体中遇到 break 就会立即跳出当前循环，执行当前循环后面的代码。
这里不多讲，直接出题：
`;

const docString5 = `
### **continue**

跳过本次循环，继续下一轮循环。比如我们统计时，某些情况不需要统计，但是不需要结束循环，就可以使用 continue。无需多言，直接小测试。
`;

export const loop = {
  docString1,
  docString2,
  docString3,
  docString4,
  breakLoop,
  docString5,
}


export const codes = {
  for: `
let total = 0;
for (let index = 1; index <= 100; index++) {
  total = total + index;  // 或者 total += index;
}
console.log(total);
`,
  while: `
let total = 0;
let index = 1;
while (index <= 100) {
  total = total + index; // 或者 total += index;
  index++;
}
console.log(total);
`,
  doWhile: `
let total = 0;
let index = 1;
do {
  total = total + index; // 或者 total += index;
  index++;
} while (index <= 100);
console.log(total);
`
};
