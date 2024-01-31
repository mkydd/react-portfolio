import React from 'react'
import { NavLink } from 'react-router-dom'
import headshot from '../imgs/headshot.png'
import MenuButton from './MenuButton'

function Menu( {handleClick} ) {
  return (
    <div className='menu'>
      <div className="button-wrapper">
        <MenuButton handleClick={handleClick}/>
      </div>
      <div className="headshot">
        <img src={headshot} alt="headshot" srcset="" />
      </div>
      <div className='navlink-box-wrapper'>
        <div className="navlink-box">
          <NavLink to='/' className='navlink'>Home</NavLink>
          <NavLink to='/about' className='navlink'>About</NavLink>
          <NavLink to='/resume' className='navlink'>Resume</NavLink>
          <NavLink to='/projects' className='navlink'>Projects</NavLink>
          <NavLink to='/contact' className='navlink'>Contact</NavLink>
        </div>
      </div>
      <div className="footer">
        <p>Designed & Developed by</p>
        <p className='name'>Michael Kydd</p>
      </div>
    </div>
  )
}

export default Menu