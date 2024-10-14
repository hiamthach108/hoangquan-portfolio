import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

import Btn from '@/components/shared/Btn/Btn';

import AnimSlide from '../animation/AnimSlide';

const HomeAchievement = () => {
  return (
    <div className="w-full py-10 md:py-16 bg-bg-sky text-center mt-10 md:mt-16">
      <h3 className="section-heading text-center">Achievements</h3>

      <div className="grid max-[425px]:grid-cols-1 grid-cols-2 gap-4 md:gap-24 max-w-3xl mx-auto mt-10 px-4">
        <AnimSlide
          direction="left"
          className="p-8 bg-white w-full flex flex-col gap-12 items-center"
        >
          <h4 className="font-heading uppercase text-2xl">Academic</h4>

          <Image
            src="/education.png"
            alt="Academic"
            width={400}
            height={300}
            className="aspect-square h-auto object-cover object-center w-28"
          />

          <Link href="/achievements">
            <Btn>EXPLORE</Btn>
          </Link>
        </AnimSlide>
        <AnimSlide
          direction="right"
          className="p-8 bg-white w-full flex flex-col gap-12 items-center"
        >
          <h4 className="font-heading uppercase text-2xl">Talents</h4>

          <Image
            src="/music.png"
            alt="Academic"
            width={400}
            height={300}
            className="aspect-square h-auto object-cover object-center w-28"
          />
          <Link href="/my-hobbies">
            <Btn>EXPLORE</Btn>
          </Link>
        </AnimSlide>
      </div>
    </div>
  );
};

export default HomeAchievement;
