import { useState } from 'react'
import image from './images/image.jpg'
import './App.css'



function App() {
  
  return (
   <div className="w-full flex items-center justify-center flex-col bg-white p-4">
    <div className='border-2 items-center bg-white dark:bg-gray-800 rounded-lg px-8 py-2 mx-8 ring shadow-xl ring-gray-900/5'>
        <div className='w-full overflow-hidden mx-auto md:w-90 lg:w-90 xl:w-90 rounded-top'>
            <img src={image} alt="" className='w-full  md:w-90 lg:w-90 xl:w-90 mx-auto'/>
        </div>
        <div className='text-center px-4 mx-4'>
            <h1 className='text-4xl p-8 font-bold shadow-2xl mb-6'>Christine Somebody</h1>
            <p className='text-center py-1 shadow-2xs'>Cybersecurity Expert</p>
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
