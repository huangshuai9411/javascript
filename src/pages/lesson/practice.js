import React from 'react';
import Markdown from '@/components/Markdown';
import LittleTest from '@/components/LittleTest';

export default function Practice() {
  
  return (
    <>
      <Markdown docString="#### **请用函数实现所有的问题**" />
      <LittleTest id="practice1" />
      <LittleTest id="practice2" />
      <LittleTest id="practice3" />
      <LittleTest id="practice4" />
      <LittleTest id="practice5" />
    </>
  );
}