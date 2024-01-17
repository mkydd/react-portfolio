import React from 'react'
import {NavLink} from 'react-router-dom'

function Menu() {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <br />
      <NavLink to='/about'>About</NavLink>
      <br />
      <NavLink to='/resume'>Resume</NavLink>
      <br />
      <NavLink to='/projects'>Projects</NavLink>
      <br />
      <NavLink to='/contact'>Contact</NavLink>
    </div>
  )
}

export default Menu