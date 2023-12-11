import React from 'react'
import { Layout } from 'antd'
import './Sidenav.css'
import MenuList from './MenuList';


const {Header, Sider} = Layout;

const Sidenav = () => {
  return (
    <div className='app__sidebar'>
      <Layout>
        <Sider className='app__sidebar-sider'>Sidenav</Sider>
        <MenuList />
      </Layout>
    </div>
  )
}

export default Sidenav