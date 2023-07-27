import React, { useState } from 'react'
import './Accordion.css'

// 0 1 2 3
const titles = ['html', 'css','javascript', 'react']
const contents = ['html contents', 'css contents','javascript contents', 'react contents']
const Accordion = () => {
  const [show, setShow] = useState(0);
  const showHandle = (num)=>{
      setShow(num)
  }
return (
  <div className='accrodion-container'>
      {
        titles.map((title, index)=>(
          // 여러 개를 리턴해야할 때 <></>안에 넣기
          <>
          <div className="title" onClick={()=>setShow(index)}>{title}</div>
          <div className={show===index ? "content active" : "content"}
          >{contents[index]}</div>
          </>
        ))
      }
  </div>
)
}
/*
const Accordion = () => {
    const [show, setShow] = useState(0); // 경우의 수 4개: 1, 2, 3, 4 a, b, c, d
    const showHandle = (num)=>{
        setShow(num)
    }
  return (
    <div className='accrodion-container'>
        <div className="title" onClick={()=>setShow('a')}>{titles[0]}</div>
        <div className={show==='a' ? "content active" : "content"}
        >{contents[0]}</div>
        <div className="title" onClick={()=>setShow('b')}>{titles[1]}</div>
        <div className={show==='b' ? "content active" : "content"}
        >{contents[1]}</div>
        <div className="title" onClick={()=>setShow('c')}>{titles[2]}</div>
        <div className={show==='c' ? "content active" : "content"}
        >{contents[2]}</div>
        <div className="title" onClick={()=>setShow('d')}>{titles[3]}</div>
        <div className={show==='d' ? "content active" : "content"}
        >{contents[3]}</div>
    </div>
  )
}
*/

export default Accordion