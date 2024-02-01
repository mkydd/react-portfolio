import React from 'react'
import { NavLink } from 'react-router-dom'
import headshot from '../imgs/headshot.png'
import MenuButton from './MenuButton'

function Menu( {handleCloseClick} ) {
  return (
    <div className='menu'>
      <div className="button-wrapper">
        <MenuButton handleCloseClick={handleCloseClick}/>
      </div>
      <div className="headshot">
        <img src={headshot} alt="headshot" srcset="" />
      </div>
      <div className='navlink-box-wrapper'>
        <div className="navlink-box">
          <NavLink onClick={handleCloseClick} to='/' className='navlink'>Home</NavLink>
          <NavLink onClick={handleCloseClick} to='/about' className='navlink'>About</NavLink>
          <NavLink onClick={handleCloseClick} to='/resume' className='navlink'>Resume</NavLink>
          <NavLink onClick={handleCloseClick} to='/projects' className='navlink'>Projects</NavLink>
          <NavLink onClick={handleCloseClick} to='/contact' className='navlink'>Contact</NavLink>
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