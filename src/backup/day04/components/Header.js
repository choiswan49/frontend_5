import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import './Header.css'

/*
const Header = (props) => {
    // console.log('props', props)
    // console.log('logo', props.logo)
  return (
    <header>
        <div className="header-container">
            <Logo logo={props.logo}/>
            <Nav />
        </div>
    </header>
  )
}
*/

const Header = ({logo, theme}) => {
  return (
    <header className={theme ? "darkTheme" : null}>
        <div className={"header-container"}>
            <Logo logo={logo}/>
            <Nav theme={theme}/>
        </div>
    </header>
  )
}

export default Header