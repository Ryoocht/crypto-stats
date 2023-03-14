import { Routes as ReactRouterRoutes, Route } from 'react-router-dom'
import LoginPage from '../pages/login-page'
import SignupPage from '../pages/signup-page'

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path='login' element={<LoginPage />} />
      <Route path='signup' element={<SignupPage />} />
    </ReactRouterRoutes>
  )
}

export default Routes
