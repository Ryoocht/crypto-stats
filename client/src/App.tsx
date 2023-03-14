import { Button, TextField, ThemeProvider } from '@mui/material'
import './index.css'
import LoginForm from './components/auth/login-form'
import { createTheme } from '@mui/material'
import Routes from './routes/routes'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
