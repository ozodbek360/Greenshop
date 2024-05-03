import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.scss';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true} 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        
        }}
        navigation={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider">
            <div className="slider_text">
              <h3>Welcome to GreenShop</h3>
              <h1> Let's Make A Better <span>Planet</span></h1>
              <p>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
              <button className='shopnow'>SHOP NOW</button>
            </div>
            <div className="slider_img">
              <img src="public/Images/slider1.png" alt="bu yerda rasm bor" className='img1' />
              <img src="public/Images/slider2.png" alt="bu yerda rasm bor" className='img2' />

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <div className="slider_text">
              <h3>Welcome to GreenShop</h3>
              <h1> Let's Make A Better <span>Planet</span></h1>
              <p>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
              <button className='shopnow'>SHOP NOW</button>
            </div>
            <div className="slider_img">
              <img src="public/Images/slider1.png" alt="bu yerda rasm bor" className='img1' />
              <img src="public/Images/slider2.png" alt="bu yerda rasm bor" className='img2' />

            </div>
          </div>
        </SwiperSlide> 
        <SwiperSlide>
          <div className="slider">
            <div className="slider_text">
              <h3>Welcome to GreenShop</h3>
              <h1> Let's Make A Better <span>Planet</span></h1>
              <p>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
              <button className='shopnow'>SHOP NOW</button>
            </div>
            <div className="slider_img">
              <img src="public/Images/slider1.png" alt="bu yerda rasm bor" className='img1' />
              <img src="public/Images/slider2.png" alt="bu yerda rasm bor" className='img2' />

            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
