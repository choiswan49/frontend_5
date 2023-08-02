import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './NavBar.css'
import { ThemeContext } from '../contexts/ThemeContext'

const navs = ['main', 'coins', 'posts', 'about', 'contact', 'login']
const NavBar = () => {
  const {darkMode, setDarkMode} = useContext(ThemeContext);
  return (
    <nav className={darkMode ? 'darkMode lnb' : 'lnb'}>
      <ul>
        {
          navs.length && navs.map(nav=>(
            <li key={nav}>
              <NavLink to={nav}>{nav}</NavLink>
            </li>
          ))
        }
      </ul>

      <div className='darkmodeBtn'>
        <button 
          onClick={()=>setDarkMode(!darkMode)}
          className={darkMode ? 'darkMode' : ''}
          style={{border : darkMode ? `1px solid white` : `1px solid block`}}
        >
          {!darkMode ? 'dark':'normal'}
        </button>
      </div>
    </nav>
  )
}

export default NavBar