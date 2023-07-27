import React, {useState} from 'react'
import { HiMoon, HiSun } from "react-icons/hi";
import './Theme.css'

const Thema = ({theme, setTheme}) => {
  return (
    <div className='themeBtn'
        onClick={()=>setTheme(!theme)}
        style={{backgroundColor : theme ? 'white' : ''}}
    >
      {
        !theme ? 
        <HiSun /> : 
        <HiMoon />
      }
    </div>
  )
}

export default Thema