import React, {useState} from 'react'
import './Fade.css'
import imgs from '../../constants/index03'

const Fade = () => {
    const [fade, setFade] = useState(0);

    // setInterval(()=>{
    //     setFade(fade=>fade < 3 ? fade+1 : 0)
    // }, 3000)
    const prevHandle = ()=>{
        fade === 0 ? setFade(3) : setFade(fade-1)
    }
    const nextHandle = ()=>{
        fade < 3 ? setFade(fade+1) : setFade(0)
    }
  return (
    <div className='fade-container'>
        <button onClick={prevHandle}>이전</button>
        <button onClick={nextHandle}>이후</button>
        {
            imgs.map((img, index)=>(
                <div className={fade===index ? 'active' : ''}>
                    <img src={img} />
                </div>
            ))
        }
    </div>
  )
}

export default Fade