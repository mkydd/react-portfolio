import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

function Home() {
  return (
    <div>
      <div>
        <h1>Hi, I am <div>Michael Kydd</div></h1>
      </div>
      <div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Dolorum impedit sed unde excepturi vel explicabo quaerat quam 
          quidem vero, rem commodi id amet ducimus optio?</p>
      </div>
      <div>
        <a href="http://github.com/mkydd" target="_blank" rel="noreferrer"><GitHubIcon /></a>
      </div>
    </div>
  )
}

export default Home