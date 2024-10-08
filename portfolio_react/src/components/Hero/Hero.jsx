import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className='profile' src={profile_img} alt="" />
      <h1><span>Hello! </span>I'm Geesara De Silva </h1>
      <p>I am an undergraduate student at Sabaragamuwa University of Sri Lanka</p>
      <div className="hero-action">
      <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
      <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero