import Image from 'next/image';

import React from 'react';

import ImgCarousel from '@/components/shared/ImgCarousel';

import AnimFade from '../animation/AnimFade';

import clsx from 'clsx';

const list: {
  id: number;
  title: string;
  content: string[];
  images?: string[];
}[] = [
  {
    id: 1,
    title: 'Foody Buddy',
    content: [],
    images: [],
  },
  {
    id: 2,
    title: 'Mid-Autumn Festival',
    content: [],
    images: [],
  },
  {
    id: 3,
    title: 'Music Do Wonder Charity',
    content: [],
    images: [],
  },
  {
    id: 4,
    title: 'Panacea',
    content: [],
    images: [],
  },
  {
    id: 5,
    title: 'Tet Gathering',
    content: [],
    images: [],
  },
];

const ActivityList = () => {
  return (
    <div className="w-full py-12">
      <div className="flex flex-col gap-4 md:gap-10">
        <div className="fluid-container">
          <h3 className="section-heading text-center">Foody Buddy</h3>
          <div className="mt-6">
            <ImgCarousel
              images={[
                '/extracurricular-activities/foody-buddy/1.JPG',
                '/extracurricular-activities/foody-buddy/2.JPG',
                '/extracurricular-activities/foody-buddy/3.JPG',
                '/extracurricular-activities/foody-buddy/4.JPG',
                '/extracurricular-activities/foody-buddy/5.JPG',
                '/extracurricular-activities/foody-buddy/6.JPG',
                '/extracurricular-activities/foody-buddy/7.JPG',
                '/extracurricular-activities/foody-buddy/8.JPG',
                '/extracurricular-activities/foody-buddy/9.JPG',
              ]}
            />
          </div>
        </div>
        <div className="fluid-container">
          <h3 className="section-heading text-center">Mid-Autumn Festival</h3>
          <div className="mt-6">
            <ImgCarousel
              images={[
                '/extracurricular-activities/mid-autumn-festival/1.JPG',
                '/extracurricular-activities/mid-autumn-festival/2.JPG',
                '/extracurricular-activities/mid-autumn-festival/3.JPG',
                '/extracurricular-activities/mid-autumn-festival/4.JPG',
                '/extracurricular-activities/mid-autumn-festival/5.JPG',
              ]}
            />
          </div>
        </div>
        <div className="fluid-container">
          <h3 className="section-heading text-center">Music Do Wonder Charity</h3>

          <div className="flex gap-6 mt-6 w-full">
            <div className="flex-1 flex">
              <Image
                src="/extracurricular-activities/music-do-wonder/1.JPG"
                alt="Music Do Wonder Charity"
                width={300}
                height={400}
                className="w-1/2 h-auto object-center object-cover"
              />
              <Image
                src="/extracurricular-activities/music-do-wonder/2.JPG"
                alt="Music Do Wonder Charity"
                width={300}
                height={400}
                className="w-1/2 h-auto object-center object-cover"
              />
            </div>
            <div className="relative w-1/2 h-[400px]">
              {/* <iframe
                src="https://player.vimeo.com/video/1020391518?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="Music Do Wonder Charity"
                className="w-full h-full absolute top-0 left-0"
              ></iframe> */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 w-full fluid-container">
        <div className="flex-1">
          <h3 className="section-heading text-center">Panacea</h3>

          <div className="w-full flex-1 flex gap-2 mt-4">
            <div className="flex-1">
              <Image
                src="/extracurricular-activities/panacea/1.JPG"
                alt="Panacea"
                width={400}
                height={400}
                className="w-full h-auto object-center object-cover"
              />
            </div>
            <div className="flex-1">
              <Image
                src="/extracurricular-activities/panacea/2.JPG"
                alt="Panacea"
                width={400}
                height={400}
                className="w-full h-auto object-center object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="section-heading text-center">Tet Gathering</h3>

          <div className="w-full flex-1 gap-2 mt-4">
            <Image
              src="/extracurricular-activities/tet-gathering/1.HEIC"
              alt="Tet Gathering"
              width={300}
              height={400}
              className="w-1/2 h-auto object-center object-cover"
            />
            <Image
              src="/extracurricular-activities/tet-gathering/2.HEIC"
              alt="Tet Gathering"
              width={300}
              height={400}
              className="w-1/2 h-auto object-center object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityList;
