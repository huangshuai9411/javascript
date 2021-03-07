export default {
  'event-homework': {
    title: '参考代码，样式自己润色，务必实现后再查看',
    question: `<h3><strong>需求分析：</strong></h3>
    1. 使用脚本为页面的按钮添加点击事件；<br>
    2. 点击事件中封装获取元素、创建元素、元素的样式设置、插入元素的代码；<br>
    温馨提示： 重复的代码逻辑可以适当封装。
`,
    code: `
// 文档标签略
<style>
.modal-wraper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.2);
  /* 下面代码使子元素.modal-content上下水平居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content{
  /* 白色背景，尺寸合适 */
  width: 520px;
  height: 390px;
  background-color: #fff;
}
.modal-row {
  /* 使子元素水平排布 */
  display: flex;
}
.modal-label {
  /* 略 */
}
.modal-value {
  /* 略 */
}
</style>
<script type="text/javascript">
function createRow(label, value) { // 生成左右结构的“名称 + 值”的行结构
  let row = document.createElement('div');
  row.className = 'modal-row'; // 类名设置以后记得在 style 标签内去实现该类的样式
  // 将这一行的内容拼出来，统一作为行容器的 innerHTML，使用创建元素的代码也是没问题的，这里偷个懒。
  row.innerHTML = '<div className="modal-label">' + label + '</div><div className="modal-value">' + value + '</div>';
  return row;
}

window.onload = function () {
  let btn = document.querySelector('button'), body = document.body;
  btn.addEventListener('click', function () {
    let modal = document.createElement('div'); // 创建灰色遮罩
    modal.className = 'modal-wraper'; // 类名设置以后记得在 style 标签内去实现该类的样式

    let content = document.createElement('div'); // 创建遮罩中心的内容区
    content.className = 'modal-content';
    content.appendChild(createRow('头像', '<img src="./你的头像地址" />')); // 添加头像那一行
    content.appendChild(createRow('姓名', '库库侠')); // 添加姓名那一行
    content.appendChild(createRow('性别', '男')); // 添加性别那一行

    modal.appendChild(content); // 将内容放到遮罩中
    body.appendChild(modal); // 将遮罩整体放到 body 中
  }, false);
}
</script>
`
  }
}