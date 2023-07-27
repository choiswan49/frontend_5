import React, {useState} from 'react'
import './Collepse.css'

export const Collepse = () => {
    const [show, setShow] = useState(false);
    // state : 화면(UI) 갱신 필요 시 사용
    // show = false
    // setShow(true)
    // show = true

    let count = 0;
    const clickHandle = ()=>{
        count++;
        console.log('click : ', count);
    }

    const showHandle = ()=>{
        setShow(!show);
        console.log('show : ', show)
    }
  return (
    <div className="collepse">
        <div className="title" onClick={showHandle}>제목</div>
        <div className={show ? "content active" : "content"}
            // style={{display : show ? "block" : "none"}}
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum voluptates corrupti provident ratione velit nisi saepe repudiandae at consequuntur quibusdam ea, animi eum dolores, tenetur natus. Ex explicabo temporibus voluptatibus?</div>
    </div>
  )
}
