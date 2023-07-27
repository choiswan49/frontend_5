import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './NavBar.css'

const navs = ['main', 'coins', 'posts', 'about', 'contact', 'login']
const NavBar = () => {
  return (
    <nav>
      <ul>
        {
          navs.length && navs.map(nav=>(
            <li key={nav}>
              <NavLink to={nav}>{nav}</NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default NavBar