import { reference } from '@/util';

export const ifs = `
if (condition) {
  // condition 为真，则执行这里的代码
} else {
  // condition 为假，则执行这里的代码，可以没有 else 语句
}
`;

export const elseif = `
if (condition1) {
  // condition 为真，则执行这里的代码
} else if (condition2) {
  // condition 为假，则执行这里的代码
} else if (condition3) {
  // else if 的个数没有限制
} else {
  // else 语句也可以省略
}
`;

export const docString1 = `
#### **条件语句 if**

在生活中我们都会面临选择的问题，做出选择的依据是满足了某个条件，就做出相应的行为。所以选择是有条件判断的，很自然的，我们可以将这样的逻辑应用于代码逻辑控制：

> 假如……那么……否则……

> 直译成伪代码即： ${reference('if...then...else...')}

将省略的部分用逻辑补全，if 语句的写法就成了：
`;

export const docString2 = `
当然了，多个条件时， ${reference('else')} 后可以接着写 ${reference('if')}。
条件语句有一个分支满足时，就不会再执行其他分支的代码
`;

export const docString3 = `
#### **分支语句 switch**

如果针对**同一变量**的分支越来越多，代码充斥着 if-else 而变得难以维护时，我们还可以使用 switch 语句。这样代码的结构会更加清晰。其语法为：
`;

export const switchCase = `
// 假设根据 n 的值执行不同逻辑：
switch (n) {
  case 1:
    // 执行代码块 1
    break;
  case 2:
    // 执行代码块 2
    break;
  default:
    // 与 case 1 和 case 2 不同时执行的代码
    break;
}
`;

export const docString4 = `
> case 后面列出了 n 可能匹配的各种情况，如果均未匹配，则会执行 default 逻辑。

> break 表示匹配某分支后立即跳出当前 switch 语句，如果没有 break，即使匹配当前值，依旧会继续往后匹配。所以若非刻意为之，不要省略 break。
`;