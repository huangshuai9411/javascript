import React from 'react';
import { history } from 'umi';
import {
  AppstoreOutlined,
  FileTextOutlined,
  ScheduleOutlined,
  Html5Outlined,
  PictureOutlined,
  CodeOutlined,
  CalculatorOutlined,
  KeyOutlined,
  DatabaseOutlined,
  BookOutlined,
  RetweetOutlined,
  FunctionOutlined,
  BranchesOutlined,
  ControlOutlined,
  NodeIndexOutlined,
  HistoryOutlined,
  ChromeOutlined,
  FolderOutlined,
  ReconciliationOutlined,
  QuestionOutlined,
  RiseOutlined,
  FireOutlined,
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
  AimOutlined,
  SketchOutlined,
  EditOutlined,
  ProjectOutlined,
  AppstoreAddOutlined,
  CheckOutlined,
  ArrowUpOutlined,
  BuildOutlined,
  TableOutlined,
  SettingOutlined,
  ThunderboltOutlined,
  BarChartOutlined,
  ToolOutlined,
  SelectOutlined,
  BugOutlined,
  CloudUploadOutlined,
  CloudServerOutlined,
  SafetyOutlined,
  FormOutlined
} from '@ant-design/icons';

const routes = [{
  key: '/overview',
  title: '综述',
  icon: <AppstoreOutlined />,
  children: [{
    key: '/overview/preface',
    title: '前言',
    icon: <FileTextOutlined />,
  }, {
    key: '/overview/prepare',
    title: '准备工作',
    icon: <ScheduleOutlined />,
  }, {
    key: '/overview/html',
    title: 'HTML',
    icon: <Html5Outlined />,
    children: [{
      key: '/overview/html/element',
      title: 'HTML 元素',
      icon: <Html5Outlined />,
    }, {
      key: '/overview/html/example',
      title: '网页结构',
      icon: <Html5Outlined />,
    }, {
      key: '/overview/html/create',
      title: '新建网页',
      icon: <Html5Outlined />,
    }]
  }, {
    key: '/overview/css',
    title: 'CSS',
    icon: <PictureOutlined />,
  }, {
    key: '/overview/javascript',
    title: 'Javascript',
    icon: <CodeOutlined />,
    children: [{
      key: '/overview/javascript/reserved',
      title: '保留字',
      icon: <KeyOutlined />,
    }, {
      key: '/overview/javascript/data-type',
      title: '数据类型',
      icon: <DatabaseOutlined />,
    }, {
      key: '/overview/javascript/operator',
      title: '操作符',
      icon: <CalculatorOutlined />,
    }]
  }]
}, {
  key: '/lesson',
  title: '课程',
  icon: <BookOutlined />,
  children: [{
    key: '/lesson/condition',
    title: '条件分支',
    icon: <BranchesOutlined />,
  }, {
    key: '/lesson/loop',
    title: '循环语句',
    icon: <RetweetOutlined />,
  }, {
    key: '/lesson/function',
    title: '函数',
    icon: <FunctionOutlined />,
  }, {
    key: '/lesson/scope',
    title: '作用域和闭包',
    icon: <ControlOutlined />,
  }, {
    key: '/lesson/bom',
    title: 'BOM',
    icon: <ChromeOutlined />,
  }, {
    key: '/lesson/dom',
    title: 'DOM',
    icon: <FolderOutlined />,
  }, {
    key: '/lesson/event',
    title: '事件',
    icon: <ReconciliationOutlined />,
  }, {
    key: '/lesson/this',
    title: 'this',
    icon: <QuestionOutlined />,
  }, {
    key: '/lesson/prototype',
    title: '原型链',
    icon: <NodeIndexOutlined />,
  }, {
    key: '/lesson/async',
    title: 'ajax 和异步',
    icon: <HistoryOutlined />,
  }]
}, {
  key: '/es6',
  title: 'ES6+',
  icon: <RiseOutlined />,
}, {
  key: '/frame',
  title: '流行框架',
  icon: <FireOutlined />,
  children: [{
    key: '/frame/jquery',
    title: 'JQuery',
    icon: <FrownOutlined />,
  }, {
    key: '/frame/mvc',
    title: 'MVC 简介',
    icon: <MehOutlined />,
  }, {
    key: '/frame/react',
    title: 'React',
    icon: <SmileOutlined />,
    children: [{
      key: '/frame/react/index',
      title: '基础学习',
      icon: <AimOutlined />,
    }, {
      key: '/frame/react/exercise',
      title: '动手实践',
      icon: <SketchOutlined />,
    }]
  }, {
    key: '/frame/vue',
    title: 'Vue',
    icon: <SmileOutlined />,
    children: [{
      key: '/frame/vue/index',
      title: '基础学习',
      icon: <AimOutlined />,
    }, {
      key: '/frame/vue/exercise',
      title: '动手实践',
      icon: <SketchOutlined />,
    }]
  }, {
    key: '/frame/miniprogram',
    title: '小程序',
    icon: <SmileOutlined />,
  }, {
    key: '/frame/ui',
    title: 'UI 框架',
    icon: <BuildOutlined />,
  }],
}, {
  key: '/practice',
  title: '实战强化',
  icon: <EditOutlined />,
  children: [{
    key: '/practice/create',
    title: '创建项目',
    icon: <ProjectOutlined />,
    children: [{
      key: '/practice/create/react',
      title: 'React 项目',
      icon: <AppstoreAddOutlined />,
    }, {
      key: '/practice/create/vue',
      title: 'Vue 项目',
      icon: <AppstoreAddOutlined />,
    }]
  }, {
    key: '/practice/submit',
    title: '实现数据提交',
    icon: <CheckOutlined />,
  }, {
    key: '/practice/git',
    title: '代码管理',
    icon: <CodeOutlined />,
  }],
}, {
  key: '/advanced',
  title: '能力进阶',
  icon: <ArrowUpOutlined />,
  children: [{
    key: '/advanced/state',
    title: '状态管理',
    icon: <TableOutlined />,
    children: [{
      key: '/advanced/state/redux',
      title: 'Redux',
      icon: <ThunderboltOutlined />,
    }, {
      key: '/advanced/state/vuex',
      title: 'Vuex',
      icon: <ThunderboltOutlined />,
    }, {
      key: '/advanced/state/mobx',
      title: 'Mobx',
      icon: <ThunderboltOutlined />,
    }, {
      key: '/advanced/state/mobx-state-tree',
      title: 'MST',
      icon: <ThunderboltOutlined />,
    }]
  }, {
    key: '/advanced/webpack',
    title: '打包工具',
    icon: <SettingOutlined />,
  }, {
    key: '/advanced/performance',
    title: '性能优化',
    icon: <BarChartOutlined />,
  }, {
    key: '/advanced/loader',
    title: '模块加载器',
    icon: <ToolOutlined />,
  }, {
    key: '/advanced/plugin',
    title: '插件系统',
    icon: <SelectOutlined />,
  }, {
    key: '/advanced/debugger',
    title: 'bug 调试',
    icon: <BugOutlined />,
  }, {
    key: '/advanced/npm',
    title: '发布模块',
    icon: <CloudUploadOutlined />,
  }, {
    key: '/advanced/node',
    title: '构建服务',
    icon: <CloudServerOutlined />,
  }, {
    key: '/advanced/safety',
    title: '安全防护',
    icon: <SafetyOutlined />,
  }, {
    key: '/advanced/keep',
    title: '总结', // 可视化库，canvas，视频，音频，富文本，刷题，设计模式，计算机底层原理
    icon: <FormOutlined />,
  }],
}];

export default routes;

const flatRoutes = list => list.reduce((prev, { key, children }) => {
  if (children?.length && children.filter(({ hidden }) => !hidden).length) {
    prev = prev.concat(flatRoutes(children.filter(({ hidden }) => !hidden)));
  } else {
    prev.push(key);
  }
  return prev;
}, []);
const routeList = flatRoutes(routes);

export const routeChange = (direct, pathname) => {
  let index = routeList.findIndex(key => key === pathname);
  if (~index) {
    if (direct === 'back') {
      index--;
    } else {
      index++;
    }
    if (routeList[index]) {
      return history.push(routeList[index]);
    }
  } else {
    const parentPathname = pathname.replace(/\/[^\/]+$/, '');
    if (parentPathname) {
      routeChange(direct, parentPathname);
    }
  }
};

const flatRoutesWithTitle = list => list.reduce((prev, { key, title, children }) => {
  if (children?.length && children.filter(({ hidden }) => !hidden).length) {
    prev = prev.concat(flatRoutesWithTitle(children.filter(({ hidden }) => !hidden)));
  } else {
    prev.push({ key, title });
  }
  return prev;
}, []);

export const flatRoutesWithTitleList = flatRoutesWithTitle(routes);
