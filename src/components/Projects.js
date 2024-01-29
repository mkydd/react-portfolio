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
                  {project.img ? <img src={project.img} alt={project.name} className={project.imgClassName}/> : null}
                </div>
                <h2>{project.name}</h2>
                {/* <div className="tech">
                  <p>Tech:</p>
                  {project.tech.map(techItem => <p>{techItem}</p>)}
                </div> */}
                <ul className='tech'>
                  <p>Tech:&nbsp;</p>
                  {project.tech.map((techItem, index) => {
                    if (index === project.tech.length - 1)
                      return <li key={`${project.name}-${techItem}`}>{techItem}</li>
                    else
                      return <li key={`${project.name}-${techItem}`}>{techItem},&nbsp;</li>
                  }
                    )}
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