import React from 'react'

function Projects() {
  const projects = [
    {
      name: 'React Calculator',
      img: '',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa nostrum maxime praesentium! Libero, doloribus deserunt. Praesentium voluptates consectetur aliquam?',
      url: 'https://',
      tech: [
        'ReactJS'
      ]
    }, 
    {
      name: 'Spotify Playlist Generator',
      img: '',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa nostrum maxime praesentium! Libero, doloribus deserunt. Praesentium voluptates consectetur aliquam?',
      url: 'https://',
      tech: [
        'ReactJS'
      ]
    }, 
    {
      name: 'Word Guessing Game',
      img: '',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa nostrum maxime praesentium! Libero, doloribus deserunt. Praesentium voluptates consectetur aliquam?',
      url: 'https://',
      tech: [
        'HTML',
        'CSS',
        'JavaScript'
      ]
    }, 
    {
      name: 'Final Grade Generator',
      img: '',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa nostrum maxime praesentium! Libero, doloribus deserunt. Praesentium voluptates consectetur aliquam?',
      url: 'https://',
      tech: [
        'Python',
        'Tkinter (Python Package)'
      ]
    }

  ]

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