import { Metadata } from 'next';

import React from 'react';

import ActivityList from '@/components/features/social-activities/ActivityList';

import { APP_NAME } from '@/config/constants/env.const';

export const metadata: Metadata = {
  title: `Social Activities | ${APP_NAME}`,
  description: 'Nguyen Cao Thien An. Life is but a breeze, so make the most of it',
};

const page = () => {
  return (
    <div className="min-h-screen text-center">
      <h1 className="section-heading-hand">Social Activities</h1>

      <ActivityList />
    </div>
  );
};

export default page;
