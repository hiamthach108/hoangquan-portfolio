import Image from 'next/image';

import React from 'react';

import AnimFade from '../animation/AnimFade';

const AboutWelcome = () => {
  return (
    <div className="w-full pb-10 md:pb-20">
      <div className="fluid-container flex flex-col-reverse md:flex-row gap-3 lg:gap-10 items-center">
        <div className="flex-1">
          <AnimFade direction="down" className="max-md:hidden">
            <h1 className="section-heading xl:text-4xl text-center">About Me</h1>
          </AnimFade>
          <div className="flex flex-col gap-3 mt-4">
            <AnimFade direction="down" delay={0.1}>
              <p className="text-justify text-base font-normal text-gray-600">
                Hello! My name is Pham Nguyen Hoang Quan. I was born on March 5, 2007, and
                I am currently a student at Luong The Vinh High School for the Gifted in
                Bien Hoa City, Dong Nai Province. With the motto &quot;Always strive, be
                persistent and believe in yourself,&quot; I consistently work hard to
                overcome challenges in life and achieve my ambitions. My future goal is to
                become a neurologist, assisting others in addressing mental health issues.
              </p>
            </AnimFade>
            <AnimFade direction="down" delay={0.14}>
              <p className="text-justify text-base font-normal text-gray-600">
                I have a passion for creativity and often engage in activities such as
                playing the piano and violin, along with painting. These hobbies help me
                relax and unleash my imaginative side. I also have a special friend at
                home—a little cat. He is always by my side whenever I feel stressed,
                bringing me comfort and companionship.
              </p>
            </AnimFade>
            <AnimFade direction="down" delay={0.16}>
              <p className="text-justify text-base font-normal text-gray-600">
                Please check out the attached video to learn more about me and what I am
                pursuing!
              </p>
            </AnimFade>
          </div>
        </div>

        <AnimFade direction="right" className="w-full md:w-[44%]">
          <Image
            src={'/hoangquan.jpg'}
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
