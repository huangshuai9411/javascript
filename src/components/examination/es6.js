export default {
  forEach: {
    title: '封装',
    question: 'ES6 的数组方法均内置在了构造函数的原型上 Array.prototype.forEach，所以数组实例均能访问到。 如果没有这个方法，我们想在原型上实现遍历方法怎么做呢？首先明确 forEach 的使用方式，其参数为一个用户自定义的处理函数，我们将数组的每一项、索引、数组本身作为参数交给这个处理函数执行，没有返回值。(原型方法中的 this 指向实例本身，即当前调用 forEach 方法的数组。)',
    code: `
// callback 就是自定义处理每一项元素的函数
Array.prototype.forEach = function (callback) {
  for(let index = 0; index < this.length; index++) {
    callback(this[index], index, this);
  }
}
`
  },
  map: {
    title: '封装',
    question: 'ES6 的数组方法均内置在了构造函数的原型上 Array.prototype.map，所以数组实例均能访问到。 如果没有这个方法，我们想在原型上实现遍历方法怎么做呢？首先明确 map 的使用方式，其参数为一个用户自定义的处理函数，我们将数组的每一项、索引、数组本身作为参数交给这个处理函数执行，返回值作为新的数组的每一项。(原型方法中的 this 指向实例本身，即当前调用 map 方法的数组。)，最终 map 方法返回一个与原数组长度一样的新数组。',
  code: `
// callback 就是自定义处理每一项元素的函数
Array.prototype.map = function (callback) {
  const result = [];
  for(let index = 0; index < this.length; index++) {
    const newItem = callback(this[index], index, this);
    result.push(newItem);
  }
  return result;
}`
  },
  every: {
    title: '封装',
    question: '实现 Array.prototype.every',
  code: `
Array.prototype.every = function (callback) {
  for(let index = 0; index < this.length; index++) {
    const bool = callback(this[index], index, this);
    if (!bool) {
      return false;
    }
  }
  return true;
}`
  },
  some: {
    title: '封装',
    question: '实现 Array.prototype.some',
  code: `
Array.prototype.some = function (callback) {
  for(let index = 0; index < this.length; index++) {
    const bool = callback(this[index], index, this);
    if (bool) {
      return true;
    }
  }
  return false;
}`
  },
  find: {
    title: '封装',
    question: '实现 Array.prototype.find',
  code: `
Array.prototype.find = function (callback) {
  for(let index = 0; index < this.length; index++) {
    const bool = callback(this[index], index, this);
    if (bool) {
      return this[index];
    }
  }
  // 函数未写返回值时，会默认返回 undefined
}`
  },
  findIndex: {
    title: '封装',
    question: '实现 Array.prototype.findIndex',
  code: `
Array.prototype.findIndex = function (callback) {
  for(let index = 0; index < this.length; index++) {
    const bool = callback(this[index], index, this);
    if (bool) {
      return index;
    }
  }
  return -1;
}
// 如果是简单值的查找，比如从 [1, 8, 6, 4, 1] 中查找一个数的位置，可以用数组的 indexOf 方法
const index = arar.indexOf(8) // index === 1
const index = arar.indexOf(9) // index === -1
// 对于复杂值的查找就只能使用 findIndex，例如 arr = [{key: 1}, {key: 2}];

const index = arr.indexOf({key: 2}) 总是 -1，这里涉及到引用类型的数据比较，并非字面量一样就算相等。
只能这样找位置： const index = arr.findIndex(item => item.key === 2);
`
  },
  reduce: {
    title: '封装',
    question: `实现 Array.prototype.reduce, 注意 reduce 有两个参数：回调函数和迭代最初值。回调函数有 4 个参数：当前迭代起始值、当前迭代值，当前迭代位置、当前迭代列表。当迭代的最初值缺省（没传递）时，会以第一项元素作为迭代起始值开始迭代。每次迭代的结果，将作为下一迭代的起始值。使用形式如下：
<code>
  <pre>
arr.reduce(function (prev, current, index, arr) {
    // 首轮遍历 prev === start
  }, start);
  
  arr.reduce(function (prev, current, index, arr) {
    // 首轮遍历 prev === arr[0]
  });
  </pre>
</code>

在函数内访问 arguments 对象可以得到函数调用时传递的参数列表，arguments 具有 length 属性，即参数的数量，但它不是数组
`,
  code: `
Array.prototype.reduce = function (callback, start) {
  if (!this.length) {
    throw new Error('空数组不能进行 reduce 迭代');
  }
  if (this.length === 1) { // 只有一项元素时的迭代行为
    if (arguments.length > 1) { // 传递了迭代最初值 start 时，做一次迭代结束。
      return callback(start, this[0], 0, this);
    }
    return this[0]; // 没传迭代最初值 start 时，直接返回唯一的元素。
  }
  // 元素数量足够多则进入下面逻辑
  let prev = this[0], index = 1; // 默认从第二个位置开始遍历
  if (arguments.length > 1) { // 传递了迭代最初值 start 时，将其作为当前迭代起始值。这次得从头开始遍历
    prev = start;
    index = 0;
  }
  for(; index < this.length; index++) {
    prev = callback(prev, this[index], index, this);
  }
  return prev;
}
// reduceRight 类似，不过是索引由大到小遍历，请自己实现一下。
`
  },
  promise: {
    title: 'promise 浅析',
    hide: true,
    question: 'Promise 是一个构造函数，实例化时接收一个函数(设为 f )为参数。则 f 的两个参数分别是执行成功的状态回调 resolve 和失败的回调 reject。resolve 被调用时的参数可以在实例的 then 方法中获取到，可以处理请求的返回值，reject 被调用时的参数可以在实例的 catch 方法中捕获，一般处理异常和错误。我们将 ajax 请求封装成 promise，点开 “测试数据在这里”进行学习：',
    data: `
function ajax(url, options) {
  return new Promise((resolve, reject) => {
    options = options || {}; // 可以没有 options，默认使用空对象 
    let method = options.method || 'GET'; // 没有 options 时，默认使用 get 请求
    let async = 'async' in options ? options.async : true; // 有 options 时就用 options.async，否则就使用异步
    let data = options.data ? JSON.stringify(options.data) : null; // 将 data 参数补上，这是提交的数据
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function onReady() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        try {
          const response = JSON.parse(xhr.responseText);
          resolve(response); // 不需要传递 callback 回调，因为返回值会在 then 方法拿到
        } catch(error) {
          reject(error); // 如果解析失败，错误往后传递
        }
      }
    };
    xhr.onerror = reject; // 错误由 reject 传递给 catch 来处理
    xhr.open(method, url, async);
    xhr.send(data);
  });
}

// 使用方式：
ajax('/api', { method: 'POST', data: {} }).then(data => {
  // data 就是上面 resolve 的返回值
}).catch(err => {
  // err 要么是 try-catch 抛出的 error 参数，要么是 xhr.onerror 方法的参数，可以分别进行处理
});


// 如果一个函数返回值是 promise 类型，如上述 ajax 方法，则可以通过异步函数来获取到 resolve 的参数：
async function () {
  const data = await ajax('/api', { method: 'POST', data: {} });
  // data 就是返回值，简单理解就是异步函数能将 promise 包装值解析出来，让我们写代码就像同步的方式
}


// 或者使用 ES6 的 generator 函数（函数名和 function 关键字之间加 * 号），这里不作为重点，先行了解。
function *generator() {
  const data = yield ajax('/api', { method: 'POST', data: {} });
  // data 就是返回值，简单理解就是生成器函数能将 promise 包装值解析出来，让我们写代码就像同步的方式
}

`
  }
}