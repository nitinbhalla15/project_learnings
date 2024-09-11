import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return <>
      {/* <div className='flex justify-between'>
            <div className='bg-red-700'>Hi there</div>
            <div className='bg-green-700'>Bye there</div>
            <div className='bg-green-700'>Go there</div>
      </div> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            <div className='bg-red-700'>Hi there</div>
            <div className='bg-blue-700 '>Hi there</div>
            <div className='bg-yellow-700 '>Hi there</div>
            <div className='bg-orange-700 '>Hi there</div>
            <div className='bg-pink-700 '>Hi there</div>
      </div>
  </>
}

export default App
