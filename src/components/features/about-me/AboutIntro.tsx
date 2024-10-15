import Image from 'next/image';

import React from 'react';

import AnimFade from '../animation/AnimFade';

const AboutIntro = () => {
  return (
    <div className="w-full py-10 md:py-16 bg-bg-sky text-center max-md:px-3">
      <div className="fluid-container flex gap-6 flex-col md:flex-row md:gap-10 items-end 2xl:px-24">
        <div className="w-full md:w-[50%] flex gap-3 md:gap-6">
          <AnimFade direction="up" className="w-[50%] flex gap-5">
            <Image
              src={'/thienan.jpg'}
              width={800}
              height={600}
              alt="Pham Nguyen Hoang Quan"
              className="w-full h-auto object-center object-cover"
            />
          </AnimFade>
          <div className="flex flex-col gap-3 md:gap-6 flex-1">
            <AnimFade direction="down">
              <Image
                src={'/about-me/3.jpg'}
                width={300}
                height={400}
                alt="About me 1"
                className="w-full h-auto object-center object-contain rounded-lg"
              />
            </AnimFade>
            <AnimFade direction="up" delay={0.1}>
              <Image
                src={'/about-me/4.jpg'}
                width={300}
                height={400}
                alt="About me 2"
                className="w-full h-auto object-center object-contain rounded-lg"
              />
            </AnimFade>
          </div>
        </div>

        <AnimFade direction="right" className="flex-1 text-left">
          <h1 className="section-heading mb-3 md:mb-6">A Brief Introduction</h1>
          <p className="text-sm md:text-base text-gray-800 text-justify">
            My name is Nguyễn Cao Thiên Ân, I was born on March 9, 2007, and I am
            currently studying at Asia International School. At this school, with its
            advanced and challenging learning environment, I have had the opportunity to
            cultivate essential skills and develop myself comprehensively.
          </p>
          <p className="my-1 md:my-3 text-sm md:text-base text-gray-800 text-justify">
            Studying here not only helps me discover my hidden potential but also
            motivates me to continually strive for improvement, engage in healthy
            competition, and build resilience. Every day, I put in my best effort to make
            the most of every opportunity that this modern school offers, from academic
            knowledge to life skills.
          </p>
          <p className="text-sm md:text-base text-gray-800 text-justify">
            Asia International School is where I can maximize my abilities, continually
            learn and improve myself, and open up future development opportunities.
          </p>
        </AnimFade>
      </div>
    </div>
  );
};

export default AboutIntro;
