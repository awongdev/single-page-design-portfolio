import React from 'react';
import ImageAmy from '../assets/image-amy.webp';
import ConsultationButton from '../UI/ConsultationButton';

const About = () => {
  return (
    <section className="my-24 mx-4 flex justify-center md:mt-[8.5rem]">
      <div className="flex w-full max-w-1110 flex-col gap-10 md:flex-row  md:justify-between lg:gap-8">
        <img
          src={ImageAmy}
          alt="Amy"
          className="mx-auto w-full max-w-[22.75rem] md:mx-0 lg:max-w-[27.813rem]"
        />
        <div className="mx-auto flex max-w-[33.75rem] flex-col justify-center gap-6 text-center md:mx-0 md:text-left">
          <h2 className="text-[1.625rem] font-bold leading-10 md:text-[2.5rem]">
            I’m Amy, and I’d love to work on your next project
          </h2>
          <p className="text-gray md:text-lg">
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </p>
          <div>
            <ConsultationButton color={'orange'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
