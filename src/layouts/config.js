import React from 'react';
import {
  AppstoreOutlined,
  FileTextOutlined,
  Html5Outlined,
  CodepenCircleOutlined,
  CodeOutlined,
  CalculatorOutlined,
  KeyOutlined,
  DatabaseOutlined,
  BookOutlined,
  RetweetOutlined,
  BranchesOutlined,
  ControlOutlined,
  NodeIndexOutlined,
  HistoryOutlined,
  ChromeOutlined,
  FolderOutlined,
  RiseOutlined,
  FireOutlined,
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
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

export default [{
  key: '/overview',
  title: '综述',
  icon: <AppstoreOutlined />,
  children: [{
    key: '/overview/preface',
    title: '前言',
    icon: <FileTextOutlined />,
  }, {
    key: '/overview/html',
    title: 'HTML',
    icon: <Html5Outlined />,
  }, {
    key: '/overview/css',
    title: 'CSS',
    icon: <CodepenCircleOutlined />,
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
    title: '条件',
    icon: <BranchesOutlined />,
  }, {
    key: '/lesson/loop',
    title: '循环',
    icon: <RetweetOutlined />,
  }, {
    key: '/lesson/scope',
    title: '作用域',
    icon: <ControlOutlined />,
  }, {
    key: '/lesson/prototype',
    title: '原型链',
    icon: <NodeIndexOutlined />,
  }, {
    key: '/lesson/async',
    title: '异步',
    icon: <HistoryOutlined />,
  }, {
    key: '/lesson/bom',
    title: 'BOM',
    icon: <ChromeOutlined />,
  }, {
    key: '/lesson/dom',
    title: 'DOM',
    icon: <FolderOutlined />,
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
  }, {
    key: '/frame/vue',
    title: 'Vue',
    icon: <SmileOutlined />,
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
  title: '实战练习',
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
    title: '总结',// 可视化库，canvas，视频，音频，富文本，刷题，设计模式，计算机底层原理
    icon: <FormOutlined />,
  }],
}];