import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

import Btn from '@/components/shared/Btn/Btn';

import AnimFade from '../animation/AnimFade';

const HomeProject = () => {
  return (
    <div className="fluid-container text-center py-16">
      <h3 className="section-heading text-center underline-after">My Projects</h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-5xl mx-auto my-10">
        <AnimFade direction="up" className="w-full h-auto">
          <Image
            src="/thienan.jpg"
            alt="My Project"
            width={400}
            height={500}
            className="aspect-square w-full h-auto object-cover object-center"
          />
        </AnimFade>
        <AnimFade delay={0.1} direction="up" className="w-full h-auto">
          <Image
            src="/projects/1.jpg"
            alt="My Project"
            width={400}
            height={300}
            className="aspect-square w-full h-auto object-cover object-center"
          />
        </AnimFade>
        <AnimFade delay={0.14} direction="up" className="w-full h-auto">
          <Image
            src="/projects/5.jpg"
            alt="My Project"
            width={400}
            height={300}
            className="aspect-square w-full h-auto object-cover object-center"
          />
        </AnimFade>
        <AnimFade delay={0.18} direction="up" className="w-full h-auto">
          <Image
            src="/projects/3.jpg"
            alt="My Project"
            width={400}
            height={300}
            className="aspect-square w-full h-auto object-cover object-center"
          />
        </AnimFade>
        <AnimFade delay={0.22} direction="up" className="w-full h-auto">
          <Image
            src="/projects/8.jpg"
            alt="Project 1"
            width={400}
            height={300}
            className="aspect-square w-full h-auto object-cover object-center"
          />
        </AnimFade>
        <AnimFade delay={0.26} direction="up" className="w-full h-auto">
          <Image
            src="/projects/10.jpg"
            alt="My Project"
            width={400}
            height={300}
            className="aspect-square w-full h-auto object-cover object-center"
          />
        </AnimFade>
        <AnimFade delay={0.3} direction="up" className="w-full h-auto">
          <Image
            src="/projects/14.jpg"
            alt="My Project"
            width={400}
            height={300}
            className="aspect-square w-full h-auto object-cover object-center"
          />
        </AnimFade>
        <AnimFade delay={0.34} direction="up" className="w-full h-auto">
          <Image
            src="/projects/13.jpg"
            alt="My Project"
            width={400}
            height={300}
            className="aspect-square w-full h-auto object-cover object-center"
          />
        </AnimFade>
        <AnimFade delay={0.38} direction="up" className="w-full h-auto">
          <Image
            src="/projects/7.jpg"
            alt="My Project"
            width={400}
            height={300}
            className="aspect-square w-full h-auto object-cover object-center"
          />
        </AnimFade>
        <AnimFade delay={0.42} direction="up" className="w-full h-auto">
          <Image
            src="/projects/2.jpg"
            alt="My Project"
            width={400}
            height={300}
            className="aspect-square w-full h-auto object-cover object-center"
          />
        </AnimFade>
      </div>

      <Link href="/personal-projects" className="no-underline">
        <Btn>VIEW ALL</Btn>
      </Link>
    </div>
  );
};

export default HomeProject;
