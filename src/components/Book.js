import React from 'react';
import ConsultationButton from '../UI/ConsultationButton';

const Book = () => {
  return (
    <section className="mx-4 mb-10 flex justify-center text-center text-offWhite md:mb-14 lg:mx-0 lg:text-left">
      <div className="w-full max-w-1110 rounded-xl bg-black py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-20 lg:px-16">
        <div className="mx-auto max-w-[33.75rem] lg:mx-0">
          <h2 className="mb-6 text-[1.625rem] font-bold md:text-[2rem] xl:text-[2.5rem]">
            Book a call with me
          </h2>
          <p className="mb-6  md:text-lg lg:mb-0">
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
        </div>
        <ConsultationButton color={'orange'} />
      </div>
    </section>
  );
};

export default Book;
