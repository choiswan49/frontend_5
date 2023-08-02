import React from 'react'
import './Header.css'
import { ThemeContext } from '../contexts/ThemeContext'
import { useContext } from 'react'
import Logo from './Logo'


const Header = () => {
  const {darkMode} = useContext(ThemeContext);
  return (
    <header
      className={darkMode ? 'darkMode' : ''}
    >
      < Logo />
    </header>
  )
}

export default Header