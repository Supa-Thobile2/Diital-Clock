import { useState } from 'react'
import image from './images/image.jpg'
import './App.css'



function App() {
  const  [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () =>{
    setIsVisible(!isVisible)
  }
  return (
   <div className=" md:w-80 mx-auto bg-white p-10">

    <img src={image} alt='photo' className='pb-20'/>

    <div className='flex justify-center items-center flex-col p-10 '>
      <h1 className='text-3xl text-bold'>Cristine Something</h1>
      <p>CyberSecurity Expert</p>
      {isVisible && <div className=' flex justify-center items-center gap-2 py-4'>
          <div className='bg-red-500 w-20 h-20 rounded-full border-2'>
              <p>Email: Chistinesome@nuttycode.co</p>
          </div>
          <div className='bg-red-500 w-20 h-20 rounded-full border-2'>
            Discord: Jsomething
          </div>
          <div className='bg-red-500 w-20 h-20 rounded-full border-2'>
            Twitter: RozeQuarts
          </div>
      </div>}
      
      <button className='py-6 px-8 bg-red m-8 w-50' onClick={toggleVisibility}>More</button>
    </div>
   
        
        
  </div>

  )
}

export default App
