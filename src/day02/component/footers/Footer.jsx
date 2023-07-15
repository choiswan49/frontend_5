import React from 'react'
import './Footer.css'

const Footer = () => {
    const today = new Date();
  return (
    <footer>
        copyright &copy; {today.getFullYear()}
    </footer>
  )
}

export default Footer