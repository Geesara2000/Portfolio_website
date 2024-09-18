import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpeg' 

const About = () => {
  return (
    <div id='about' className='about'>

      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Hello! I'm Geesara De Silva, an undergraduate student at Sabaragamuwa University of Sri Lanka, following a degree in Computing and Information Systems.I have worked on various projects involving technologies like React, Node.js, JavaScript, and the MERN stack. My goal is to create impactful digital solutions that solve real-world problems.</p>
            <p>Feel free to explore my portfolio and check out the projects I’ve been working on!</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"90%"}} /></div>
            <div className="about-skill"><p>React Js</p><hr style={{width:"80%"}} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
            <div className="about-skill"><p>Node Js</p><hr style={{width:"50%"}} /></div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default About