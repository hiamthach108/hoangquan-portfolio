import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

import { RESUME } from '@/config/constants/social.const';

import AnimFade from '../animation/AnimFade';
import AnimText from '../animation/AnimText';

const HomeHero = () => {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: 'url(/hoangquan.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="fluid-container flex items-center 2xl:max-w-[1640px] 2xl:pr-11 overflow-hidden h-full relative z-20">
        <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8 max-md:px-3">
          <div className="flex-1">
            <AnimText
              text="PHAM NGUYEN HOANG QUAN"
              className="max-[350px]:text-4xl text-5xl lg:text-5xl text-white font-heading tracking-wider"
            ></AnimText>

            <AnimFade
              direction="right"
              className="list-none text-white max-w-3xl flex flex-col gap-2 text-justify mt-4"
              delay={0.1}
            >
              <p>
                Welcome to my world! If you’re visiting this small corner, you might be
                searching for a fresh perspective on science, nutrition, or simply
                interested in the journey of a student passionate about creating positive
                social change.
              </p>
              <p>
                Please stay, and I’ll guide you through the accomplishments, projects and
                passions that have made my life vibrant. From organizing nutritious meals
                for children to researching innovative health solutions, I hope
                you&apos;ll find something inspiring in my story.
              </p>
              <p>
                Whether you’re just browsing or truly eager to explore, I’m delighted to
                have you here with me!
              </p>
            </AnimFade>
          </div>
        </div>
      </div>
      <div className="overlay z-10 bg-black bg-opacity-20 w-full h-full absolute left-0 right-0 top-0"></div>
    </div>
  );
};

export default HomeHero;
