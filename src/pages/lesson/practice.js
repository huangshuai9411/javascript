import React from 'react';
import Markdown from '@/components/Markdown';
import LittleTest from '@/components/LittleTest';
import { reference } from '@/util';

const docString = `
#### **请用函数实现所有的问题，练习前会讲解数组、字符串的一些原生方法，务必认真读题哟~**
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

export default function Practice() {
  const style = {margin: '0 10px 20px', display: 'inline-block'};
  return (
    <>
      <Markdown docString={docString} />
      {
        Array(10).fill(0).map((_, index) => <div key={index} style={style}>
          <LittleTest id={`practice${index}`} />
        </div>)
      }
    </>
  );
}