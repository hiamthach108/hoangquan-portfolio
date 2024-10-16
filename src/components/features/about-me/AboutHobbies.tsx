'use client';

import React from 'react';
import { Image } from 'react-grid-gallery';

import ImgGallery from '@/components/shared/ImgGallery';

const images: Image[] = [
  {
    src: '/about-me/hobbies/painting/digital-art/1.webp',
    height: 600,
    width: 600,
    alt: 'Digital Art 1',
    orientation: 1,
  },
  {
    src: '/about-me/hobbies/painting/digital-art/2.webp',
    height: 428,
    width: 600,
    alt: 'Digital Art 2',
    orientation: 1,
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

      <div className="fluid-container ">
        <p className="max-w-6xl mx-auto">
          Playing the piano and violin: I enjoy playing the piano and violin, as these
          instruments foster intelligence development, creative thinking, and relaxation.
          Playing music enhances memory, concentration, and dexterity while reducing
          stress and creating a joyful atmosphere. Practicing also nurtures perseverance
          and discipline, while boosting self-confidence in social situations.
        </p>
        <div className="my-6">
          <ImgGallery images={images} />
        </div>
        <p className="max-w-6xl mx-auto">
          I love drawing since it is a wonderful way to develop creativity and analytical
          thinking. It encourages me to pay meticulous attention to small details, thereby
          improving my focus and skillfulness. At the same time, painting serves as a
          means to relieve stress, express emotions, and cultivate patience.
        </p>
      </div>
    </div>
  );
};

export default AboutHobbies;
