import Image from 'next/image';

import React from 'react';

import AnimSlide from '../animation/AnimSlide';

const list = [
  {
    id: 1,
    contents: [
      'I am honored to have just received the gold medal in the 1 Idea 1 Word Competition 2024!',
      'A wave of emotions fills my heart, a strong sense of pride and happiness. This is not just an award; it is also a testament to the relentless journey of effort I have undertaken. This victory is a profound reminder that every innovative idea holds its unique value and can create a positive impact.',
      'This moment will undoubtedly provide me with strong motivation, encouraging me to continue learning and growing. I hope to achieve even more brilliant accomplishments in the future, turning my dreams into reality!',
    ],
  },
  {
    id: 2,
    contents: [
      'The StemCo International Math and Science Competitions are held annually in Singapore by Mosaic Global Pte Ltd, located at 402 Joo Chiat Place, Singapore.',
      'The competition was first held in Singapore in 2014 and has since attracted tens of thousands of participants. I was fortunate to win a silver medal in this prestigious competition.',
    ],
  },
  {
    id: 3,
    contents: [
      'After a period of thorough preparation and study, I feel very fortunate to have won a Silver Medal in the Young Achiever Business Olympiad 2024.',
      'I will take the experience from this competition to continue participating in future contests related to economics and business.',
    ],
  },
  {
    id: 4,
    contents: [
      'In addition to the silver medal, I am also honored to receive a bronze medal in the same competition for the mathematics category.',
      'This serves as a testament to how fitting numbers are in my life. I hope this will be the first step on my journey to conquer mathematics.',
    ],
  },
  {
    id: 5,
    contents: [
      'PhysiCo is an international physics competition in the Olympic style and is part of the StemCo framework. This competition is designed to encourage students to explore and develop the necessary skills in a globalized world through professionally built tools.',
      'The competition was first held in Singapore in 2014 and has since attracted tens of thousands of participants. This year, I was fortunate to win a silver medal in this prestigious competition, and the silver award comes with an official certificate.',
      'I hope that in the next competition, I will win a gold medal and have the opportunity to participate internationally.',
    ],
  },
  {
    id: 6,
    contents: [
      'After a period of thorough preparation and study, I feel very fortunate to have achieved success in the Young Achiever Business Olympiad 2024.',
      'I will take the experience gained from this competition to continue participating in future contests related to economics and business.',
    ],
  },
  {
    id: 7,
    contents: [
      'The Blue Ocean Entrepreneurship Competition is the largest virtual entrepreneurship competition for high school students worldwide, established in Maryland in 2014. The competition is inspired by the Blue Ocean Strategy by Chan Kim and Renée Mauborgne, encouraging innovative and groundbreaking ideas.',
      'By participating in this competition, I have gained a wealth of valuable knowledge about entrepreneurship, innovative thinking, and how to develop unique business ideas. Additionally, I had the opportunity to meet and make friends with many international peers from all over the world.',
    ],
  },
];

const AchievementList = () => {
  return (
    <div className="fluid-container pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {list.map((item, i) => (
          <AnimSlide
            key={i}
            direction={i % 2 === 0 ? 'left' : 'right'}
            className="flex-1 bg-white p-3 xl:p-8 pt-0 shadow-md rounded-xl text-left relative"
          >
            <h5 className="section-heading-hand">0{item.id}</h5>
            <div className="flex flex-col gap-2 mt-2">
              {item.contents.map((content, j) => (
                <p key={j} className="text-base text-justify">
                  {content}
                </p>
              ))}
            </div>
            <Image
              src={'/achievement.png'}
              width={60}
              height={60}
              className="absolute right-8 top-8"
              alt="achievement"
            />
          </AnimSlide>
        ))}
      </div>
    </div>
  );
};

export default AchievementList;
