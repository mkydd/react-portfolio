import React from 'react'
import { programming, web_database, frameworks, tech } from './skills'

function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <div>
        <div className='skills'>
          <h2>Skills</h2>
          <div>
            <h3>Programming</h3> 
            <ul>{programming.map(elem => <li key={elem}>{elem}</li>)}</ul>
          </div>
          <div>
            <h3>Web Database</h3> 
            <ul>{web_database.map(elem => <li key={elem}>{elem}</li>)}</ul>
          </div>
          <div>
            <h3>Frameworks</h3> 
            <ul>{frameworks.map(elem => <li key={elem}>{elem}</li>)}</ul>
          </div>
          <div>
            <h3>Tech</h3> 
            <ul>{tech.map(elem => <li key={elem}>{elem}</li>)}</ul>
          </div>
          
        </div>
        <div className='education'>
          <h2>Education</h2>
          <h3>2019 - 2023</h3>
          <h3>Bachelor of Science</h3>
          <h4>Sir Wilfrid Laurier University</h4>
        </div>
        <div className='work-experience'>
          <h2>Working Experience</h2>
          <h3>2021 - 2022</h3>
          <h3>Note Taker</h3>
          <h4>Sir Wilfrid Laurier University</h4>
        </div>
      </div>
    </div>
  )
}

export default Resume