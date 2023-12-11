import React from 'react'
import { Menu } from 'antd'
import { HomeOutlined } from '@ant-design/icons'


const MenuList = () => {
  return (
    <Menu>
        <Menu.item key='Home' icon={<HomeOutlined />}>Home</Menu.item>
    </Menu>
  )
}

export default MenuList