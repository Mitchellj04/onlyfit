import React from 'react'
import images from '../../constants/images'
import './Navbar.css'
import Sidebar from '../Sidebar/Sidenav'

export const Navbar = () => {
  return (
    <div className='app__navbar'>
        <div className='app__navbar_logo'>
            <img src={images.logo}/>
        </div>

        <nav className='app__navbar'>
            <div className='app__navbar_menu'>
                <ul className='app__navbar_ul'>
                    <li className='app__navbar_links'><a href=''>Home</a></li>
                </ul>

            </div>
        </nav>
    </div>
  )
}
