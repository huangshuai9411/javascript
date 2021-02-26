import React, { useMemo, useCallback, useState, useEffect } from 'react';
import { Link, useLocation } from 'umi';
import { useLocalStorageState } from '@/hooks';
import Helmet from '@/components/Helmet';
import { Button, Layout, Menu } from 'antd';
import config, { routeChange } from './config';
import Dropdown from './Dropdown';
import styles from './index.less';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const filter = list => list.filter(({ hidden }) => !hidden);

const getMenus = list => filter(list).map(({ key, title, icon, children }) => {
  if (children?.length && children.filter(({hidden}) => !hidden).length) {
    return <SubMenu key={key} icon={icon} title={title}>
    { getMenus(children) }
    </SubMenu>
  }
  return <Menu.Item key={key} icon={icon}>
    <Link to={key}>{ title }</Link>
  </Menu.Item>
});

function splitPathname(location) {
  const pathname = location.pathname.split('/').filter(e => e);
  if (pathname.length > 1) {
    pathname.pop();
  }

  return pathname.reduce((prev, cur) => {
    if (!prev.length) {
      return [`/${cur}`];
    }
    return prev.concat(prev[prev.length - 1] + `/${cur}`);
  }, []);
}


function BasicLayout(props) {
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState(() => splitPathname(location));
  const selectedKeys = useMemo(() => openKeys.filter(key => location.pathname.includes(key)).concat(location.pathname), [openKeys, location]);
  const [collapsed, onCollapse] = useLocalStorageState('sider-collapsed');
  const onOpenChange = useCallback((openKeys) => {
    setOpenKeys(openKeys);
  }, []);
  
  useEffect(() => {
    setOpenKeys(splitPathname(location));
  }, [location]);
  
  if (location.pathname === '/login') {
    return props.children;
  }

  return (<>
    <Helmet />
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible defaultCollapsed={!!collapsed} onCollapse={onCollapse}>
        <div className={styles.logo}>frontend</div>
        <Menu
          onOpenChange={onOpenChange} 
          theme="dark" 
          className={styles['layout-sider-menu']} 
          mode="inline" 
          selectedKeys={selectedKeys} 
          openKeys={openKeys}
        >
        { getMenus(config) }
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className={styles['layout-header']}>
          <Dropdown />
          <Button onClick={() => routeChange('back', location.pathname)} type="text">上一节</Button>
          <Button onClick={() => routeChange('next', location.pathname)} type="text">下一节</Button>
        </Header>
        <Content className={styles['layout-content']}>
          { props.children }
        </Content>
      </Layout>
    </Layout>
  </>);
}

export default BasicLayout;
