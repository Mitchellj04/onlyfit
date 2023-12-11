import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./Login.css";

function Copyright() {
    return (
      <Typography variant="body2" color="white" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          OnlyFit
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
    const user = {
        username,
        password
    }

  
    const handleSignIn = (e) => {
        e.preventDefault()
    }
  
  
  

  return (
    <div className='app__loginForm section__padding'>
        <div className='app__loginForm-title'>
            <h3></h3>
        </div>
        <div className="app__loginForm-form">
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "red" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSignIn} noValidate sx={{ mt: 1 }}>
            <TextField
              sx={{bgcolor:'grey', color: 'white'}}
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              value={username}
              autoComplete="email"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              sx={{bgcolor:'grey', color: 'white'}}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={password}
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              // onClick={handleSignIn}
              sx={{ mt: 3, mb: 2, bgcolor: 'red'}}
            >
              Sign In
            </Button>

            <Typography sx={{color: 'white'}}><Link>Forgot Password?</Link></Typography>
            <Typography sx={{color: 'white'}}>Dont have an account? <Link>SignUp</Link></Typography>
            {/* {error.map((err) => {
              return <Alert key={err} severity='error'>{err}</Alert>
            })} */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
        </div>


    </div>
  )
}

export default LoginForm