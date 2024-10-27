import React from 'react';

import AnimFade from '../animation/AnimFade';

const list = [
  {
    id: 1,
    title:
      'Effect of foliar application of calcium (Ca) and boron (B) on yield, quality, and postharvest shelf-life of Indian jujube (Ziziphus mauritiana L.) c.v. TNO1 in Ninh Thuan province.',
    position: 'Research Assistant',
    date: 'May 2024',
    content:
      'This study aimed to investigate the effects of Calcium (Ca) and Boron (B) on the yield, quality and postharvest shelf-life of Indian jujube TN01 (Ziziphus mauritiana L.). The experiments were conducted on a 6-year old apple garden. Spraying the combination of Ca and B on apples increases the fruiting rate, fruit weight, yield and quality. This includes higher levels of oBrix, vitamin C concentration, acidity reduction and reduction of damage during storage.',
  },
  {
    id: 2,
    title:
      'How do sleep disturbances affect cognitive functions and contribute to depression, and what are the underlying neurological mechanisms?',
    position: 'Author',
    date: 'June 2024 - Aug 2024',
    content:
      'A literature review will be used to identify different sleep disruptions and suggested interventions including pharmacological treatment, traditional medicine, and non-pharmacological treatment to improve the situation. Generally, sleep deprivation can be caused by various factors such as restless legs syndrome and sleep obstructive apnea. The mechanisms of these diseases are related mostly to hormonal changes and neurotransmitters.. This paper aims to define sleep disturbances and answer how sleep disturbances affect cognitive functions and contribute to depression; what the underlying neurological mechanisms of these sleep disturbances are as well as some treatment that can be used.',
  },
];

const EducationResearch = () => {
  return (
    <div className="py-10">
      <h2 className="text-center section-heading">RESEARCH</h2>

      <div className="fluid-container flex flex-col gap-10">
        {list.map((item) => (
          <AnimFade direction={'up'} key={item.id} className="w-full text-justify">
            <h3 className="text-xl text-primary font-heading">{item.title}</h3>
            <p className="text-sm text-gray-500 italic my-2">{item.position}</p>
            <p className="text-sm text-gray-500 mb-2">{item.date}</p>
            <p className="text-sm">{item.content}</p>
          </AnimFade>
        ))}
      </div>
    </div>
  );
};

export default EducationResearch;
