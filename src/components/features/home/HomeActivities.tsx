import Image from 'next/image';

import React from 'react';

import MyCarousel from '@/components/shared/MyCarousel';

const list = [
  {
    id: 1,
    title: 'Foody Buddy',
    position: 'Founder, President',
    imgList: [
      '/remarkable-activities/foody-buddy/buonmethuot.jpg',
      '/remarkable-activities/foody-buddy/dongnai.jpg',
      '/remarkable-activities/foody-buddy/hcmc.jpg',
    ],
    description:
      'A community initiative aimed at sharing insight about nutrition with people in rural and mountainous areas. We provided free meals to patients and organized workshops to promote healthy eating habits.',
  },
  {
    id: 2,
    title: 'Panacea - Remedy for Your Health',
    position: 'Founder',
    imgList: ['/remarkable-activities/panacea/1.jpg'],
    description:
      'A club specializing in marketing products made from nutritional grains. We launched the Munchies project, selling biscotti and granola to raise funds for charity, successfully generating 12,000,000 VND for UNICEF Vietnam.',
  },
  {
    id: 3,
    title: 'Music Do Wonder Charity Concert',
    position: 'Organizer',
    imgList: ['/remarkable-activities/music-do-wonder/1.jpg'],
    description:
      'We organized the charity concert “I See Your Voice” to support the Bung Sang Center for the Visually Impaired and raised more than 24,000,000 VND. I performed on the violin and participated in fun activities for children.',
  },
  {
    id: 4,
    title: 'Nutrition Education Workshops',
    position: 'Coordinator',
    imgList: ['/hoangquan.jpg'],
    description:
      'We organized workshops in Dak Lak and Dak Nong to raise awareness about nutrition among underprivileged families, empowering them with knowledge for healthier lifestyles',
  },
];

const HomeActivities = () => {
  return (
    <div className="py-10 md:py-20">
      <h3 className="section-heading text-center">Remarkable Activities</h3>
      <div className="mt-12">
        <MyCarousel
          components={[...list, ...list].map((item) => {
            return (
              <div
                key={item.id}
                className="block bg-white rounded-[4px] overflow-hidden w-full h-full"
              >
                <Image
                  src={item.imgList[0]}
                  width={400}
                  height={400}
                  alt={item.title}
                  className="h-auto w-full object-cover object-center aspect-square"
                />
                <div className="px-4 py-2">
                  <h3 className="font-heading">{item.title}</h3>
                  <h6 className="my-1 text-sm font-medium text-gray-600">
                    {item.position}
                  </h6>
                  <p className="text-sm text-justify">{item.description}</p>
                </div>
              </div>
            );
          })}
        ></MyCarousel>
      </div>
    </div>
  );
};

export default HomeActivities;
