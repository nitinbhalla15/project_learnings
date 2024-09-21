import './App.css'
import DashboardPage from './custom-pages/DashboardPage'
import SignInPage from './custom-pages/SignInPage'
import SignUpPage from './custom-pages/SignUpPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/sign-up' element={<SignUpPage></SignUpPage>}></Route>
      <Route path='/sign-in' element={<SignInPage></SignInPage>}></Route>
      <Route path='/dashboard' element={<DashboardPage></DashboardPage>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App