import React from 'react';

import ImgCarousel from '@/components/shared/ImgCarousel';

import AnimFade from '../animation/AnimFade';

import clsx from 'clsx';

const list: {
  id: number;
  title: string;
  content: string[];
  images?: string[];
}[] = [
  {
    id: 1,
    title: 'Buon Ma Thuot',
    content: [
      `"A Journey Through Vietnam's Central Highlands" takes place from June 10 to 12, 2024. Arriving in Buon Ma Thuot, I will experience the traditional culture of the area. I will participate in specific activities and stages of mushroom cultivation, engage in cultural practices, and interact with and distribute gifts to underprivileged children.`,
    ],
    images: [
      '/social-activities/15.jpg',
      '/social-activities/16.jpg',
      '/social-activities/17.jpg',
      '/social-activities/18.jpg',
      '/social-activities/15.jpg',
      '/social-activities/16.jpg',
      '/social-activities/17.jpg',
      '/social-activities/18.jpg',
    ],
  },
  {
    id: 2,
    title: 'Cu Chi',
    content: [
      `In Cu Chi, I participate in organizing activities for children, creating exercise sessions and a playground for underprivileged kids. Additionally, I have the opportunity to personally deliver small gifts to families in difficult circumstances. This has been a meaningful part of my journey.`,
    ],
    images: [
      '/social-activities/15.jpg',
      '/social-activities/16.jpg',
      '/social-activities/17.jpg',
      '/social-activities/18.jpg',
      '/social-activities/15.jpg',
      '/social-activities/16.jpg',
      '/social-activities/17.jpg',
      '/social-activities/18.jpg',
    ],
  },
  {
    id: 3,
    title: 'Dem nhac gay quy \n "I CAN SEE YOUR VOICE"',
    content: [
      'I participated in selling dried mangoes, peanuts, and tickets for a charity concert to raise funds for the children at the "Bừng Sáng" shelter for the visually impaired. It feels so heartwarming to know that thanks to my efforts and those of others, over 24 million VND has been donated! I feel very proud to have contributed my small part to such a meaningful goal.',
      'Not only did I sell items to raise funds, but I also performed on the violin during the fundraising concert on June 1, 2024. Everyone listened attentively, and I felt that I was able to convey my music and love to the children.',
      'Afterward, I participated in giving gifts and playing with the kids at the "Bừng Sáng" shelter. They are incredibly adorable, and every time I tell stories or play with them, their joyful laughter fills the air, making me feel truly happy! Those moments will always be cherished memories in my heart.',
    ],
    images: [
      '/social-activities/22.jpg',
      '/social-activities/23.jpg',
      '/social-activities/24.jpg',
      '/social-activities/18.jpg',
      '/social-activities/22.jpg',
      '/social-activities/23.jpg',
      '/social-activities/24.jpg',
      '/social-activities/18.jpg',
    ],
  },
  {
    id: 4,
    title: 'Nong Trai Xanh Green Noel 2024',
    content: [
      `"I'm really lucky to have had the opportunity to spend an exciting day as a farmer with you all. We got to participate in outdoor games, breathe in the fresh air, and enjoy fun moments surrounded by nature. Wearing the cool traditional áo bà ba outfits, we felt even more connected to the simplicity of the countryside.`,
      'The most memorable moment was definitely catching fish in the canal. The whole group was laughing and cheering as each fish wriggled in our hands, and that feeling is truly unforgettable! ',
    ],
    images: [
      '/social-activities/1.jpg',
      '/social-activities/2.jpg',
      '/social-activities/3.jpg',
      '/social-activities/4.jpg',
      '/social-activities/5.jpg',
      '/social-activities/6.jpg',
      '/social-activities/1.jpg',
      '/social-activities/2.jpg',
      '/social-activities/3.jpg',
      '/social-activities/4.jpg',
      '/social-activities/5.jpg',
      '/social-activities/6.jpg',
    ],
  },
  {
    id: 5,
    title: 'Workshop - HCM CLB Future Business Leader',
    content: [
      'As part of the event organizers, I had a significant opportunity to connect and facilitate speakers from the Business and F&B industries. The goal of the event was to provide deep insights into the development of Vietnamese coffee products in the international market.',
      'I coordinated the program, from selecting appropriate speakers to scheduling each segment. Additionally, I was responsible for preparing materials, necessary equipment, and creating a comfortable environment for speakers and attendees to easily exchange experiences and knowledge.',
      'Moreover, I served as a bridge between the speakers and participants, helping everyone gain a better understanding of the value and potential of Vietnamese coffee in a global context. Through the event, not only did I learn new things, but I also felt proud to have contributed to promoting the image of Vietnamese coffee and the business industry to young people.',
    ],
    images: [
      '/social-activities/7.jpg',
      '/social-activities/8.jpg',
      '/social-activities/9.jpg',
      '/social-activities/10.jpg',
      '/social-activities/11.jpg',
      '/social-activities/12.jpg',
      '/social-activities/7.jpg',
      '/social-activities/8.jpg',
      '/social-activities/9.jpg',
      '/social-activities/10.jpg',
      '/social-activities/11.jpg',
      '/social-activities/12.jpg',
    ],
  },
];

const ActivityList = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        {list.map((item, i) => {
          return (
            <div key={item.id} className={clsx('w-full', i % 2 !== 0 && 'bg-white')}>
              <div className="flex flex-col gap-4 py-6 md:py-16 fluid-container ">
                <AnimFade direction="up">
                  <h2 className="section-heading w-fit mx-auto text-center">
                    {item.title}
                  </h2>
                </AnimFade>
                <AnimFade
                  direction="up"
                  delay={0.1}
                  className="flex flex-col gap-2 w-full xl:max-w-[80%] text-justify xl:w-fit mx-auto mb-3 md:mb-6"
                >
                  {item.content.map((content, index) => {
                    return (
                      <p key={index} className="text-sm md:text-base">
                        {content}
                      </p>
                    );
                  })}
                </AnimFade>
                <ImgCarousel images={item.images || []} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityList;
