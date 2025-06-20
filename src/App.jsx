import { useState } from 'react'
import image from './images/image.jpg'
import './App.css'



function App() {
  
  return (
   <div className="w-full h-full mx-auto flex items-center justify-center flex-col bg-white shadow-lg px-4 py-6  rounded md:w-60">
    <div className='max-sw-sm rounded overflow-hidden shadow-lg h-full'>
        
            <img src={image} alt="" className='w-full  px-6 py-4 md:w-90 lg:w-90  xl:w-90 mx-auto object-fill'/>
        
        <div className='container w-full px-8 py-6 mx-4 text-center'>
            <h1 className='font-bold text-xl mb-2'>Christine Somebody</h1>
            <p className='text-gray -700 text-base py-4'>Cybersecurity Expert</p>
        </div>
        <div className=' bg-amber-50'>
       
        </div>
        <div className='px-6 pt-4 pb-2 text-center m-4'>
          <button class="bg-sky-500 hover:bg-sky-700 py-2  px-4 rounded">More...</button>
        </div>
    </div>
        
        
  </div>

  )
}

export default App
