import React from 'react'

function MenuButton( {handleClick} ) {
  return (
    <button className='menu-button' onClick={handleClick}>
      X
    </button>
  )
}

export default MenuButton