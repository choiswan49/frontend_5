import React from 'react'
import './Nav.css'

const Nav = ({theme}) => {
  return (
    <nav className='nav-container'>
      <ul className={theme ? 'lnb darkTheme' : 'lnb'}>
        <li><a href='#'>home</a></li>
        <li><a href='#'>board</a></li>
        <li><a href='#'>host</a></li>
        <li><a href='#'>about</a></li>
        <li><a href='#'>contect</a></li>
      </ul>
    </nav>
  )
}

export default Nav