import Image from 'next/image';

import React from 'react';

import AnimSlide from '../animation/AnimSlide';

const AboutGoal = () => {
  return (
    <div className="w-full pt-10 md:pt-16">
      <div className="fluid-container flex flex-col-reverse md:flex-row gap-3 md:gap-10 items-center 2xl:px-24 relative justify-end mb-10">
        <div className="w-full md:w-[50%] md:absolute left-[6%] top-1/2 md:-translate-y-1/2 z-20">
          <AnimSlide direction="left" className="flex-1 bg-white p-3 xl:p-8 shadow-2xl ">
            <p className="text-justify text-base xl:text-lg mb-3 font-normal text-gray-600 italic">
              &quot;In the near future, I aim to become an economic consultant at top
              companies, where I can contribute to strategic direction, optimize business
              processes, and promote sustainable development. I will always strive to
              learn, train, and develop extensive expertise in this field.
            </p>
            <p className='className="text-justify text-base xl:text-lg font-normal text-gray-600 italic'>
              With a strong passion for the business sector, I am always ready to face
              challenges, thereby accumulating practical experience and solid management
              knowledge. Once I have the capability and understanding, I will realize my
              bigger dream: to build and run my own business, with a vision to create
              long-term value for society and contribute positively to the development of
              the economy.&quot;
            </p>
          </AnimSlide>
        </div>

        <AnimSlide direction="right" className="w-full md:w-[50%]">
          <Image
            src={'/about-me/5.jpg'}
            width={1200}
            height={900}
            className="w-full h-auto object-cover object-center shadow-lg"
            alt="about me 5"
          />
        </AnimSlide>
      </div>

      <div className="w-full bg-white py-10">
        <div className="text-center">
          <h3 className="section-heading-hand text-6xl">Life Motto</h3>
          <p className="italic text-lg mt-3 text-gray-700">
            &quot;Life is but a breeze, so make the most of it&quot;
          </p>
        </div>
        <div className="mx-auto w-[30vw] h-[0.6px] bg-bg-sky my-6"></div>
        {/* <div className="mx-auto w-[0.6px] h-[42px] bg-bg-sky my-3"></div> */}

        <div className="text-center">
          <h3 className="section-heading-hand text-6xl">Goal</h3>
          <p className="text-lg max-w-4xl mx-auto italic mt-3 text-gray-700">
            &quot;I yearn to be someone who can connect people from all walks of life,
            cultures, and backgrounds through the power of music. My music is not just
            melodies; it is a universal language that helps bridge gaps, build
            understanding, and create a sense of harmony among different souls.&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutGoal;
