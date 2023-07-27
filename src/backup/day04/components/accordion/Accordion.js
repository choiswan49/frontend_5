import React, { useState } from 'react'
import './Accordion.css'

// 객체 데이터를 표현

const Accordion = ({datas}) => {
  const [show, setShow] = useState(0);
  const showHandle = (num)=>{
      setShow(num)
  }
return (
  <div className='accrodion-container'>
      {
        datas.map((item, index)=>(
          <>
          <div className="title" 
                onClick={()=>setShow(index)}
          >
            {item.title}
          </div>
          <div className={show===index ? "content active" : "content"}
          >
            {item.content}
          </div>
          </>
        ))
      }
  </div>
)
}

export default Accordion