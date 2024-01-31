import React from 'react'

function BurgerMenuButton( {handleClick} ) {
  return (
    <button className='burger-menu-button' onClick={handleClick}>
      <hr />
      <hr />
      <hr />
    </button>
  )
}

export default BurgerMenuButton