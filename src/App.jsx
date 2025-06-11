import { useState } from 'react'
   
import './App.css'



function App() {
  
  return (
   <div className="container h-full  flex items-center justify-center flex-col bg-white  w-screen border-2">
    <div className='border-2 items-center'>
        <div className='w-100 overflow-hidden'>
            <img src={img1} alt="" className='w-100 h-60 mx-auto'/>
        </div>
        <div className='py-4'>
            <h1 className='text-center py-1 text-lg font-bold shadow-2xl'>Christine Somebody</h1>
            <p className='text-center py-1 font-light font-medium shadow-2xs'>Cybersecurity Expert</p>
        </div>
        <div className='py-4 bg-amber-50 px-4'>
       
        </div>
        <div>
          
        </div>
    </div>
        
        
  </div>

  )
}

export default App
