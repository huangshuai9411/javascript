import React from 'react';
import Markdown from '@/components/Markdown';
import LittleTest from '@/components/LittleTest';
import { reference } from '@/util';

const docString1 = `
#### **请用函数实现所有的问题，练习前会讲解数组的一些原生方法，务必认真读题哟~**
${reference('let array = [1, 2, 3];')}

1. 数组尾部插入元素： ${reference('array.push(4)')}, 此时打印 array 为 ${reference('[1, 2, 3, 4]')};
- 接上步操作，数组头部插入元素：${reference('array.unshift(5)')}, 此时打印 array 为 ${reference('[5, 1, 2, 3, 4]')};
- 接上步操作，数组头部删除元素：${reference('array.shift()')}, 此时打印 array 为 ${reference('[1, 2, 3, 4]')};
- 接上步操作，数组尾部删除元素：${reference('array.pop()')}, 此时打印 array 为 ${reference('[1, 2, 3]')};
- 数组的操作方法均有返回值如 push，unshift => 数组的新长度；shift，pop => 删掉的元素。
- 数组万能大法。在数组 ${reference('index')} 的位置删除 m 个元素，然后依次插入元素 ${reference('j, k...')}：
${reference('array.splice(index, m, j, k...)')}。

> 例如：

> ${reference('let array = [10, 20, 30, 40, 50];')} 

> ${reference('array.splice(1, 2, 6, 7);')} // 从索引 1 开始，删除两个值，再把 6，7 插入到删除的位置

> ${reference('console.log(array);')}  ${reference('// [10, 6, 7, 40, 50]')}

> ${reference('splice')} 方法返回删掉的元素列表，相比于 shift，pop，差别就在于它改变的是一批元素。

> splice 方法同时具有增减元素（多个）的作用，但是需要牢记参数的含义。而首尾增减一个元素的操作可以使用 push 、shift、unshift、pop，不必传参。

数组元素翻转 ${reference('reverse')}，${reference('[1, 2, 3, 4].reverse()')} 返回 ${reference('[4, 3, 2, 1]')}

数组合并 ${reference('concat')}，${reference('let newArray = [1, 2, 3, 4].concat([5, 6])')}， newArray 为 ${reference('[1, 2, 3, 4, 5, 6]')}
`;

const docString2 = `
#### **字符串方法**

1. 字符串最直接的方法就是拼接，即“+”操作符：${reference("'hello ' + 'world!' === 'hello world!'")}，当然字符串也支持 concat 方法（这点和数组一致）。
- 将字符串想象成一条绳子，有绳子加长的方法，就有剪短的方法，有两种形式：${reference('substr')} 和 ${reference('substring')}

> 对比差异

> ${reference("'hello world!'.substr(1) === 'ello world!'")}

> ${reference("'hello world!'.substring(1) === 'ello world!'")}

> ${reference("'hello world!'.substr(1, 4) === 'ello'")}

> ${reference("'hello world!'.substring(1, 4) === 'ell'")}

总结，两个方法都传**一个参数时是一样**的，该参数为起始索引，返回**起始索引到末尾的字符**；
两个方法都传两个参数时是不一样的，substr 第二个参数意义是**截取的字符数**，substring 的第二个参数意义是**截取结束的索引位置**。另外，由于字符串是**基本数据类型**（相对于引用数据类型而言），对字符串的截取总会返回新的字符串，而不会修改原先的字符串。例如：

> ${reference("let s1 = 'hello world!'; let s2 = s1.substring(1, 4); s2 值为 'ell'; s1 的值仍然是 'hello world!'")}

#### **字符串与数组的转换**

1. String to Array: ${reference('"1.2.3/4".split(".")')} 返回 ${reference('["1", "2", "3/4"]')}；${reference('"dfewf".split("")')} 返回 ${reference('["d", "f", "e", "w", "f"]')}
- Array to String: ${reference('[1, 2, 3, 4].join("-")')} 返回 ${reference('1-2-3-4')}

> 总结，字符串转数组时，向 split 方法传递“分隔”符号，字符串便以该分隔符“切分”数组。

> 数组转字符串时，向 join 方法传递“拼接”符号，数组便以该拼接符将所有元素按照顺序“串起来”。

> 访问字符串某位置的字符，使用 charAt 方法，当然像数组那样使用方括号也可以，即：

> ${reference("let str = 'Lily'")}

> ${reference("str.charAt(1) === 'i'")}
 
> ${reference("str[1] === 'i'")}

> ${reference("str.charAt(1) === str[1]")}
`;

export default function Practice() {
  const style = {margin: '0 10px 20px', display: 'inline-block'};
  return (
    <>
      <Markdown docString={docString1} />
      {
        Array(10).fill(0).map((_, index) => <div key={index} style={style}>
          <LittleTest id={`practice${index}`} />
        </div>)
      }
      <Markdown docString={docString2} />
      <LittleTest id="practice10" />
    </>
  );
}