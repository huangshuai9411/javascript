import React from 'react';
import Markdown from '@/components/Markdown';
import Code from '@/components/Code';
import { cssString1, cssString2, cssString3, cssString4, cssString5 } from './doc';
import { template } from '@/util';
import styles from './style.less';

const codeString1 = template(`
    环滁皆山也。其西南诸峰，林壑尤美，望之蔚然而深秀者，琅琊也。山行六七里，渐闻水声潺潺，而泻出于两峰之间者，酿泉也。峰回路转，有亭翼然临于泉上者，醉翁亭也。作亭者谁？山之僧智仙也。名之者谁？太守自谓也。太守与客来饮于此，饮少辄醉，而年又最高，故自号曰醉翁也。醉翁之意不在酒，在乎山水之间也。山水之乐，得之心而寓之酒也。
    若夫日出而林霏开，云归而岩穴暝，晦明变化者，山间之朝暮也。野芳发而幽香，佳木秀而繁阴，风霜高洁，水落而石出者，山间之四时也。朝而往，暮而归，四时之景不同，而乐亦无穷也。
<img src="./cat.jpg" width="50%" height="auto" />`);

const codeString2 = template(`
  <p style="color: red">环滁皆山也。其西南诸峰，林壑尤美，望之蔚然而深秀者，琅琊也。</p>
  <p style="font-size: 30px">山行六七里，渐闻水声潺潺，而泻出于两峰之间者，酿泉也。</p>
  <p style="color: yellow">峰回路转，有亭翼然临于泉上者，醉翁亭也。</p>
  <p>作亭者谁？山之僧智仙也。名之者谁？太守自谓也。太守与客来饮于此，饮少辄醉，而年又最高，故自号曰醉翁也。醉翁之意不在酒，在乎山水之间也。</p>
  山水之乐，得之心而寓之酒也。
  <p>若夫日出而林霏开，云归而岩穴暝，晦明变化者，山间之朝暮也。野芳发而幽香，佳木秀而繁阴，风霜高洁，水落而石出者，山间之四时也。朝而往，暮而归，四时之景不同，而乐亦无穷也。</p>
  <img src="./cat.jpg" width="50%" height="auto" />`);


export const codeString3 = template(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>醉翁亭记</title>
    <style type="text/css">
      .p1{
        color: red
      }
      .p2{
        font-size: 30px
      }
      .p3{
        color: yellow
      }
      img{
        width: 50%;
        height: auto
      }
    </style>
  </head>
  <body>
    <p class="p1">环滁皆山也。其西南诸峰，林壑尤美，望之蔚然而深秀者，琅琊也。</p>
    <p class="p2">山行六七里，渐闻水声潺潺，而泻出于两峰之间者，酿泉也。</p>
    <p class="p3">峰回路转，有亭翼然临于泉上者，醉翁亭也。</p>
    <p>作亭者谁？山之僧智仙也。名之者谁？太守自谓也。太守与客来饮于此，饮少辄醉，而年又最高，故自号曰醉翁也。醉翁之意不在酒，在乎山水之间也。</p>
    山水之乐，得之心而寓之酒也。
    <p>若夫日出而林霏开，云归而岩穴暝，晦明变化者，山间之朝暮也。野芳发而幽香，佳木秀而繁阴，风霜高洁，水落而石出者，山间之四时也。朝而往，暮而归，四时之景不同，而乐亦无穷也。</p>
    <img src="./cat.jpg" />
  </body>
</html>`, true);

const codeString4 = template(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>醉翁亭记</title>
    <style type="text/css">
      .container{
        height: 200px;
        width: 200px;
        border: 10px solid #000;
        margin: 10px 20px 30px 40px;
        padding: 50px 60px 70px 80px;
        background-color: bisque;
      }
    </style>
  </head>
  <body>
    <div class="container">这是内容</div>
  </body>
</html>`, true);

export default function Css() {
  
  return (<div className={styles.Css}>
    <Markdown docString={cssString1} />
    <Code codeString={codeString1} />
    <Markdown docString={cssString2} />
    <Code codeString={codeString2} />
    <Markdown docString={cssString3} />
    <Code codeString={codeString3} />
    <Markdown docString={cssString4} />
    <Code codeString={codeString4} />
    <Markdown docString={cssString5} />
  </div>)
}