import React from 'react'
import { FiMinus } from 'react-icons/fi'


const AboutMe = () => {
  return (
    <div className=' mx-[7rem] mt-[5rem]'>
      <div className='flex mx-auto justify-center align-center'>
      <FiMinus className='h-[2.5px] w-[7rem] mt-5 mr-4 rounded-2xl bg-pink-400'/>
        <h1 className='text-gray-300 text-4xl pb-[2rem] font-bold'>  About Me </h1>
         <FiMinus className='h-[2.5px] w-[7rem] mt-5 ml-4 rounded-2xl bg-pink-400'/>
      </div> 
    <div className='flex'>
        <div className=''>
            <p className='text-gray-400 text-xl'>I'm Oluwadunsin Akinbo, a software developer currently spacialized <br />in frontend development, who has a keen eye for detail with a high <br />taste for captivating designs driven with strong passion for crafting <br />user-friendly websites for generation and business growth.
            <br />

               My Interest in web development began with key interest in graphic designs few years ago and then later UI/UX designs for responsive user-friendly designs. 
               

              If you're seeking a frontend developer who is passionate about building websites that drive business success, look no further. 

              Let's collaborate to bring your vision to life! I am ready to deliver. </p>
        </div>
        <div></div>

    </div>

    </div>
  )
}

export default AboutMe 
