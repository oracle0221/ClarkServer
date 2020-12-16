import React, {useState} from 'react'
import {useLocation, Route, useHistory} from 'react-router-dom'
import Resume from 'pages/resume/index'
import Position from 'pages/position/index'
import './index.scss'

import { Menu } from 'antd';
import {
  ContainerFilled,
  ContactsFilled,
} from '@ant-design/icons';

export default () => {

  const Location = useLocation();
  const History = useHistory();
  const [nowKey, setNowKey] = useState(Location.pathname);
  console.log(Location)

  return (
    <div className="box-wrapper" >
      <div className="box-nav" >
        <Menu
          style={{ width: 200, height:'100%', minHeight:"100vh" }}
          selectedKeys={[nowKey]}
          mode={'vertical'}
          theme={'dark'}
          onClick={(item)=>{
            setNowKey(item.key)
            History.push(item.key)
          }}
        >
          <Menu.Item key="/admin/resume" icon={<ContainerFilled />}>上传简历</Menu.Item>
          <Menu.Item key="/admin/position" icon={<ContactsFilled />}>发布职位</Menu.Item>
        </Menu>
      </div>
      <div className="box-content" >
          <Route path="/admin/resume" component={Resume} />
          <Route path="/admin/position" component={Position} />
      </div>
    </div>
  );
};
