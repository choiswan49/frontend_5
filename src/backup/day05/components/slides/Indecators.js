import React from 'react'
import './Indecators.css'

const Indecators = ({banners, imgNum, updateIndex}) => {
  return (
    <ul className='indecator'>
        {
          banners.map((banner, index)=>(
            <li className={imgNum===index ? 'active' : ''}
              onClick={()=>updateIndex(index)}
            >{index}</li>
          ))
        }
      </ul>
  )
}

export default Indecators