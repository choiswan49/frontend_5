import React, { useState } from 'react'
import './Accordion.css'

const Accordion = () => {
    const [show, setShow] = useState(0); // 경우의 수 4개: 1, 2, 3, 4 a, b, c, d
    const showHandle = (num)=>{
        setShow(num)
    }
  return (
    <div className='accrodion-container'>
        <div className="title" onClick={()=>setShow('a')}>1 제목</div>
        <div className={show==='a' ? "content active" : "content"}
        >1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum voluptates corrupti provident ratione velit nisi saepe repudiandae at consequuntur quibusdam ea, animi eum dolores, tenetur natus. Ex explicabo temporibus voluptatibus?</div>
        <div className="title" onClick={()=>setShow('b')}>2 제목</div>
        <div className={show==='b' ? "content active" : "content"}
        >2 amet consectetur adipisicing elit. Harum voluptates corrupti provident ratione velit nisi saepe repudiandae at consequuntur quibusdam ea, animi eum dolores, tenetur natus. Ex explicabo temporibus voluptatibus?</div>
        <div className="title" onClick={()=>setShow('c')}>3 제목</div>
        <div className={show==='c' ? "content active" : "content"}
        >3 Harum voluptates corrupti provident ratione velit nisi saepe repudiandae at consequuntur quibusdam ea, animi eum dolores, tenetur natus. Ex explicabo temporibus voluptatibus?</div>
        <div className="title" onClick={()=>setShow('d')}>4 제목</div>
        <div className={show==='d' ? "content active" : "content"}
        >4 ratione velit nisi saepe repudiandae at consequuntur quibusdam ea, animi eum dolores, tenetur natus. Ex explicabo temporibus voluptatibus?</div>
    </div>
  )
}

export default Accordion