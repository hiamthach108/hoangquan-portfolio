import { Metadata } from 'next';

import React from 'react';

import AchievementList from '@/components/features/education/AchievementList';
import EducationList from '@/components/features/education/EducationList';
import Internship from '@/components/features/education/Internship';

import { APP_NAME } from '@/config/constants/env.const';

export const metadata: Metadata = {
  title: `Achievements | ${APP_NAME}`,
  description: 'Pham Nguyen Hoang Quan. Life is but a breeze, so make the most of it',
};

const page = () => {
  return (
    <div className="min-h-screen text-center overflow-hidden">
      <h1 className="section-heading-hand">Education</h1>
      <EducationList />
      <AchievementList />
      <Internship />
    </div>
  );
};

export default page;
