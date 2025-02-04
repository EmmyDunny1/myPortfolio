import React from 'react'

const HeroSection = () => {
  return (
    <div className='block mx-[10rem] '>
      
      <div className=''>
        <span className='text-pink-300 text-xl '>Hi, welcome to my space!</span>
        <h1 className='text-7xl text-gray-300 pt-5 font-bold '>I'm Oluwadunsin Akinbo</h1>
        <h2 className='text-7xl text-gray-400 font-bold'>I build things for the web.</h2>

        <p className='text-2xl text-gray-400 py-5'>I’m a software engineer specializing in building and <br />occasionally designing exceptional digital experiences. <br />Currently, I’m focused on building accessible,<br /> human-centered products at Upstatement.</p>


      </div>

<button className='h-[3rem] w-[8rem] border-solid border-pink-400 border-2 text-pink-400 text-xl font-bold rounded-xl z-10'>Let's Talk</button>

<button className='h-[3rem] w-[8rem] bg-pink-400  text-pink-400 text-xl font-bold rounded-xl pb-5 ml-[] z-0'>Let's Talk</button>
  
    </div>
  )
}

export default HeroSection
