import React from 'react'
import { FiMinus } from 'react-icons/fi'
import myImage from '../assets/myImage.jpg'


const AboutMe = () => {
  return (
    <div className=' mx-[7rem] mt-[5rem]'>
      <div className='flex mx-auto justify-center align-center'>
      <FiMinus className='h-[2.5px] w-[7rem] mt-5 mr-4 rounded-2xl bg-pink-400'/>
        <h1 className='text-gray-300 text-4xl pb-[2rem] font-bold'>  About Me </h1>
         <FiMinus className='h-[2.5px] w-[7rem] mt-5 ml-4 rounded-2xl bg-pink-400'/>
      </div> 
    <div className='flex gap-8'>
        <div className=''>
            <p className='text-gray-400 text-xl leading-normal justify-center '>I'm Oluwadunsin Akinbo, a software developer currently spacialized <br />in <span className='text-pink-400'>frontend development </span>
            , who has a keen eye for detail with a high <br />taste for captivating designs driven with strong passion for crafting <br />user-friendly websites for generation and business growth.
            <br />

               <span className='pt-10'>My Interest in web development began with key interest in graphic <br />designs few years ago and then later UI/UX designs for responsive <br />user-friendly designs.  </span>
               

              <br />If you're seeking a frontend developer who is passionate about <br /> building websites that drive business success, look no further. 
<br />
              Let's collaborate to bring your vision to life! I am ready to deliver. </p>
        </div>
        <div className='  relative hover:translate-y-2 border-solid pr-4 rounded-md border-pink-700 border-r-4 border-b-4 hover:translate-x-2 transition duration-300'>
            <img src={myImage} alt="my picture" className='object-cover h-[20rem] w-[20rem] items-center   transition-transform rounded-md ' />
        <div className='absolute inset-0 bg-pink-500 opacity-50 hover:opacity-10'>
         </div>

         {/* <div className=' h-[20rem] w-[20rem] border-solid border-pink-500 pt-10'></div> */}
        </div>

    </div>

    </div>
  )
}

export default AboutMe 
