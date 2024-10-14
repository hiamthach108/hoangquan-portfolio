import { Metadata } from 'next';

import React from 'react';

import HobbiesIntro from '@/components/features/my-hobbies/HobbiesIntro';
import HobbiesProjects from '@/components/features/my-hobbies/HobbiesProjects';
import HobbiesSports from '@/components/features/my-hobbies/HobbiesSports';

import { APP_NAME } from '@/config/constants/env.const';

export const metadata: Metadata = {
  title: `My Hobbies | ${APP_NAME}`,
  description: 'Nguyen Cao Thien An. Life is but a breeze, so make the most of it',
};

const page = () => {
  return (
    <div className="min-h-screen text-center relative">
      <HobbiesIntro />
      <HobbiesProjects />
      <HobbiesSports />
    </div>
  );
};

export default page;
