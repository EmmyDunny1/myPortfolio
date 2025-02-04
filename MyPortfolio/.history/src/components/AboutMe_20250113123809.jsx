import React from 'react'
import { FiMinus } from 'react-icons/fi'


const AboutMe = () => {
  return (
    <div className='flex mx-[7rem] mt-[5rem]'>
      <div className='flex mx-auto justify-center align-center'>
      <FiMinus className='h-[2.5px] w-[7rem] mt-5 mr-4 rounded-2xl bg-pink-300'/>
        <h1 className='text-gray-300 text-4xl pb-[2rem]'>  About Me </h1>
         <FiMinus className='h-[2.5px] w-[7rem] mt-5 ml-4 rounded-2xl bg-pink-300'/>
      </div> 
      <div></div>

    </div>
  )
}

export default AboutMe 
