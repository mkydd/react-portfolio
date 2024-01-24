import React from 'react'
import { projects } from '../data/projectData'

function Projects() {
  

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => {
          return (
            <li key={project.name}>
              <h2>{project.name}</h2>
              <h3>Tech</h3>
              <ul>
                {project.tech.map(techItem => <li key={`${project.name}-${techItem}`}>{techItem}</li>)}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Projects