import React from 'react';
import Carousel from '../UI/Carousel';

const Work = () => {
  return (
    <section className="mx-auto mb-24 flex  max-w-[103.125rem] justify-center overflow-hidden xl:mb-20">
      <div>
        <h2 className="mb-8 text-center text-2xl font-bold md:mb-14 md:text-[2rem]">
          My Work
        </h2>
        <Carousel />
      </div>
    </section>
  );
};

export default Work;
