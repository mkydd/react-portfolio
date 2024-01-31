import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

function MenuButton( {handleClick} ) {
  return (
    <button className='menu-button' onClick={handleClick}>
      <CloseIcon style={{fontSize: '2rem', color: '#313131', paddingTop: '0.2rem'}}/>
    </button>
  )
}

export default MenuButton