export default {
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
    question: '通常四年一闰，但是对于整百的年份必须能被 400 整除才是闰年。那么请问 1879 年到 2021 年之间有多少个闰年呢？',
    code: `
// start < end;
function leapYears(start, end) {
  let count = 0;
  while (start < end) {
    if (start % 100 === 0) {
      if (start % 400 === 0) {
        count++;
      }
    } else if (start % 4) {
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
  }
}