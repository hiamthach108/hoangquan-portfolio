'use client';

import Image from 'next/image';

import React from 'react';
import { Gallery, Image as GalleryImage } from 'react-grid-gallery';

import ImgGallery from '@/components/shared/ImgGallery';

const imageList: GalleryImage[] = [
  {
    src: '/education/chemestry-competition-olympad.jpg',
    width: 400,
    height: 600,
  },
  {
    src: '/education/chemestry-competition.jpg',
    width: 400,
    height: 600,
  },
  {
    src: '/education/grade10.JPG',
    width: 400,
    height: 600,
  },
  {
    src: '/education/theoretical-online-chemistry-olympiad.jpg',
    width: 600,
    height: 400,
  },
  {
    src: '/education/grade12.jpg',
    width: 600,
    height: 400,
  },
];

const AchievementList = () => {
  return (
    <div className="bg-white py-10">
      <h2 className="text-center section-heading">HONOR & ACHIEVEMENTS</h2>
      <div className="p-10 flex gap-10">
        <div className="w-[50%]">
          <div className="flex gap-2">
            {imageList.slice(0, 3).map((image, index) => (
              <div className="flex-1" key={index}>
                <Image
                  key={index}
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-2">
            {imageList.slice(3, 5).map((image, index) => (
              <div className="flex-1" key={index}>
                <Image
                  key={index}
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <ul className="list-disc text-left text-base italic flex-1">
          <li>World Invention Creativity Olympic (WICO) - Gold Medal 2024</li>
          <li>
            International Math and Science Competitions (STEMCO) - Silver Medal 2024
          </li>
          <li>
            National Chemistry Talent Selection Competition - Honorable Mention 2024
          </li>
          <li>HSGS Olympiad | Silver Medal 2023</li>
          <li>Theoretical Online Chemistry Olympiad - Bronze Medal 2023</li>
          <li>School year 2021-2022 - Excellent student</li>
          <li>
            10th Grade Entrance Exam at Luong The Vinh High School for the gifted - Best
            Scorer 2022
          </li>
          <li>School year 2022-2023 - Excellent student</li>
          <li>12th-grade excellent student selection exam- Consolation prize 2023</li>
          <li>
            School Chemistry Competition for 10th Grade Students - Second Prize 2023
          </li>
          <li>School year 2023-2024 - Excellent student</li>
          <li>12th-grade excellent student selection exam- Second prize 2024</li>
          <li>Course Certificate for Chemicals and Health by Johns Hopkins 2024</li>
          <li>
            Course Certificate for Principles of Biochemistry by Harvard University 2024
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AchievementList;
