import React, { useState } from 'react'
import Menu from './Menu'

function BurgerMenu() {
  const [pressed, setPressed] = useState(false)

  return (
    <div className='burger-menu'>
      <button onClick={() => setPressed(!pressed)}>Burger Menu</button>
      {pressed ? <Menu /> : null}
      <div className="burger-menu-button">
      </div>
    </div>
  )
}

export default BurgerMenu