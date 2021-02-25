import React, { useMemo, useCallback } from 'react';
import { useHistory } from 'umi';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { logout } from '../api';

export default function () {
  const history = useHistory();
  const onOperate = useCallback(({key}) => {
    if (key === 'logout') {
      logout().then(() => {
        history.push('/login');
      });
    }
    if (key === 'change') {
      history.push('/login');
    }
  }, []);
  
  const menu = useMemo(() => (
    <Menu onClick={onOperate}>
      <Menu.Item key="logout">退出</Menu.Item>
      <Menu.Item key="change">切换账号</Menu.Item>
    </Menu>
  ), []);  
  
  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link">
        账号操作 <DownOutlined />
      </a>
    </Dropdown>
  )
}