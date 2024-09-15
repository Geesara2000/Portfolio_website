import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Project from './components/Project/Project'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
    </div>
  )
}

export default App