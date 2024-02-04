import React from 'react'
import CVButton from './CVButton'
import headshot from '../imgs/headshot.png'

function About() {
  return (
    <div className="about-me-wrapper">
      <h1>ABOUT ME</h1>
      <div className='about-me'>
        <div className="content">
          <div className="image-wrapper">
            <img src={headshot} alt='headshot' className='headshot' />
          </div>
          <div className="information">
            <h2>I am <span className='name'>Michael Kydd</span></h2>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Rerum doloribus libero quibusdam at quae, beatae unde rem a non 
              suscipit eaque corrupti reprehenderit quasi autem!</p>
            <div className="about-me-info">
              <p><b>Full Name</b> : Michael Kydd</p>
              <p><b>Nationality</b> : Canadian</p>
              <p><b>Language(s)</b> : English</p>
              <p><b>Location</b>: Hamilton, ON, Canada</p>
              
              <p><b>Working Status</b>: Seeking Employment</p>
            </div>
            <CVButton />
          </div>
          
        </div>
        
      </div>
    </div>
    
  )
}

export default About