import React from 'react'
import './Project.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import projects_data from '../../assets/projects_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Project = () => {
  return (
    <div className='project'>

      <div className="project-title">
        <h1>My latest Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="project-container">
        {projects_data.map((work,index) => {
          return <img key={index} src={work.w_img} alt="" />
        })}
      </div>

      <div className="project-showmore">
        <p>Show more</p>
        <img src={arrow_icon} alt="" />
      </div>
      
    </div>
  )
}

export default Project