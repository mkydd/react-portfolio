import React from 'react'

function About() {
  return (
    <div>
      <h1>ABOUT ME</h1>
      {/* Insert Image of me here Maybe <img></img> */}
      <h2>I am Michael Kydd</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Rerum doloribus libero quibusdam at quae, beatae unde rem a non 
        suscipit eaque corrupti reprehenderit quasi autem!</p>
      <div className="about-me-info">
        <p><b>Full Name</b> : Michael Kydd</p>
        <p><b>Nationality</b> : Canadian</p>
        <p><b>Language(s)</b> : English</p>
        <p><b>Location</b>: Hamilton, ON, Canada</p>
        
        <p><b>Working Status</b>: Seeking Employment</p>
        <p>(Willing to Relocate)</p>
      </div>
    </div>
  )
}

export default About