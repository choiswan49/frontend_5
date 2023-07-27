import React,{ useState } from 'react'
import banners from '../constants/banner'
import './Slider.css'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import Indecators from './Indecators';

const Slider = () => {
  const [imgNum, setImgNum] = useState(0);

  const updateIndex = (index)=>{
    if( index < 0 ){
        index = 0;
    }else if( index > banners.length - 1){
        index = banners - 1
    }
    setImgNum(index);
}
  return (
    <div className='slider-container'>
      <div className='slider-box'
        style={{left : `-${imgNum*100}%`}}
      >
        {
          banners.map((banner, index)=>(
            <div className='slider-img'>
              <h2>{banner.title}</h2>
              <img src={banner.icon} />
              <div>{banner.description}</div>
            </div>
          ))
        }
      </div>
      <div class="btns">
        <BsArrowLeftSquareFill 
          className={imgNum === 0 ? 'left-btn btn active' : 'left-btn btn'}
          onClick={()=>{updateIndex(imgNum - 1)}}
        />
        <BsArrowRightSquareFill 
          className={imgNum === 3 ? 'right-btn btn active' : 'right-btn btn'}
          onClick={()=>{setImgNum(imgNum + 1)}}
        />
      </div>
      <Indecators banners={banners} 
        imgNum={imgNum} 
        updateIndex={updateIndex}
      />
    </div>
  )
}

export default Slider