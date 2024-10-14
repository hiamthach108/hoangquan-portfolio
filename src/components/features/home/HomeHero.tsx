import Image from 'next/image';

import React from 'react';

import AnimFade from '../animation/AnimFade';

const HomeHero = () => {
  return (
    <div className="fluid-container flex items-center 2xl:max-w-[1640px] 2xl:pr-11 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-10 xl:pl-12 max-md:px-3">
        <AnimFade direction="up" className="md:w-[40%] lg:w-1/3">
          <Image
            src={'/thienan.jpg'}
            alt="Nguyen Cao Thien An"
            width={900}
            height={800}
            className="object-cover object-center w-full h-auto rounded-[52px] max-md:rounded-bl-none max-md:rounded-br-none"
          />
        </AnimFade>

        <div className="">
          <AnimFade direction="up" delay={0.1}>
            <h3 className="max-[350px]:text-6xl text-7xl lg:text-8xl text-primary font-hand tracking-wider max-md:text-center">
              Describe myself
            </h3>
          </AnimFade>

          <div className="list-none text-gray-800 flex flex-col">
            <AnimFade
              direction="up"
              delay={0.13}
              className="text-justify italic flex gap-1 items-center text-xs md:text-sm lg:text-base"
            >
              <span className="text-4xl lg:text-5xl w-14 lg:w-12 text-center inline-block font-hand h-16">
                V
              </span>
              <span>
                igorous (Energetic, lively): I am always ready to express myself
                dynamically and energetically.
              </span>
            </AnimFade>
            <AnimFade
              direction="up"
              delay={0.15}
              className="text-justify italic flex gap-1 items-center text-xs md:text-sm lg:text-base"
            >
              <span className="text-4xl lg:text-5xl w-14 lg:w-12 text-center inline-block font-hand h-16">
                I
              </span>
              <span className="">
                nsightful (Logical thinking, quick to memorize): I have a logical mindset
                and the ability to retain information for a long time.
              </span>
            </AnimFade>
            <AnimFade
              direction="up"
              delay={0.2}
              className="text-justify italic flex gap-1 items-center text-xs md:text-sm lg:text-base"
            >
              <span className="text-4xl lg:text-5xl w-14 lg:w-12 text-center inline-block font-hand h-16">
                T
              </span>
              <span>
                uneful (Passionate about music): since childhood, I have had a strong
                passion for music.
              </span>
            </AnimFade>
            <AnimFade
              direction="up"
              delay={0.24}
              className="text-justify italic flex gap-1 items-center text-xs md:text-sm lg:text-base"
            >
              <span className="text-4xl lg:text-5xl w-14 lg:w-12 text-center inline-block font-hand h-16">
                A
              </span>
              <span>
                miable (Friendly, sociable): I easily connect with people and blend well
                with my friends.
              </span>
            </AnimFade>
            <AnimFade
              direction="up"
              delay={0.28}
              className="text-justify italic flex gap-1 items-center text-xs md:text-sm lg:text-base"
            >
              <span className="text-4xl lg:text-5xl w-14 lg:w-12 text-center inline-block font-hand h-16">
                L
              </span>
              <span>
                oyal (Dedicated to contributing to society): I always want to contribute
                and bring positive value to society.
              </span>
            </AnimFade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
