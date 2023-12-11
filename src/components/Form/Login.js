import React, { useState } from 'react'
import LoginForm from './LoginForm'

const Login = () => {

    const [loggedIn, SetLoggedIn] = useState(true)


  return (
    <div>
        {loggedIn ? 
        (
        <div><LoginForm /></div>
        ) : (
        <div></div>
        )}
    </div>
  )
}

export default Login