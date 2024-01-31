import React from 'react'
import { NavLink } from 'react-router-dom'
import headshot from '../imgs/headshot.png'

function Menu() {
  return (
    <div className='menu'>
      <div className="headshot">
        <img src={headshot} alt="headshot" srcset="" />
      </div>

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