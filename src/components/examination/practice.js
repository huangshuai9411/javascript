export default {
  practice0: {
    title: '数组的操作练习',
    question: `<br />1. 找出数组（点击下面的按钮获取）中所有奇数，并返回一个所有包含奇数的数组。<br />
2. 将数组中的元素按照从小到大的顺序进行排序，返回排好顺序的新数组（提示：依次找到原数组中最小（或最大）的元素并“搬运”到结果列表中）。<br />
3. 将数组按照从大到小的顺序排序。
`,
    data: `
[2, 58, 13, 97, 13, 50, 96, 24, 19, 42, 95, 37, 26, 95, 67, 61, 41, 3, 22, 89, 55, 53, 44, 76, 2, 13, 86, 89, 29, 0, 36, 24, 47, 51, 42, 34, 7, 74, 37, 73]
`,
    code: `
// 1.
function getOddList(arr) {
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      odd.push(arr[i]);
    }
  }
  return odd;
}
// 或者
function getOddList(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      arr.splice(i, 1); // 只删除元素
// 为什么执行这里时 i 不递增呢？因为数组缩短了，
// 下次还以索引 i 访问元素时就已经是下一个元素了
    } else {
      i++;
    }
  }
  return arr;
}

// 2.
function ascendingOrder(arr) {
  let result = [];
  while (arr.length > 0) {
    let minimum = arr[0]; // 暂以第一个值为最小值
    let minIndex = 0; // 最小值的位置
    for (let i = 1; i < arr.length; i++) {
      if (minimum > arr[i]) {
      // 如果 for 循环中有比 minimum 还小的，则更新 minimum 和 minIndex
        minimum = arr[i];
        minIndex = i;
      }
    }
    // for 循环结束，minimum 一定是最小值
    result.push(minimum);
    arr.splice(minIndex, 1); // 将当次最小值移除掉，不再参与下一轮 for 循环的比较
  }
  return result;
}
// console.log(ascendingOrder([5, 8, 9, 2, 0, 7]));

// 3.
function descendingOrder(arr) {
  return ascendingOrder(arr).reverse();
}
// 哈哈意不意外？
`
  },
  practice1: {
    title: '双重循环练习',
    question: '有一个二维数组（数组元素的类型也是数组）作为输入，实现一个函数，能判断出输入的数组中是否存在小于 0 的值，输出布尔值作为结果',
    data: `[
  [1, 2, 3, 4, 5, 6, 2],
  [5, 22, 9, 9, 15, 16, 21],
  [4, 4, 3, 7, 20, 6, 2],
  [34, 42, 30, 17, -5, 6, 24],
  [1, 5, 4, 34]
]`,
    code: `
function hasNegative(list) {
  for(let i = 0; i < list.length; i++) {
    let array = list[i];
    for(let j = 0; j < array.length; j++) {
      if (array[j] < 0) {
        return true;
      }
    }
  }
  return false;
}

console.log(hasNegative(array));
`
  },
  practice2: {
    title: '算一下多少个闰年',
    question: '通常四年一闰，但是对于整百的年份必须能被 400 整除才是闰年。那么请问 1879 年到 2021 年（不含后者）之间有多少个闰年呢？',
    code: `
// start < end;
function leapYears(start, end) {
  let count = 0;
  while (start < end) {
    if (start % 100 === 0) {
      if (start % 400 === 0) {
        count++;
      }
    } else if (start % 4 === 0) {
      count++;
    }
    start++;
  }
  return count;
}

console.log(leapYears(1879, 2021));
`
  },
  practice3: {
    title: '斐波那契数列——递归',
    question: '指的是这样一个数列：0、1、1、2、3、5、8、13、21、34、……在数学上，斐波那契数列以如下被以递推的方法定义：F(0) = 0，F(1) = 1, F(n) = F(n - 1) + F(n - 2)（n ≥ 2，n ∈ N*）。即：每一项均等于前两项的和。求出第 25 项（把 0 视为第 0 项）。',
    code: `
// n 为自然数。
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(25));
`
  },
  practice4: {
    title: '数组列表处理',
    question: '我们知道数组通过索引访问每一项，如果要修改数组元素，也可以通过索引。比如<br /><code>let ary = [1, 2, 3]; ary[1] = "修改了";<br /><br />则打印 ary 结果：[1, "修改了", 3]</code><br />请将列表<code>[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]</code>中每一项扩大为原来的 2 倍并输出。',
    code: `
function transform(ary) {
  for (let i = 0; i < ary.length; i++) {
    ary[i] = ary[i] * 2;
  }
  return ary;
}
  
console.log(transform([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]));
`
  },
  practice5: {
    title: '求两个列表的交集',
    question: '有两个数组的元素可能会存在一样的值，求出所有一样的值，如果没有交集则返回 []。向数组中添加元素可以使用数组的 push 方法：如 let a = [0]; a.push(2); 则 console.log(a); => [0, 2]',
    code: `
function intersection(ary1, ary2) {
  let list = [];
  for (let i = 0; i < ary1.length; i++) {
    for (let j = 0; j < ary2.length; j++) {
      if (ary2[j] === ary1[i]) {
        list.push(ary2[j]);
      }
    }
  }
  return list;
}

// 自行造数据测试
`,
  },
  practice6: {
    title: '递归求 n 的阶乘',
    question: '输入一个正整数 n，求 n 的阶乘。之前讲过的循环方式可以回顾，但是这次要用递归来实现。',
    code: `
function recursionFactorial(n) {
  if (n <= 2) { // 结束递归的条件
    return n;
  }
// 在数学上，还记得 n! = n * (n - 1)! 吗？
  return n * recursionFactorial(n - 1);
}
// 测试 10!
console.log(recursionFactorial(10));
`
  },
  practice6: {
    title: '求质数',
    question: '判断一个正整数是不是质数，若是，返回 true，否则返回 false',
    code: `
// 不必关心输入是不是合理数字，目前只用关注核心逻辑
function isPrimeNumber(n) {
  for (let i = 2; i <= n / 2; i++) { // 想一下，为何不从 1 开始？超过 n 一半后还用继续尝试吗？
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
// 解释：如果循环能进行到 n / 2 还未结束，说明之前一直没有小于 n / 2 的因数存在
// 如果大于 n / 2 的区间存在因数 x，那么一定存在与 x 相乘等于 n 的因数 y，且 y 处于 2 ~ n / 2 之间。
`
  },
  practice7: {
    title: '分解质因数',
    question: '给出一个数字 n，将其分解为若干个质数相乘的形式，返回包含所有质因数的数组',
    code: `
function qualityFactor(n) {
  let result = [];
  let start = 2; // 从最小的质数 2 开始
  while (start <= n) {
    if (n % start === 0) {
// start 是 n 的因数时，n 缩小 start 倍，继续进行，因为同一个因数可以存在多次
      n /= start;
      result.push(start);
    } else { // start 不是 n 的因数时，递增 start 再接着判断
      start++;
    }
  }
  return result;
}

// 测试略
`
  },
  practice8: {
    title: '今天是今年的第几天',
    question: `已知获取今年的年份通过方法<code>let year = new Date().getFullYear()</code>，<br />
获取今天几月通过方法<code>let month = new Date().getMonth() + 1</code>，<br />
获取今天几号通过方法<code>let day = new Date().getDate()</code>，<br />
那么今天是今年的第几天呢？
`,
    code: `
function isLeapYear(year) {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}
function whichDays(year, month, day) {
  year = year || new Date().getFullYear(); // 如果没有传则表示今年
  month = month || new Date().getMonth() + 1; // 如果没有传则表示本月
  day = day || new Date().getDate(); // 如果没有传则表示今天

  let FebDays = 28; // 二月默认平年 28 天
  if (isLeapYear(year)) { // 闰年则多一天
    FebDays++;
  }
  switch (month) {
    case 1:
      return day;
    case 2:
      return 31 + day; // 一月 + 二月的日期
    case 3:
      return 31 + FebDays + day; // 一月 + 二月 + 三月的日期
    case 4:
      return 31 * 2 + FebDays + day; // 一三月 + 二月 + 四月的日期
    case 5:
      return 31 * 2 + 30 + FebDays + day;
    case 6:
      return 31 * 3 + 30 + FebDays + day;
    case 7:
      return 31 * 3 + 30 * 2 + FebDays + day;
    case 8:
      return 31 * 4 + 30 * 2 + FebDays + day;
    case 9:
      return 31 * 5 + 30 * 2 + FebDays + day;
    case 10:
      return 31 * 5 + 30 * 3 + FebDays + day;
    case 11:
      return 31 * 6 + 30 * 3 + FebDays + day;
    case 12:
      return 31 * 6 + 30 * 4 + FebDays + day;
  }
}

console.log(whichDays()); // 这里并没有传参，所以会返回今年本月今天的信息
`
  },
  practice9: {
    title: '大综合：算一下自己的“日龄”吧',
    question: '获取年月日的方式上题已讲过，算一下自己出生到今天，总共经历了多少天？参数为自己的出生年月日。',
    code: `
function howManyDays(birthYear, birthMonth, birthday) {
// 接上题，用前面的方法算出自己出生在当年的第几天：
  let thatYearDays = whichDays(birthYear, birthMonth, birthday);
// 不传参时，得出今天是今年的第几天：
  let thisYearDays = whichDays();
// 以下思路为计算出生日离当年年底的天数，出生在闰年的 2 月份之前的要考虑多一天
  let diff = 365 - thatYearDays;
  if (isLeapYear(birthYear) && birthMonth <= 2 && birthday < 29) {
// 出生在闰年的2月29日与出生在平年的2月28日，当年的12月31日拥有同样的日龄（都是3月1日起算）
// 所以必须出生在闰2月29日前才多此一天。
    diff++;
  }
// 第三道测试题中已经有了求闰年个数的方法 leapYears：
// 排除今年和生年，因为这两个年份单独算日龄了，所以这里有年份的“向内靠拢”。
  let leapCount = leapYears(birthYear + 1, (new Date().getFullYear() - 1));
// 整年数等于你的法定年龄去掉一年。如出生在去年的人，年龄整年数为 0，天数在 diff 和 thisYearDays 另算
  let ordinaryCount = (new Date().getFullYear() - birthYear - 1) - leapCount;
// 按顺序依次为生日当年的天数 + 闰年天数 + 平年天数 + 今年天数，over！
  return diff + leapCount * 366 + ordinaryCount * 365 + thisYearDays;
}
`
  },
  practice10: {
    question: '回文串判断：如果一个字符串（长度大于 1）左右对称，如 "abcba"、"123321"，则称为回文字符串。实现一个函数判断输入的字符串是否为回文字符串。',
    code: `
function plalindrome(str) {
  let length = str.length;
  if (length < 2) {
    return false;
  }
  if (length % 2 === 0) { // 长度为偶数时
  // 字符串没有 reverse 方法，将前半截转为数组，颠倒顺序，拼接起来再与后半截对比
    return str.substring(0, length / 2).split('').reverse().join('') === str.substring(length / 2);
  }
  // 程序到这里，处理的是长度奇数的情况
  length--; // 先转为偶数，最后
  return str.substring(0, length / 2).split('').reverse().join('') === str.substring(length / 2 + 1); 
  // 最后这里要跳过中心字符，所以加 1
}

// 上述代码的返回结果中，只有末尾稍有差异，相同逻辑合并如下：
function plalindrome(str) {
  let length = str.length;
  if (length < 2) {
    return false;
  }
  let secondStringStartIndex = length / 2;
  if (length % 2 !== 0) {
    length--;
    secondStringStartIndex = length / 2 + 1;
  }
  return str.substring(0, length / 2).split('').reverse().join('') === str.substring(secondStringStartIndex);
}
`
  }
}