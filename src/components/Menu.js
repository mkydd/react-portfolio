import React from 'react'
import { NavLink } from 'react-router-dom'
import headshot from '../imgs/headshot.png'
import MenuButton from './MenuButton'

function Menu( {handleCloseClick} ) {
  return (
    <div className="another-menu-wrapper">
      <div className="menu-wrapper">
        <div className='menu'>
          <div className="headshot">
            <img src={headshot} alt="headshot" />
          </div>
          <div className='navlink-box-wrapper'>
            <div className="navlink-box">
              <NavLink 
                style={({ isActive }) => {
                  return isActive ? {
                    backgroundColor: '#037fff'
                  } : {}
                }}
                onClick={handleCloseClick} 
                to='/' 
                className='navlink'>Home</NavLink>
              <NavLink  
                style={({ isActive }) => {
                  return isActive ? {
                    backgroundColor: '#037fff'
                  } : {}
                }}
                onClick={handleCloseClick} 
                to='/about' 
                className='navlink'>About</NavLink>
              <NavLink  
                style={({ isActive }) => {
                  return isActive ? {
                    backgroundColor: '#037fff'
                  } : {}
                }}
                onClick={handleCloseClick} 
                to='/resume' 
                className='navlink'>Resume</NavLink>
              <NavLink  
                style={({ isActive }) => {
                  return isActive ? {
                    backgroundColor: '#037fff'
                  } : {}
                }}
                onClick={handleCloseClick} 
                to='/projects' 
                className='navlink'>Projects</NavLink>
              <NavLink  
                style={({ isActive }) => {
                  return isActive ? {
                    backgroundColor: '#037fff'
                  } : {}
                }}
                onClick={handleCloseClick} 
                to='/contact' 
                className='navlink'>Contact</NavLink>
            </div>
          </div>
          <div className="footer">
            <p>Designed & Developed by</p>
            <p className='name'>Michael Kydd</p>
          </div>
        </div>
        <div className="button-wrapper">
          <MenuButton handleClick={handleCloseClick}/>
        </div>
      </div>
    </div>
    
    
  )
}

export default Menu