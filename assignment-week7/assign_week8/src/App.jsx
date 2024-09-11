import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Question1 } from './custom-components/Question1'
import { ParaGenerator } from './custom-components/ParaGenerator'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/question1&2' element={<Question1></Question1>}></Route>
        <Route path='/question4' element={<ParaGenerator></ParaGenerator>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
