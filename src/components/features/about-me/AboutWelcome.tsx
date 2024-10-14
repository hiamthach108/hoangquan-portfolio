import Image from 'next/image';

import React from 'react';

import AnimFade from '../animation/AnimFade';

const AboutWelcome = () => {
  return (
    <div className="w-full pb-10 md:pb-20">
      <div className="fluid-container flex flex-col-reverse md:flex-row gap-3 lg:gap-10 items-center 2xl:px-24">
        <div className="flex-1">
          <AnimFade direction="down" className="max-md:hidden">
            <h1 className="section-heading-hand">Welcome to my world</h1>
          </AnimFade>
          <AnimFade direction="down" delay={0.1}>
            <p className="text-justify text-base xl:text-lg md:mt-6 mb-3 font-normal text-gray-600">
              I always believe that each of us is a precious gem, shining in our own
              unique way and carrying a personality full of colors that no one else has.
              This very difference not only makes life more vibrant but also serves as a
              powerful source of motivation for creative and explosive ideas. This is why
              I always take steps to seek, spread, and illuminate new inspirations.
            </p>
          </AnimFade>
          <AnimFade direction="down" delay={0.14}>
            <p className="text-justify text-base xl:text-lg  font-normal text-gray-600">
              So, let’s embark on an adventure into the colorful world called{' '}
              <span className="text-primary font-bold text-lg xl:text-2xl font-heading">
                Thiên Ân
              </span>
              , where every step leads you to wonderful surprises waiting ahead!
            </p>
          </AnimFade>
        </div>

        <AnimFade direction="right" className="w-full md:w-[40%]">
          <Image
            src={'/about-me/1.jpg'}
            width={800}
            height={600}
            alt="Welcome to my world"
            className="md:rounded-3xl object-cover object-center w-full h-auto"
          />
        </AnimFade>

        <AnimFade direction="down" className="md:hidden">
          <h1 className="section-heading-hand">Welcome to my world</h1>
        </AnimFade>
      </div>
    </div>
  );
};

export default AboutWelcome;
