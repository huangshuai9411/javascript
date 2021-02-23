import React from 'react';
import Markdown from '@/components/Markdown';
import Code from '@/components/Code';
import { createFile1, createFile2, createFile3, createFile4 } from './dependency/doc';
import { template } from '@/util';
import styles from './dependency/style.less';

const strWithText = template(`
    环滁皆山也。其西南诸峰，林壑尤美，望之蔚然而深秀者，琅琊也。山行六七里，渐闻水声潺潺，而泻出于两峰之间者，酿泉也。峰回路转，有亭翼然临于泉上者，醉翁亭也。作亭者谁？山之僧智仙也。名之者谁？太守自谓也。太守与客来饮于此，饮少辄醉，而年又最高，故自号曰醉翁也。醉翁之意不在酒，在乎山水之间也。山水之乐，得之心而寓之酒也。
    若夫日出而林霏开，云归而岩穴暝，晦明变化者，山间之朝暮也。野芳发而幽香，佳木秀而繁阴，风霜高洁，水落而石出者，山间之四时也。朝而往，暮而归，四时之景不同，而乐亦无穷也。`);

const strWithImg = template(`
    环滁皆山也。其西南诸峰，林壑尤美，望之蔚然而深秀者，琅琊也。山行六七里，渐闻水声潺潺，而泻出于两峰之间者，酿泉也。峰回路转，有亭翼然临于泉上者，醉翁亭也。作亭者谁？山之僧智仙也。名之者谁？太守自谓也。太守与客来饮于此，饮少辄醉，而年又最高，故自号曰醉翁也。醉翁之意不在酒，在乎山水之间也。山水之乐，得之心而寓之酒也。
    若夫日出而林霏开，云归而岩穴暝，晦明变化者，山间之朝暮也。野芳发而幽香，佳木秀而繁阴，风霜高洁，水落而石出者，山间之四时也。朝而往，暮而归，四时之景不同，而乐亦无穷也。
    <img src="./cat.jpg" />`);

export default function Create() {
  
  return (<div className={styles.Create}>
    <Markdown docString={createFile1} />
    <Code codeString={template()} />
    <Markdown docString={createFile2} />
    <Code codeString={strWithText} />
    <Markdown docString={createFile3} />
    <Code codeString={strWithImg} />
    <Markdown docString={createFile4} />
  </div>)
}