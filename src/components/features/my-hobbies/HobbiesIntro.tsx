'use client';

import Image from 'next/image';

import React from 'react';

import AnimFade from '../animation/AnimFade';

const HobbiesIntro = () => {
  const handleScroll = () => {
    const el = document.getElementById('hobbies-project');
    // el?.scrollIntoView({ behavior: 'smooth' });
    // scroll to view with offset of 100px
    window.scrollTo({
      top: (el?.offsetTop ?? 0) - 20,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="fluid-container pb-10 w-full min-h-[72vh]">
        <h1 className="section-heading-hand text-center">My Hobbies</h1>
        <AnimFade
          direction="down"
          className="w-full lg:w-[54%] flex flex-col gap-3 h-fit relative z-10 text-justify mx-auto mt-5"
        >
          <p>
            I always immerse myself in the sweet melodies from the violin, as music has
            become the language of my heart. Each time I draw the bow across the strings,
            I not only hear the sound but also feel the deep emotions I want to convey
            through every note.
          </p>
          <p>
            This is how I tell stories, how I share my joys and sorrows with the world.
            After each class, even if it&apos;s just a brief 1-2 hours, I dedicate myself
            entirely to the violin and that burning passion. For me, there is nothing
            happier than using my hands to bring beautiful emotions through each piece of
            music.
          </p>
        </AnimFade>

        <div
          onClick={() => {
            handleScroll();
          }}
          className="h-20 w-20 text-white flex items-center justify-center rounded-full mt-20 mx-auto cursor-pointer"
        >
          <Image
            src="/down-arrow.png"
            alt="Arrow Down"
            width={80}
            height={80}
            className=""
          />
        </div>
      </div>
    </>
  );
};

export default HobbiesIntro;
