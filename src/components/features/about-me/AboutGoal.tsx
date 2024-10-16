import React from 'react';

import AnimFade from '../animation/AnimFade';

const AboutGoal = () => {
  return (
    <div className="w-full py-10 md:py-16">
      <AnimFade direction="up" className="text-center">
        <h1 className="section-heading mb-3 md:mb-6 text-center">
          The Future I Hope For
        </h1>
      </AnimFade>

      <AnimFade
        direction="up"
        className="flex-1 bg-white p-3 xl:p-8 shadow-2xl max-w-4xl mx-auto"
      >
        <p className="text-justify text-base xl:text-lg font-normal text-gray-600 italic">
          My dream is to become a neurologist, mastering not only professional knowledge
          but also effective treatment methods for patients. I aspire to contribute to the
          advancement of Vietnam’s medical field and support charitable initiatives,
          particularly in assisting children from disadvantaged areas with better
          opportunities for living and studying, enabling them to fulfill their dreams.
        </p>
      </AnimFade>
    </div>
  );
};

export default AboutGoal;
