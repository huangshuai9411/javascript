import React, { useMemo } from 'react';
import { Link, useLocation } from 'umi';
import { useLocalStorageState } from '@/hooks';
import { Button, Layout, Menu } from 'antd';
import config, { routeChange } from './config';
import styles from './index.less';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const filter = list => list.filter(({ hidden }) => !hidden);

const getMenus = list => filter(list).map(({ key, title, icon, children }) => {
  if (children?.length) {
    return <SubMenu key={key} icon={icon} title={title}>
    { getMenus(children) }
    </SubMenu>
  }
  return <Menu.Item key={key} icon={icon}>
    <Link to={key}>{ title }</Link>
  </Menu.Item>
});

function BasicLayout(props) {
  const location = useLocation();
  const selectedKeys = useMemo(() => [location.pathname], [location]);
  const defaultOpenKeys = useMemo(() => {
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
  }, [location]);
  const [collapsed, onCollapse] = useLocalStorageState('sider-collapsed');

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible defaultCollapsed={!!collapsed} onCollapse={onCollapse}>
        <div className={styles.logo}>frontend</div>
        <Menu theme="dark" className={styles['layout-sider-menu']} mode="inline" selectedKeys={selectedKeys} defaultOpenKeys={defaultOpenKeys}>
        {
          config |> getMenus
        }
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className={styles['layout-header']}>
          <Button onClick={() => routeChange('back')} type="text">上一节</Button>
          <Button onClick={() => routeChange('next', defaultOpenKeys)} type="text">下一节</Button>
        </Header>
        <Content className={styles['layout-content']}>
          { props.children }
        </Content>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
