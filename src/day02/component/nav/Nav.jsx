import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <nav className='nav-container'>
        <ul className='lnb'>
            <li><a href="#">File</a></li>
            <li><a href="#">Edit</a></li>
            <li><a href="#">Section</a></li>
            <li><a href="#">View</a></li>
            <li><a href="#">Go</a></li>
            <li><a href="#">Run</a></li>
        </ul>
    </nav>
  )
}

export default Nav