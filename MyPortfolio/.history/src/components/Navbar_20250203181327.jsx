import React from 'react'
import WEBCANIC from '../assets/WEBCANIC.png'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleMobileDrawer = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <div className='relative'>
      <nav className='fixed top-0 left-0 w-full bg-dark-navy shadow-sm shadow-black text-gray-300 z-10'>
        <div className="flex items-center justify-between py-4 mx-[4rem]">
          <div className="flex items-center">
            <img src={WEBCANIC} className= {`${mobileDrawerOpen? 'hidden' : 'flex'} h-[4rem] w-[4rem] object-cover ml-[-20%]`} alt="" />
          </div>
          <FiMenu className={`${mobileDrawerOpen ? 'hidden' : 'flex'} flex h-6 w-6 cursor-pointer`} onClick={toggleMobileDrawer} />
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="hover:text-green text-sm font-mono border-solid border-pink-300 rounded-md px-2">
              About
            </a>
            <a
              href="#experience"
              className="hover:text-green text-sm font-mono border-l-2 border-solid border-pink-300 rounded-md px-2">
              Experience
            </a>
            <a
              href="#work"
              className="hover:text-green text-sm font-mono border-l-2 border-solid border-pink-300 rounded-md px-2">
              Work
            </a>
            <a
              href="#tech-stack"
              className="hover:text-green text-sm font-mono border-l-2 border-solid border-pink-300 rounded-md px-2">
              Tech Stack
            </a>
            <a
              href="#contact"
              className="hover:text-green text-sm font-mono border-l-2 border-solid border-pink-300 rounded-md px-2">
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

      {mobileDrawerOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-20'  onClick={toggleMobileDrawer}></div>
      )}

      <div className={`${mobileDrawerOpen ?  'block' : 'hidden'} fixed ml-[10%]  top-0 left-0 w-3/4 h-full bg-dark-navy shadow-lg z-30`}>
        <div className="flex space-x-[10rem] items-center justify-between p-4">
          <img src={WEBCANIC} className='h-[4rem] w-[4rem] object-cover' alt="" />
          <FiX className='h-6 w-6 cursor-pointer bg-pink-500' onClick={toggleMobileDrawer} />
        </div>
        <div className="flex flex-col items-start space-y-4 p-4">
          <a href="#about" className="block w-full text-gray-300 hover:text-green text-sm font-mono">About</a>
          <a href="#experience" className="block w-full text-gray-300 hover:text-green text-sm font-mono">Experience</a>
          <a href="#work" className="block w-full text-gray-300 hover:text-green text-sm font-mono">Work</a>
          <a href="#tech-stack" className="block w-full text-gray-300 hover:text-green text-sm font-mono">Tech Stack</a>
          <a href="#contact" className="block w-full text-gray-300 hover:text-green text-sm font-mono">Contact</a>
          <a href="/resume.pdf" download className="block w-full text-gray-300 hover:text-green text-sm font-mono">Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
