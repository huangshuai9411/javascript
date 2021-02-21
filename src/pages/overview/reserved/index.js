import React from 'react'
import styles from './style.less'

export default function ReservedWord() {
  
  return (<div className={styles.ReservedWord}>
    关键字，黑色关键字不常用或不推荐使用
    break（跳出循环体或switch分支）、else、new、var、let（变量声明）、const（常量声明）、case（分支条件）、
    finally、return、void、catch、for（定义循环）、switch（定义条件分支）、while（定义循环）、
    continue（结束本轮循环，进行下一轮循环）、function（定义函数）、this、with、default、
    if（定义条件分支）、throw（抛出异常）、delete、in、try、do、instranceof、typeof
    
    保留字，红色保留字目前在JavaScript中已经较为广泛使用，对于初学者，建议先去掌握关键字
    
    abstract、enum、int、short、boolean、export（导出模块）、interface、static、byte、
    extends（类继承）、long、super（继承自父类）、
    char、final、native、synchronized、class（类声明）、float、package、throws、goto、private、
    transient、debugger（断点调试，正常执行的代码不应当出现debugger）、implements、
    protected 、volatile、double、import（导入模块）、public、module（node环境中的模块）
    
    关键字用途如同单词所代表的的含义，这是高级语言的特色，使编程者理解程序的逻辑十分得语义化。每种关键字的使用，贯穿于
    以后的每节课程代码中，这里作为总结，暂时不明白就跳过
  </div>)
}