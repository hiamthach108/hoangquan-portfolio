import { Metadata } from 'next';

import React from 'react';

import ActivityList from '@/components/features/extracurricular-activities/ActivityList';

import { APP_NAME } from '@/config/constants/env.const';

export const metadata: Metadata = {
  title: `Social Activities | ${APP_NAME}`,
  description: 'Pham Nguyen Hoang Quan. Life is but a breeze, so make the most of it',
};

const page = () => {
  return (
    <div className="min-h-screen text-center">
      <h1 className="section-heading text-center">PROJECTS OF MY MOST FAVORITE</h1>

      <div className="py-10 flex flex-col md:flex-row gap-10 fluid-container">
        <div className="flex-1 p-3 bg-white shadow-xl text-justify">
          <h4 className="text-xl text-primary font-heading mb-3 min-h-[56px]">
            Happy Meal Project
          </h4>
          <p>
            I gained valuable experience in organizing and implementing charitable
            initiatives within remote and impoverished rural areas. Although life there
            was challenging and resource-limited, the people I encountered were genuine
            and full of innocence.
          </p>
        </div>
        <div className="flex-1 p-3 bg-white shadow-xl text-justify">
          <h4 className="text-xl text-primary font-heading mb-3 ">
            Scientific Research Program with Professors from Prestigious U.S. Universities
          </h4>
          <p>
            I developed essential skills in conducting research, fostering creativity,
            cultivating perseverance, taking responsibility, meeting deadlines, and
            remaining receptive to feedback.
          </p>
        </div>
      </div>

      <ActivityList />
    </div>
  );
};

export default page;
