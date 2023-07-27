import React, {useState} from 'react'
import { BsFillBagHeartFill } from "react-icons/bs";
import { BiAlarm } from "react-icons/bi";

/*
프레임워크
ant design
bootstrap
material Design

useState, props, context
hook : react 함수
useState, useRef, useEffect
*/
const Icons = () => {
    const [toggleColor, setToggleColor] = useState(true);
  return (
    <div>
        <BsFillBagHeartFill 
            size='3em' 
            color='red' 
            className='add-cart'
            title='add-cart'
        />
        <BiAlarm 
            size='3.3em'
            // color={toggleColor ? 'blue' : 'red'}
            style={{color : toggleColor ? 'blue' : 'red'}}
            onClick={()=>setToggleColor(!toggleColor)}
        />
    </div>
  )
}

export default Icons