import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Shop_slider.scss';

// import required modules
import {  Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
       slidesPerView={5}
       spaceBetween={60}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          
        modules={[Autoplay]}
        
       
      >
        <SwiperSlide><div className="box_s">
                <div className="image">
                <img src="public/Images/box1.png" alt="" />

                </div>
                <h3>Barberton Daisy</h3>
                <p>$119.00</p> 
                <div className="icons">

                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="box_s">
                <div className="image">
                <img src="public/Images/box2.png" alt="" />

                </div>
                <h3>Barberton Daisy</h3>
                <p>$119.00</p> 
                <div className="icons">

                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="box_s">
                <div className="image">
                <img src="public/Images/box3.png" alt="" />

                </div>
                <h3>Barberton Daisy</h3>
                <p>$119.00</p> 
                <div className="icons">

                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="box_s">
                <div className="image">
                <img src="public/Images/box4.png" alt="" />

                </div>
                <h3>Barberton Daisy</h3>
                <p>$119.00</p> 
                <div className="icons">

                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="box_s">
                <div className="image">
                <img src="public/Images/box5.png" alt="" />

                </div>
                <h3>Barberton Daisy</h3>
                <p>$119.00</p> 
                <div className="icons">

                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="box_s">
                <div className="image">
                <img src="public/Images/box6.png" alt="" />

                </div>
                <h3>Barberton Daisy</h3>
                <p>$119.00</p> 
                <div className="icons">

                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="box_s">
                <div className="image">
                <img src="public/Images/box7.png" alt="" />

                </div>
                <h3>Barberton Daisy</h3>
                <p>$119.00</p> 
                <div className="icons">

                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="box_s">
                <div className="image">
                <img src="public/Images/box8.png" alt="" />

                </div>
                <h3>Barberton Daisy</h3>
                <p>$119.00</p> 
                <div className="icons">

                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="box_s">
                <div className="image">
                <img src="public/Images/box9.png" alt="" />

                </div>
                <h3>Barberton Daisy</h3>
                <p>$119.00</p> 
                <div className="icons">

                </div>
            </div></SwiperSlide>
      </Swiper>
    </>
  );
}