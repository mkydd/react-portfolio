import React from 'react'
import { projects } from '../data/projectData'

function Projects() {
  

  return (
    <div className='projects-page'>
      <h1>Projects</h1>
      <ul className='project'>
        {projects.map(project => {
          return (
            <div className="project-info">
              <li key={project.name}>
                <div className="img-wrapper">
                  {project.img ? <img src={project.img} alt={project.name} /> : null}
                </div>
                <h2>{project.name}</h2>
                <h3>Tech</h3>
                <ul>
                  {project.tech.map(techItem => <li key={`${project.name}-${techItem}`}>{techItem}</li>)}
                </ul>
              </li>
              <a 
                href={project.githubURL}
                target="_blank" 
                rel="noreferrer" 
              >
                <button className='project-link-button'>View On Github</button>
              </a>
            </div>
            
          )
        })}
      </ul>
    </div>
  )
}

export default Projects