import { useState } from 'react'
import image from './images/image.jpg'
import './App.css'



function App() {
  
  return (
   <div className="container flex items-center justify-center flex-col bg-white py-4 px-5">
    <div className='border-2 items-center bg-white dark:bg-gray-800 rounded-lg px-2 py-2 mx-8 ring shadow-xl ring-gray-900/5'>
        <div className='h-60 overflow-hidden'>
            <img src={image} alt="" className='w-60 mx-auto'/>
        </div>
        <div className='py-4'>
            <h1 className='text-center py-1 text-lg font-bold shadow-2xl'>Christine Somebody</h1>
            <p className='text-center py-1 font-light font-medium shadow-2xs'>Cybersecurity Expert</p>
        </div>
        <div className='py-4 bg-amber-50 px-4'>
       
        </div>
        <div className='flex items-center justify-center flex-col my-2'>
          <button class="bg-sky-500 hover:bg-sky-700 py-2 rounded-3xl px-4">More...</button>
        </div>
    </div>
        
        
  </div>

  )
}

export default App
