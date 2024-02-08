import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

function Home() {
  return (
    <div className='home'>
      <div className='content'>
        <div className='greeting'>
          <h1 className='introduction'>Hi, I am</h1>
          <h1 className='name'>Michael Kydd</h1>
        </div>
        <div className='about-me'>
          <p>I am a recent Computer Science graduate. I enjoy exploring diverse areas of technology. 
            Currently I most enjoy working on Front-End Development.</p>
        </div>
        <div>
          <a 
            href="http://github.com/mkydd" 
            target="_blank" 
            rel="noreferrer" 
            className='github-icon'
          >
            <GitHubIcon style={{fontSize: '3rem'}} />
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default Home