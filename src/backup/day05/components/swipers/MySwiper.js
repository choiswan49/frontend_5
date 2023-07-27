import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

/*
npm i swiper
1. 원하는 컴포넌트 찾기
2. 코드 샌드박스
3. props. context
*/

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

import banners from '../../constants/banner'

const MySwiper = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };

  return (
    <div className="mySwiper-container">
        <Swiper navigation={true} modules={[Navigation, Pagination]}    className="mySwiper"
        pagination={pagination}
        >
            {
                banners.map((banner, index)=>(
                    <SwiperSlide>
                        <img src={banner} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

export default MySwiper