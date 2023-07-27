import React from 'react'
import banner1 from '../assets/1025771674996577818.jpeg'
import banner2 from '../assets/1179738118976914914.jpg'
import banner3 from '../assets/1277497983932987640.jpg'
import banner4 from '../assets/1349386344726859889.jpg'
import imgs from '../constants/index'
import {img01, img02, img03, img04} from '../constants/assets'
import datas from '../constants/index03'

const Coins = () => {
  return (
    <div>
      <h2>public 폴더의 내용 사용하기</h2>
      <div>
        <img src='./images/40399306883854339.jpg'></img>
        <img src='./images/363016547038606841.jpg'></img>
        <img src='./images/683914404900459586.jpg'></img>
        <img src='./images/696983501767121951.jpg'></img>
      </div>
      <h2>assets : assets 이미지를 직접 import하여 사용</h2>
      <div>
        <img src={banner1} alt=''></img>
        <img src={banner2} alt=''></img>
        <img src={banner3} alt=''></img>
        <img src={banner4} alt=''></img>
      </div>
      <h2>constants로 만들어진 객체 사용하기 1</h2>
      <div>
        <img src={imgs.img01} alt=''></img>
        <img src={imgs.img02} alt=''></img>
        <img src={imgs.img03} alt=''></img>
        <img src={imgs.img04} alt=''></img>
      </div>
      <h2>constants로 만들어진 객체 중 필요한 것만 받아오기</h2>
      <div>
        <img src={img01} alt=''></img>
        <img src={img02} alt=''></img>
        <img src={img03} alt=''></img>
        <img src={img04} alt=''></img>
      </div>
      <h2>constants로 만들어진 배열로 사용하기</h2>
      <div>
        <img src={datas[0]} alt='설명'></img>
        <img src={datas[1]} alt='설명'></img>
        <img src={datas[2]} alt='설명'></img>
        <img src={datas[3]} alt='설명'></img>
      </div>
      <h2>constants로 만들어진 배열로 컴포넌트 표현</h2>
      <div>
        {
          datas.map((img, index)=>(
            <img src={img} alt=''></img>
          ))  
        }
      </div>
    </div>
  )
}

export default Coins