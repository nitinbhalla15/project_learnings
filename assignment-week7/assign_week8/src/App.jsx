import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Question1 } from './custom-components/Question1'
import { ParaGenerator } from './custom-components/ParaGenerator'
import { BirthdayWish } from './custom-components/BirthdayWish'
import { Suspense } from 'react'
import { HappyBirthdayCard } from './custom-components/HappyBirthdayCard'
import { BirthdayCard } from './custom-components/BirthdayCard'

function App() {
  
  return (
    <Suspense fallback={"Loading..."}>
    <BrowserRouter>
      <Routes>
        <Route path='/question1&2' element={<Question1></Question1>}></Route>
        <Route path='/question4' element={<ParaGenerator></ParaGenerator>}></Route>
        <Route path="/question7" element={<BirthdayWish></BirthdayWish>}></Route>
        <Route path="/birthdayWishes" element={<HappyBirthdayCard>
          <BirthdayCard></BirthdayCard>
          <BirthdayCard></BirthdayCard>
          <BirthdayCard></BirthdayCard>
          <BirthdayCard></BirthdayCard>
        </HappyBirthdayCard>}></Route>
      </Routes>
    </BrowserRouter>
    </Suspense>
  )
}

export default App
