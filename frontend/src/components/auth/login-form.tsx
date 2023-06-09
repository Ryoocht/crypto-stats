import { Button, TextField, Link as MuiLink } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [emailErrored, setEmailErrored] = useState(false)

  const [password, setPassword] = useState('')
  const [passwordErrored, setPasswordErrored] = useState(false)

  const handleLogin = () => {
    if (!email) {
      setEmailErrored(true)
    } else {
      setEmailErrored(false)
    }
    if (!password) {
      setPasswordErrored(true)
    } else {
      setPasswordErrored(false)
    }
  }

  return (
    <div className='flex justify-center items-center flex-col h-screen gap-8'>
      <h1 className='text-6xl'>Crypto Stats</h1>
      <div className='flex flex-col gap-2'>
        <TextField
          label='Email'
          className='w-80'
          type='email'
          required
          helperText={emailErrored && 'Please enter a valid email'}
          value={email}
          error={emailErrored}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          label='Password'
          className='w-80'
          type='passowrd'
          required
          helperText={passwordErrored && 'Password may not be empty'}
          value={password}
          error={passwordErrored}
          onChange={e => setPassword(e.target.value)}
        />
        <Link to='/singup' className='justify-self-start self-start mt-2'>
          <MuiLink>Sing Up</MuiLink>
        </Link>
      </div>
      <Button variant='contained' className='w-80' onClick={handleLogin}>
        <span className='p-1'>Login</span>
      </Button>
    </div>
  )
}

export default LoginForm
