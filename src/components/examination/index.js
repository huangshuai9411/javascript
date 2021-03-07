import practice from './practice';
import event from './event';

export default {
  if: {
    question: '使用 if 语句实现：你的代码考核成绩用变量 x 表示，当成绩达到 90 分时，就会得到一个不错的 offer，控制台输出“我被录用了”，如果成绩在 80~90 分之间（不包含）时，输出“我很优秀，再接再厉！”，两者都不满足时输出“很遗憾，我还需要更多的努力”。',
    code: `
if (x >= 90) {
  console.log("我被录用了");
} else if (x > 80) {
  console.log("我很优秀，再接再厉！");
} else {
  console.log("很遗憾，我还需要更多的努力");
}
`
  },
  switch: {
    question: '使用 switch 语句实现：用 today 表示今天是本周的第几天，today 为 1 时，打印“星期一”……today 为 7 时，打印“星期天”，如果输入的值不在 1 ~ 7 之间，打印“请输入 1 ~ 7 之间的整数”',
    code: `
switch (today) {
  case 1:
    console.log("星期一");
    break;
  case 2:
    console.log("星期二");
    break;
  case 3:
    console.log("星期三");
    break;
  case 4:
    console.log("星期四");
    break;
  case 5:
    console.log("星期五");
    break;
  case 6:
    console.log("星期六");
    break;
  case 7:
    console.log("星期天");
    break;
  default:
    console.log("请输入 1 ~ 7 之间的整数");
    break;
}
`,
  },
  for: {
    title: 'for 循环测试',
    question: '求和：使用 for 循环求出 1~1000 中的所有奇数的和并打印出来',
    code: `
let sum = 0;
for (let odd = 1; odd <= 1000; odd += 2) {
  sum += odd;
}
console.log(sum);
`
  },
  while: {
    title: 'while 循环测试',
    question: '求出 1~ 100 内所有偶数的平方的和。',
    code: `
let sum = 0, even = 2; // 也可以分开声明
while (even <= 100) {
  sum += even ** 2; // 没明白？马上回顾 综述 > Javascript > 操作符一节~
  even += 2;
}
console.log(sum);
`
  },
  doWhile: {
    title: 'do-while 循环测试',
    question: '初始化一个变量 variable 作为基数，如果该变量大于 50，则将该变量减半后的结果累加到基数上，如果每次减半后的结果依然大于 50，则继续减半并重复上述过程。最后输出基数。假设变量初始化为 1024。',
    code: `
let variable = 1024, sum = 0;
do {
  sum += variable;
  variable /= 2;
} while (variable > 50);
console.log(sum);
`
  },
  loop: {
    title: '循环 + 条件综合测试（不限制哪种循环方式）',
    question: '在 1~1000 范围内的整数中，统计满足是 3 的倍数或是 7 的倍数的所有数字的和',
    code: `
let sum = 0;
for (let number = 1; number <= 1000; number++) {
  if (number % 3 === 0 || number % 7 === 0) {
    sum += number;
  }
}
console.log(sum);
`
  },
  break: {
    title: '循环终止',
    question: '10000 以内的正整数中，找到<b>第一个</b>满足它的 5 次幂也在 10000 以内，但 6 次幂大于 10000 的数字并打印在控制台。',
    code: `
let number;
for (let cursor = 1; cursor < 10000; cursor++) {
  if (cursor ** 5 < 10000 && cursor ** 6 > 10000) {
    number = cursor;
    break;
  }
}
console.log(number);
`,
  },
  continue: {
    title: '循环 continue',
    question: '统计 1~1000 内的数字之和（包含两端），但是要掉排除 9 的倍数。',
    code: `
let sum = 0;
for (let number = 1; number <= 1000; number++) {
  if (number % 9 === 0) { // 这个条件一旦成立，就不会执行 if 之后的循环体了。
    continue;
  }
  sum += number;
}
console.log(sum);
`
  },
  function1: {
    title: '函数封装小测试 1',
    question: '输入一个自然数 n，求 n 的阶乘。写完后，调用函数打印出 15 的阶乘。',
    code: `
function factorial(n) {
  let result = 1;
  while (n > 0) {
    result *= n;
    n--;
  }
  return result;
}
console.log(factorial(15));
`
  },
  function2: {
    title: '函数封装小测试 2',
    question: '已知某高中高三一班的某次考试成绩（点击下方第一个按钮获取），①算出这次所有人各科成绩的总和，②全班数学成绩的标准差。成绩无效的(如“-”)按 0 计。<br />（提示：这是一道结合了条件分支、循环、函数、数组、对象知识点的综合题目，未来的题目均会刻意安排旧知识的回顾，以便加深记忆且不再提示所用到的知识点，请有意识地运用往期知识解决问题。）',
    data: `[
  { "name": "陈之和", "chinese": 92, "english": 100, "math": 89 }, 
  { "name": "董丽丽", "chinese": 92, "english": 86, "math": 85 },
  { "name": "江侬鲁", "chinese": 87, "english": 78, "math": 90 }, 
  { "name": "姜利黎", "chinese": 87, "english": 81, "math": 77 },
  { "name": "李朝霞", "chinese": 86, "english": "-", "math": 79 }, 
  { "name": "李思思", "chinese": 81, "english": 72, "math": 91 },
  { "name": "齐一贺", "chinese": 77, "english": 80, "math": 82 }, 
  { "name": "隋洋州", "chinese": 73, "english": 70, "math": 83 },
  { "name": "孙蒙蒙", "chinese": 74, "english": 76, "math": "-" }, 
  { "name": "王鸣嗣", "chinese": 61, "english": 63, "math": 68 },
  { "name": "信席樊", "chinese": 65, "english": 60, "math": 65 }, 
  { "name": "张盼盼", "chinese": 65, "english": 51, "math": 70 },
  { "name": "赵锷伐", "chinese": 74, "english": 59, "math": 72 }, 
  { "name": "赵淑迪", "chinese": 40, "english": 40, "math": 62 }
]`,
    code: `
// 这是公共方法，两个问题都用得到，顾名思义，返回有效成绩
function getValidScore(score) {
  if (typeof score === 'number') {
    return score;
  }
  // 函数中遇到 return 语句即结束，所以即使这里
  // 没有 else 语句，return 0 也相当于 else 逻辑
  return 0;
}

// ①
function sumUp(scores) {
  let sum = 0;
  // 一个分数是数字类型，则返回；否则返回 0 ，即不改变加和结果
  for (let i = 0; i < scores.length; i++) {
    let student = scores[i]; // 这是本次循环到的某名学生信息
    let totalScoreOfOneStudent = getValidScore(student.chinese) + getValidScore(student.english) + getValidScore(student.math);
    sum += totalScoreOfOneStudent; // 将一个学生的总成绩加入总分。
  }
  return sum;
}

// ② 标准差公式自行百度
function standardDeviationOfMath(scores) {
  let sumOfMath = 0, length = scores.length; // 学生总数存为 length 变量
  for (let i = 0; i < length; i++) {
    let mathScore = getValidScore(scores[i].math); // 这是本次循环到的某名学生的数学成绩有效值
    sumOfMath += mathScore;
  }
  let average = sumOfMath / length; // 平均值
  let sumOfSquares = 0; // 平方和初始值
  for (let i = 0; i < length; i++) {
    sumOfSquares += (average - getValidScore(scores[i].math)) ** 2;
  }
  return (sumOfSquares / length) ** 0.5;
}

// 测试打印：
let scores = [...]; // 测试数据那一坨数据贴过来
let sum = sumUp(scores);
let standardDeviation = standardDeviationOfMath(scores);

console.log('总分数：'，sum, ', 标准差：', standardDeviation);
`
  },
  ...practice,
  ...event
}