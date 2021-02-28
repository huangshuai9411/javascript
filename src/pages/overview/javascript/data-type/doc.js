import { reference } from '@/util';

export const docString1 = `
### **JavaScript 中的数据类型**

丰富的数据类型提升了开发者创建、操作计算机底层数据的能力和效率。试想一下，如果开发者全部使用底层语言，使用二进制操作界面，开发一款软件的成本将不堪设想。不同的数据类型可以视为对底层数据的一种封装，以便于高级语言的开发者能专注于顶层软件的设计。

广义上讲，JS 中一切皆对象。缩小了讲，对象数据类型包括了**数组、函数、Set、Map、class、正则、日期**。再狭义点，有时候对象特指字面量形式以花括号包裹的键值对，形如 ${reference('{}，{ key: "value", type: []}')}，如无特殊说明，后文中提到的 JS 对象均指这种类型的数据。
`;

export const docString2 = `
> 数据类型也可以从另外一个角度来划分，基本数据类型（值类型）和引用数据类型。

> 基本数据类型：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol，Bigint。

> 引用数据类型：对象(Object)、数组(Array)、函数(Function)。

> 区分数据类型的一个通用方法就是使用 ${reference('typeof')} 操作符来判断。

> ${reference('typeof 123   ----------------> "number"')}

> ${reference('typeof "123" ----------------> "string"')}

> ${reference('typeof false ----------------> "boolean"')}

> ${reference('typeof null  ----------------> "object"')}

> ${reference('typeof undefined ------------> "undefined"')}

> ${reference('typeof Symbol() -------------> "symbol"')}

> ${reference('typeof 123n -----------------> "bigint"')}

> ${reference('typeof {} -------------------> "object"')}

> ${reference('typeof [] -------------------> "object"')}

> ${reference('typeof function (){} --------> "function"')}

> 我们注意到 数组[]，对象{}，null 都返回 "object"，要区分这三种类型，可以结合值的真假，数组特有的 ${reference('Array.isArray')} 方法来判断，在早期也可以用 ${reference('Object.prototype.toString.call(value)')} 来识别 value 的数据类型，E6 以来已经不用这么麻烦了。

### **JSON (JavaScript Object Notation) **

JSON 是一种轻量级的数据交换格式，其历史不再赘述。它是 JS 的一个子集，因此与 JS 数据类型几乎一致。不同之处在于，json 支持的数据类型只有以下几种：

${reference('number, boolean, string, null, array, object')}

> 也就是说，以下都是合法的 json 数据：

${reference('123, 0.25, true, false, "字符串", null, [], [1, "ff", 0, false, []], {}')}

数据嵌套：${reference('{ "name": "Tom", "age": 24, "agent": "男", "parent": ["父", "母"] }')}

值得注意的是，json 格式的 **键值对** 与 **JS 对象**（无特殊说明，JS 对象特指花括号）格式是一样的，只不过在 json 里， **键名** 需要加上双引号（单引号都不行），而 **JS 对象** 的 **键名** 可以加引号（不分单双）也可以不加（当键名满足合法的变量命名规则时）。json 数据不支持上述六中类型之外的 **函数、undefined、正则、日期** 等。

### **合法的变量命名规则**

> 变量的命名只能包含 **数字**、**字母**、**下划线**、和美元符号 **$** 四种字符，其中数字不允许作为首字符。

> √：${reference('let name; let ajdfuw; let $el; let _d; let age18; let CONSTANT; let my_NAME_1_$;')} ...

> ×：${reference('let 2gemder; let value%; let g-a; let s.d; ')}...

因此在 JS对象中，我们可以这样写：
> ${reference('{ title: "这是文本", value: 123 }')}

也可以这样写：
> ${reference('{ "title": "这是文本", "value": 123 }')}

这样写：
> ${reference('{ "title": "这是文本", \'value\': 123 }')}

如果对象的键名不符合 **合法的变量命名规则** 例如：
> ${reference('{ "ti.tle": "这是文本", \'va-lue\': 123 }')}

此时键名就必须加引号，否则会抛出错误。

### **对象和数组的取值**

- 对象取值

> ${reference('let object = { "ti.tle": "这是文本", \'va-lue\': 123, id: 1, age: 15 };')}

> 上面声明了一个对象，要访问对象的某个属性值可以通过 ${reference('. + 键名')} 的形式。


> 如访问年龄 ${reference('object.age')}，访问 id 的值：${reference('object.id')}

> 但是我们用同样的形式访问前两个属性的时候就会出现问题。
例如 ${reference('object.ti.tle')}，这时候 JS 引擎会认为我们访问的对象形如 

> ${reference('{ ti: { til: \'xxx\' } }')}

显然原先的 object 中并没有 ti 这个属性。因此不合乎变量命名规则的键名，我们访问其值就只能通过**中括号** 语法：

> ${reference('object["ti.tle"]')} 或 ${reference("object['ti.tle']")}

> ${reference('object["va-lue"]')} 或 ${reference("object['va-lue']")}

- 数组取值

> ${reference('let array = ["Tom", "Lily", 123];')}

数组是一个有序的列表，所以访问元素通过“序号”即可，这个“序号”成为**索引**。按照约定，索引从 0 开始。比如访问第一个元素：

> ${reference('array[0]')}

第二个元素：

> ${reference('array[1]')}

因为数组长度 ${reference('array.length')} 为 3，所以最后一个元素为

> ${reference('array[2]')}，即 ${reference('array[3 - 1]')}，亦即 ${reference('array[array.length - 1]')}

推而广之，在数组中，${reference('array[array.length - 1]')} 始终代表最后一个元素。
`;