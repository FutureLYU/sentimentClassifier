import React from 'react';
import { Menu } from 'antd';

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="introduction">
        <a href="/">Introduction</a>
      </Menu.Item>
      <Menu.Item key="model">
        <a href="/model">Prediction</a>
      </Menu.Item>
    
    </Menu>
  )
}

export default LeftMenu