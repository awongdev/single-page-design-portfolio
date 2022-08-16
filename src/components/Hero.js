import React from 'react';
import Pattern from '../UI/Pattern';

const Hero = () => {
  return (
    <section className="mx-4 mt-8 flex justify-center md:mt-16 xl:mx-0">
      <div className="flex w-full max-w-1110 flex-col">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-16 lg:mb-20">
          <h1 className="mb-4 text-4xl font-bold md:mb-6 md:text-5xl lg:text-[3.5rem]">
            Design solutions made easy
          </h1>
          <p className="mx-7 text-gray md:text-lg">
            With over ten years of experience in various design disciplines, I’m
            your one-stop shop for your design needs.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-6 ">
          <Pattern
            pattern={'Graphic Design'}
            color={'bg-lavender'}
            styles={'col-span-2 row-span-2'}
          />
          <Pattern pattern={'UX/UI'} color={'bg-orange'} />
          <Pattern pattern={'Apps'} color={'bg-pink'} />
          <Pattern
            pattern={'Illustrations'}
            color={'bg-redOrange'}
            styles={'col-span-2'}
          />
          <Pattern
            pattern={'Photography'}
            color={'bg-teal'}
            styles={'col-span-2 lg:row-start-1 lg:col-start-5'}
          />
          <Pattern
            pattern={'Motion Graphics'}
            color={'bg-purple'}
            styles={'col-span-2'}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
