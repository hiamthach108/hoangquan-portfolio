import Image from 'next/image';

import React from 'react';

import AnimFade from '../animation/AnimFade';

const HomeHero = () => {
  return (
    <div className="fluid-container flex items-center 2xl:max-w-[1640px] 2xl:pr-11 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8 max-md:px-3">
        <AnimFade direction="left" className="md:w-[40%]">
          <Image
            src={'/hoangquan.jpg'}
            alt="Pham Nguyen Hoang Quan"
            width={900}
            height={800}
            className="object-cover object-center w-full h-auto rounded-[20px] max-md:rounded-bl-none max-md:rounded-br-none"
          />
        </AnimFade>

        <div className="flex-1">
          <AnimFade direction="right">
            <h3 className="max-[350px]:text-6xl text-7xl lg:text-8xl text-primary font-hand tracking-wider max-md:text-center">
              Hello there!
            </h3>
          </AnimFade>

          <AnimFade
            direction="right"
            className="list-none text-gray-800 flex flex-col gap-2 text-justify"
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
              for children to researching innovative health solutions, I hope you&apos;ll
              find something inspiring in my story.
            </p>
            <p>
              Whether you’re just browsing or truly eager to explore, I’m delighted to
              have you here with me!
            </p>
          </AnimFade>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
