import React, { useMemo } from 'react';
import { Link, useLocation } from 'umi';
import { Layout, Menu } from 'antd';
import config from './config';
import styles from './index.less';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const getMenus = list => list.map(({ key, title, icon, children }) => {
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
    pathname.pop();
    return pathname.reduce((prev, cur) => {
      if (!prev.length) {
        return [`/${cur}`];
      }
      return prev.concat(prev[prev.length - 1] + `/${cur}`);
    }, []);
  }, [location]);
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div className={styles.logo}>我爱学前端</div>
        <Menu theme="dark" className={styles["layout-sider-menu"]} mode="inline" selectedKeys={selectedKeys} defaultOpenKeys={defaultOpenKeys}>
        {
          getMenus(config)
        }
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className={styles["layout-header"]}>
        </Header>
        <Content
          className={styles["layout-content"]}
          style={{
            margin: '14px 0 14px 14px',
            padding: 24,
            minHeight: 280,
          }}
        >
          { props.children }
        </Content>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
