import React from 'react'
import { Layout } from 'antd';
import { Menu } from 'antd'
import { Link } from "react-router-dom";
import { SettingOutlined,UserOutlined ,CopyOutlined} from '@ant-design/icons';
const {Sider } = Layout;

function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

export default function Sidebar() {
   
    const items = [
        getItem(<Link to={'/'}>داشبورد</Link>, '1'),
        getItem('لیست کاربران', 'sub1', <UserOutlined />, [
          getItem(<Link to={'/person'}>لیست کاربران</Link>, '1'), getItem(<Link to={'/person/New'}>افزودن کاربر</Link>, '2'), 'group']),

        getItem('لیست مقالات', 'sub2', <CopyOutlined />, [
          getItem(<Link to={'/post'}>لیست مقالات</Link>, '5'),
          getItem(<Link to={'/post/:id'}>افزودن مقاله</Link>, '6'),
        ]),
        getItem('تنظیمات', 'sub4', <SettingOutlined />, [
          getItem('ویرایش کاربر', '9'),
          getItem('حذف کاربر', '10'),
          getItem('ویرایش مقاله', '11'),
          getItem('حذف مقاله', '12'),
        ]),
      ];


  return (
    <div>
        <Sider>
        <Menu
    //   onClick={onClick}
      style={{
        width: 200,
      }}
      defaultSelectedKeys={['dashboard']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
        </Sider> 
    </div>
  )
}
