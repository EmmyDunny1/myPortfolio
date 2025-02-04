import React from 'react'
import WEBCANIC from '../assets/WEBCANIC.png'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-dark-navy text-gray-300 z-10">
    <div className=" flex items-center justify-between py-4 mx-[4rem]">
      <div className="flex items-center">
        
          <img src={WEBCANIC} className='h-[3rem] w-[3rem]' alt="" />
        
      </div>
      <div className="flex items-center space-x-8 ">
        <a
          href="#about"
          className="hover:text-green text-sm font-mono border-l-2 border-solid border-pink-400 rounded-md px-2 ">
           About
        </a>
        <a
          href="#experience"
          className="hover:text-green text-sm font-mono border-l-2 border-solid border-pink-400 rounded-md px-2">
           Experience
        </a>
        <a
          href="#work"
          className="hover:text-green text-sm font-mono border-l-2 border-solid border-pink-400 rounded-md px-2">
           Work
        </a>
        <a
          href="#contact"
          className="hover:text-green text-sm font-mono border-l-2 border-solid border-pink-400 rounded-md px-2">
           Contact
        </a>
        <a
          href="/resume.pdf"
          download
          className="border border-green text-pink-300 px-4 py-2 rounded text-sm font-mono hover:bg-green hover:text-dark-navy hover:shadow-sm hover:shadow-gray-300 hover:border-gray-300 hover:text-gray-300 transition border-pink-300">
          Resume
        </a>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
