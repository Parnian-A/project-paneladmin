import React from 'react'
import { Layout } from 'antd';
const { Header : AntHeader} = Layout;

export default function Header() {
  return (
    <div>
        <AntHeader className='header'>
            <h2>داشبورد مدیریتی</h2>
        </AntHeader>
    </div>
  )
}
