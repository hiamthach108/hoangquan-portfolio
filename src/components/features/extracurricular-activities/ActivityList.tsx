import Image from 'next/image';

import React from 'react';

import ImgCarousel from '@/components/shared/ImgCarousel';

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

          <div className="flex gap-6 mt-6 w-full max-w-4xl mx-auto justify-center">
            <video controls>
              <source
                src="https://storage.googleapis.com/staging.thach-personal.appspot.com/music-do-wonder-charity.mp4"
                type="video/mp4"
              />
            </video>
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
                className="w-full h-auto object-center object-cover aspect-square"
              />
            </div>
            <div className="flex-1">
              <Image
                src="/extracurricular-activities/panacea/2.JPG"
                alt="Panacea"
                width={400}
                height={400}
                className="w-full h-auto object-center object-cover aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="section-heading text-center">Tet Gathering</h3>

          <div className="w-full flex-1 flex gap-2 mt-4">
            <div className="flex-1">
              <Image
                src="/extracurricular-activities/tet-gathering/1.webp"
                alt="Tet Gathering"
                width={400}
                height={400}
                className="w-full h-auto object-center object-cover aspect-square"
              />
            </div>
            <div className="flex-1">
              <Image
                src="/extracurricular-activities/tet-gathering/2.webp"
                alt="Tet Gathering"
                width={400}
                height={400}
                className="w-full h-auto object-center object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityList;
