import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import TechStack from './components/TechStack'
import Project from './components/Project'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <About />
      <TechStack/>
      <Project/>
      <Contact/>
    
    </div>
  )
}

export default App
