import React from 'react'
import images from '../../constants/images'

export const Navbar = () => {
  return (
    <div className='app__navbar'>
        <div className='app__navbar_logo'>
            <img src={images.logo}/>
        </div>

        <nav className='app__navbar'>
            <div className='app__navbar_menu'>
                <ul className='app__navbar_ul'>
                    <li className='app__navbar_links'></li>
                </ul>

            </div>
        </nav>
    </div>
  )
}
