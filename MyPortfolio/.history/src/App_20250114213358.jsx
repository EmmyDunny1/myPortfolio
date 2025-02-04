import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'

const App = () => {
  return (
    <div>
    <div className=''> <Navbar/> </div>
    <div className='mt-[7rem] border-b border-solid border-pink-400 rounded-full pb-[3rem]'><HeroSection/> </div>
    <div className='border-b border-solid border-pink-400 rounded-full pb-[3rem]'><AboutMe/></div>
  <div> <Techstack/></div>
    </div>
  )
}

export default App
 