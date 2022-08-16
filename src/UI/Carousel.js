import React from 'react';
import slide1 from '../assets/image-slide-1.jpg';
import slide2 from '../assets/image-slide-2.jpg';
import slide3 from '../assets/image-slide-3.jpg';
import slide4 from '../assets/image-slide-4.jpg';
import slide5 from '../assets/image-slide-5.jpg';
import ArrowButton from './ArrowButton';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Carousel = () => {
  const slides = [slide1, slide2, slide3, slide4, slide5];
  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={15}
      centeredSlides={true}
      initialSlide={2}
      loop={true}
      freeMode={true}
      className="w-[16.875rem] overflow-visible md:w-full md:max-w-[33.75rem]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img
            src={slide}
            className="cursor-grab rounded-xl"
            alt={`Slide ${index + 1}`}
          />
        </SwiperSlide>
      ))}

      <div className="mt-8 flex justify-center gap-4 md:mt-14">
        <ArrowButton arrow="left"></ArrowButton>
        <ArrowButton arrow="right"></ArrowButton>
      </div>
    </Swiper>
  );
};

export default Carousel;
