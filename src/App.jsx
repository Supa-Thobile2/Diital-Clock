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
   <div className=" w-70 mx-auto bg-white p-[.4rem] border-2 rounded-4xl">

    <img src={image} alt='photo' className='w-100 rounded-t-4xl block '/>

    <div className='flex justify-center items-center flex-col m-4 text-center'>
      <h1 className='text-xl font-extrabold antialiased'>Cristine Something</h1>
      <p className=' text-xs font-medium'>Cyber Security Expert</p>
      {isVisible && <div className=' flex justify-center items-center gap-6 py-2'>
          <div className=' w-6 h-6  rounded-full border shadow-2xl flex justify-center items-center hover:bg-red-500'>
              <MdEmail size={12}/>
          </div>
          <div className=' w-6 h-6 rounded-full border shadow-2xl flex justify-center items-center'>
            <SiDiscord size={12}/>
          </div>
          <div className=' w-6 h-6 rounded-full border shadow-2xl  flex justify-center items-center'>
            <MdPhone size={12}/>
          </div>
      </div>}
      
      <button className='bg-blue-300 py-2 px-4 text-xs font-medium w-[8rem] mx-auto rounded-4xl text-xs' onClick={toggleVisibility}>More</button>
    </div>
   
        
        
  </div>

  )
}

export default App
