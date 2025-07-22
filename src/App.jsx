import { useState } from 'react'
import image from './images/image.jpg'
import './App.css'



function App() {
  const  [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () =>{
    setIsVisible(!isVisible)
  }
  return (
   <div className=" w-70 mx-auto bg-white p-2">

    <img src={image} alt='photo' className='object-contain'/>

    <div className='flex justify-center items-center flex-col m-2'>
      <h1 className='text-2xl text-bold pt-2'>Cristine Something</h1>
      <p className='pb-2 text-base'>Cyber Security Expert</p>
      {isVisible && <div className=' flex justify-center items-center gap-2 my-4'>
          <div className='bg-red-500 w-10 h-10 rounded-full border-2 flex justify-center items-center'>
              icon
          </div>
          <div className='bg-red-500 w-10 h-10 rounded-full border-2 flex justify-center items-center'>
            icon
          </div>
          <div className='bg-red-500 w-10 h-10 rounded-full border-2 flex justify-center items-center'>
            icon
          </div>
      </div>}
      
      <button className='bg-blue-300 py-6 px-8 bg-red m-8 w-50 rounded-3xl pb-4' onClick={toggleVisibility}>More</button>
    </div>
   
        
        
  </div>

  )
}

export default App
