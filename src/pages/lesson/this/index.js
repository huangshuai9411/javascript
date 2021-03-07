import React from 'react';
import Markdown from '@/components/Markdown';
import Code from '@/components/Code';
import docs from './doc';

export default function This() {
  
  return (<div>
    <Markdown docString={docs.doc1} />
    <Code codeString={docs.code1} />
    <Markdown docString={docs.doc2} />
    <Code codeString={docs.code2} />
    <Markdown docString={docs.doc3} />
    <Code codeString={docs.code3} />
    <Markdown docString={docs.doc4} />
    <Code codeString={docs.code4} />
    <Markdown docString={docs.doc5} />
    <Code codeString={docs.code5} />
    <Markdown docString={docs.doc6} />
    <Code codeString={docs.code6} />
    <Markdown docString={docs.doc7} />
    <Code codeString={docs.code7} />
    <Markdown docString={docs.doc8} />
    <Code codeString={docs.code8} />
    <Markdown docString={docs.doc9} />
    <Code codeString={docs.code9} />
    <Markdown docString={docs.doc10} />
    <Code codeString={docs.code10} />
    <Markdown docString={docs.doc11} />
    <Code codeString={docs.code11} />
    <Markdown docString={docs.doc12} />
    <Code codeString={docs.code12} />
    <Markdown docString={docs.doc13} />
  </div>)
}