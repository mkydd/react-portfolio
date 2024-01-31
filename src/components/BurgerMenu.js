import React, { useState } from 'react'
import Menu from './Menu'

function BurgerMenu() {
  const [pressed, setPressed] = useState(false)

  return (
    <div className='burger-menu'>
      <div className="nav">
        <button onClick={() => setPressed(!pressed)}>
          <hr />
          <hr />
          <hr />
          </button>
        {pressed ? <Menu /> : null}
      </div>
      
    </div>
  )
}

export default BurgerMenu