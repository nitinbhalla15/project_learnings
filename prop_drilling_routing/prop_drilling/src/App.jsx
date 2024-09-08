import React, { Suspense, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CountRender from './My-Components/CountRenders';
const Landing = React.lazy(() => import('./My-Components/Landing'));
const Dashboard = React.lazy(() => import('./My-Components/Dashboard'));
const TopBar = React.lazy(() => import('./My-Components/Top-Bar'));
const Count = React.lazy(() => import("./My-Components/Count"))
const Buttons = React.lazy(() => import("./My-Components/Buttons"))
import {CountContext} from './Contexts/context'
// function App() {

//   return <>
//       <Suspense fallback={"Loading..."}>
//       <BrowserRouter>
//       <TopBar></TopBar>
//         <Routes>
//           <Route path="/" element={<Landing/>} ></Route>
//           <Route path="/dashboard" element={<Dashboard/>}></Route>
//         </Routes>
//       </BrowserRouter>
//       </Suspense>
//   </>

//   }

function App() {
  const [count, setCount] = useState(0);
  return <>
    <CountContext.Provider value={count}>
      <CountRender setCount={setCount}></CountRender>
      {/* <Count count={count}></Count>
      <Buttons  setCount={setCount}></Buttons> */}
    </CountContext.Provider>
  </>
}


export default App
