import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intermediate from './Components/Intermediate'
import { RecoilRoot } from 'recoil'
import TodoSubmittion from './Components/TodoSubmittion'
import TodoSearchBar from './Components/TodoSearchBar'
import TodoRender from './Components/TodoRender'
import { FilteredComponent } from './Components/FilteredTodos'
import { AllTodoComponent } from './Components/AllTodoComponent'

function App() {
  console.log("App re-renders")
  return <>
    <RecoilRoot>
      <div style={{ display: 'flex' }}>
        <AllTodoComponent></AllTodoComponent>
        <FilteredComponent></FilteredComponent>
      </div>
    </RecoilRoot>
  </>
}

export default App
