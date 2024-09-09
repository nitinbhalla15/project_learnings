import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProfileComponent } from './components/ProfileComponent'
import { RecoilRoot } from 'recoil'

function App() {

  return <RecoilRoot>
    <ProfileComponent></ProfileComponent>
  </RecoilRoot>

}

export default App
