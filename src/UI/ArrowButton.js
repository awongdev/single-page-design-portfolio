import React from 'react';
import LeftArrow from '../assets/icon-arrow-left.svg';
import RightArrow from '../assets/icon-arrow-right.svg';
import { useSwiper } from 'swiper/react';

const ArrowButton = (props) => {
  const swiper = useSwiper();
  const arrows = {
    left: LeftArrow,
    right: RightArrow,
  };
  return (
    <button
      className="relative h-16 w-16 rounded-full bg-black transition-all duration-300 ease-out hover:bg-lavender"
      onClick={() => {
        props.arrow === 'left' ? swiper.slidePrev() : swiper.slideNext();
      }}
    >
      <img
        src={arrows[props.arrow]}
        className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
        alt="Arrow"
      />
    </button>
  );
};

export default ArrowButton;
