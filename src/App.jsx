import { useState } from 'react'
import image from './images/image.jpg'
import './App.css'
import {MdEmail,MdPhone } from 'react-icons/md'
import {SiDiscord } from 'react-icons/si'



function App() {
  const  [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () =>{
    setIsVisible(!isVisible)
  }
  return (
   <div className=" w-80 mx-auto bg-white border-2 rounded-4xl">

    <img src={image} alt='photo' className='w-100 rounded-t-2xl block '/>

    <div className='flex justify-center items-center flex-col m-2 text-center'>
      <h1 className='text-[18px] text-bold pt-2'>Cristine Something</h1>
      <p className='p-2 text-base'>Cyber Security Expert</p>
      {isVisible && <div className=' flex justify-center items-center gap-2 py-4'>
          <div className=' w-5 h-5 rounded-full border-2 p-10 flex justify-center items-center hover:bg-red-500'>
              <MdEmail size={12}/>
          </div>
          <div className=' w-5 h-5 rounded-full border-2 p-4 flex justify-center items-center'>
            <SiDiscord size={12}/>
          </div>
          <div className=' w-5 h-5 rounded-full border-2 p-8 flex justify-center items-center'>
            <MdPhone size={12}/>
          </div>
      </div>}
      
      <button className='bg-blue-300 py-6 px-8 bg-red m-8 w-[80px] rounded-3xl pb-4' onClick={toggleVisibility}>More</button>
    </div>
   
        
        
  </div>

  )
}

export default App
