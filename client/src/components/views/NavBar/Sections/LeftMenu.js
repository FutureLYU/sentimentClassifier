import React from 'react';
import { Menu } from 'antd';

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="overview">
        <a href="/overview">overview</a>
      </Menu.Item>
      <Menu.Item key="sample submission">
        <a href="/sample">sample submission</a>
      </Menu.Item>
      <Menu.Item key="submit">
        <a href="/model">submit</a>
      </Menu.Item>
    </Menu>
  )
}

export default LeftMenu