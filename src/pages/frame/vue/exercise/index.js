import React from 'react';
import Markdown from '@/components/Markdown';
import Code from '@/components/Code';
import docs from './doc';

export default function Exercise() {
  
  return (<>
    <Markdown docString={docs.doc1} />
  </>)
}