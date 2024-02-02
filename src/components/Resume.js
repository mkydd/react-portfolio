import React from 'react'
import { programming, web_database, frameworks, tech } from '../data/skillsData'
import CVButton from './CVButton'
function Resume() {
  return (
    <div className='resume-page'>
      <div className='skills'>
        <h1>My Skills</h1>
        <div className='skill-category'>
          <h3>Programming</h3> 
          <ul>{programming.map(elem => <li key={elem}>{elem}</li>)}</ul>
        </div>
        <br />
        <div className='skill-category'>
          <h3>Web Database</h3> 
          <ul>{web_database.map(elem => <li key={elem}>{elem}</li>)}</ul>
        </div>
        <br />
        <div className='skill-category'>
          <h3>Frameworks</h3> 
          <ul>{frameworks.map(elem => <li key={elem}>{elem}</li>)}</ul>
        </div>
        <br />
        <div className='skill-category'>
          <h3>Tech</h3> 
          <ul>{tech.map(elem => <li key={elem}>{elem}</li>)}</ul>
      </div>

      <br />
      <br />
        
      </div>
      <div className='education'>
        <h1>Education</h1>
        <h2 className='year'>2019 - 2023</h2>
        <h2 className='degree'>Bachelor of Science</h2>
        <h3 className="program">Computer Science</h3>
        <h3 className='school'>Sir Wilfrid Laurier University</h3>
      </div>
      {/* <div className='work-experience'>
        <h2>Working Experience</h2>
        <h3>2021 - 2022</h3>
        <h3>Note Taker</h3>
        <h4>Sir Wilfrid Laurier University</h4>
      </div> */}

      <CVButton />
    </div>
  )
}

export default Resume