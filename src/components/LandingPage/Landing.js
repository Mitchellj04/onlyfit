import React from 'react'
import images from '../../constants/images' 
import './Landing.css'
import Login from '../Form/Login'

const Landing = () => {
  return (
    <div className='app__landing app__wrapper app__bg section__padding'>
        <div className='app__landing-logo  app__bg' >
            <div className='app__landing-logo-img'>
                <img src={images.logo}/>
            </div>
            <div>
                {/* <p>Sign In to gain access to fitness plans</p> */}
            </div>
        </div>
        <div className='app__landing-signin'>
            <div className='app__landing-signin-form'>
            <Login />
            </div>
        </div>
    </div>
  )
}

export default Landing