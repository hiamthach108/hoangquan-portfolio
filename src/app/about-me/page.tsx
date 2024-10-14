import { Metadata } from 'next';

import React from 'react';

import AboutGoal from '@/components/features/about-me/AboutGoal';
import AboutIntro from '@/components/features/about-me/AboutIntro';
import AboutWelcome from '@/components/features/about-me/AboutWelcome';

import { APP_NAME } from '@/config/constants/env.const';

export const metadata: Metadata = {
  title: `About Me | ${APP_NAME}`,
  description: 'Nguyen Cao Thien An. Life is but a breeze, so make the most of it',
};

const page = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <AboutWelcome />
      <AboutIntro />
      <AboutGoal />
    </div>
  );
};

export default page;
