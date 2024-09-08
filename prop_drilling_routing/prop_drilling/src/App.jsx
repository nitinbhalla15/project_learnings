import React, { Suspense } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes}  from 'react-router-dom'
const Landing = React.lazy(()=> import('./My-Components/Landing'));
const Dashboard = React.lazy(()=> import('./My-Components/Dashboard'));
const TopBar = React.lazy(()=> import('./My-Components/Top-Bar'));

function App() {

  return <>
      <Suspense fallback={"Loading..."}>
      <BrowserRouter>
      <TopBar></TopBar>
        <Routes>
          <Route path="/" element={<Landing/>} ></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
      </Suspense>
  </>
    
  }

export default App
