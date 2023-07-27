import React, {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import './Sidebar.css'

const Sidebar = () => {
    const [btnToggle, setBtnToggle] = useState(false);
  return (
    <div className={btnToggle ? 'sidebar-container active' : 'sidebar-container'}>
        {
            btnToggle ? 
            <FaTimes className='sideBtn'
                            onClick={()=>{setBtnToggle(!btnToggle)}}
            /> 
            : 
            <GiHamburgerMenu className='sideBtn'
                onClick={()=>{setBtnToggle(!btnToggle)}}
            />
        }
    </div>
  )
}

export default Sidebar