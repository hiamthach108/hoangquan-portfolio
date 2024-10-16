'use client';

import Image from 'next/image';

import React from 'react';
import { Image as GalleryImage } from 'react-grid-gallery';

import ImgGallery from '@/components/shared/ImgGallery';

import AnimFade from '../animation/AnimFade';

const images: GalleryImage[] = [
  {
    src: '/about-me/hobbies/painting/digital-art/1.webp',
    height: 600,
    width: 600,
    alt: 'Digital Art 1',
  },
  {
    src: '/about-me/hobbies/painting/digital-art/2.webp',
    height: 428,
    width: 600,
    alt: 'Digital Art 2',
  },
  {
    src: '/about-me/hobbies/painting/digital-art/3.webp',
    height: 600,
    width: 428,
    alt: 'Digital Art 3',
  },
  {
    src: '/about-me/hobbies/painting/digital-art/4.webp',
    height: 428,
    width: 600,
    alt: 'Digital Art 4',
  },
  {
    src: '/about-me/hobbies/painting/hand-drawn-art/1.jpg',
    height: 690,
    width: 480,
    alt: 'Handle Drawn Art 1',
  },
  {
    src: '/about-me/hobbies/painting/hand-drawn-art/2.jpg',
    height: 690,
    width: 480,
    alt: 'Handle Drawn Art 2',
  },
  {
    src: '/about-me/hobbies/painting/hand-drawn-art/3.jpg',
    height: 690,
    width: 480,
    alt: 'Handle Drawn Art 3',
  },
];

const AboutHobbies = () => {
  return (
    <div className="w-full py-10 md:py-16 bg-white text-center max-md:px-3">
      <h1 className="section-heading mb-3 md:mb-6 text-center">My Hobbies</h1>

      <div className="fluid-container flex flex-col gap-6">
        <AnimFade direction="up">
          <p className="max-w-6xl mx-auto">
            Playing the piano and violin: I enjoy playing the piano and violin, as these
            instruments foster intelligence development, creative thinking, and
            relaxation. Playing music enhances memory, concentration, and dexterity while
            reducing stress and creating a joyful atmosphere. Practicing also nurtures
            perseverance and discipline, while boosting self-confidence in social
            situations.
          </p>
        </AnimFade>
        <AnimFade direction="up" delay={0.1}>
          <Image
            src="/hobby.png"
            alt="Hobby"
            width={80}
            height={80}
            className="mx-auto"
          />
        </AnimFade>
        <AnimFade direction="up" delay={0.2}>
          <p className="max-w-6xl mx-auto">
            Painting: Painting is a creative outlet that allows me to express my emotions
            and thoughts. I enjoy creating digital art, hand-drawn art, and sketches. This
            hobby helps me relax and unleash my imaginative side, fostering creativity and
            problem-solving skills. Painting also boosts my self-esteem and provides a
            sense of accomplishment.
          </p>
        </AnimFade>
        <AnimFade className="" direction="up" delay={0.21}>
          <ImgGallery images={images} />
        </AnimFade>
      </div>
    </div>
  );
};

export default AboutHobbies;
