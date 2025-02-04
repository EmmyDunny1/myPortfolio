import React from 'react'
import { FiMinus } from 'react-icons/fi'


const AboutMe = () => {
  return (
    <div className='flex mx-[7rem] mt-[5rem]'>
      <div className='flex mx-auto justify-center align-center'>
      <FiMinus className='h-[2.5px] w-[7rem] mt-auto bg-gray-300'/>
        <h1 className='text-gray-300 text-4xl pb-[2rem]'>  About Me </h1>
      </div> 
      <div></div>

    </div>
  )
}

export default AboutMe 
