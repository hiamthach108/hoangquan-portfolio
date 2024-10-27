import Image from 'next/image';

import React from 'react';

import AnimFade from '../animation/AnimFade';

const educationList = [
  {
    id: 1,
    schoolName: 'Nguyen Binh Khiem Secondary School',
    description: 'The top-rated school in Bien Hoa City, Dong Nai Province, Vietnam',
    address: '35 Nguyen Du, Buu Long, Bien Hoa City, Dong Nai',
    email: 'nguyenbinhkhiembienhoa@gmail.com',
    phone: '+84-252-203-668',
    logo: '/education/nguyenbinhkhiemc2.png',
    grades: {
      '6': 9.3,
      '7': 9.5,
      '8': 9.4,
      '9': 9.6,
    },
  },
  {
    id: 2,
    schoolName: 'Luong The Vinh Specialized High School',
    description: 'The only specialized school in Dong Nai Province, Vietnam',
    address: '3 Le Quy Don, Tan Hiep, Bien Hoa City, Dong Nai Province, Vietnam',
    email: 'c3.luongthevinh@dongnai.edu.vn',
    phone: '+84-251-6573-553',
    logo: '/education/luongthevinhc3.png',
    grades: {
      '10': 9.3,
      '11': 9.3,
      '12': 0,
    },
  },
];

const AchievementList = () => {
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
        {educationList.map((e) => (
          <AnimFade
            direction={e.id % 2 === 0 ? 'right' : 'left'}
            className="w-full"
            key={e.id}
          >
            <div className="flex gap-5 flex-col md:flex-row">
              <Image
                src={e.logo}
                alt={e.schoolName}
                width={210}
                height={210}
                className="w-full md:w-1/4 h-auto object-center object-cover aspect-square"
              />
              <div className="text-left text-sm">
                <h4 className="uppercase underline text-lg">{e.schoolName}</h4>
                <p>{e.description}</p>
                <p className="mt-4">
                  <strong>Address:</strong> {e.address}
                </p>
                <p>
                  <strong>Email:</strong> {e.email}
                </p>

                <p>
                  <strong>Hotline:</strong> {e.phone}
                </p>
              </div>
            </div>

            <div className="w-full bg-black h-[1px] mt-6"></div>
            <h5 className="text-center font-heading text-2xl my-3">GRADES</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
              {Object.entries(e.grades).map(([grade, score]) => (
                <div
                  key={grade}
                  className="flex gap-2 items-center text-lg max-w-2/3 justify-center text-left"
                >
                  <p className="text-left">{grade}th Grade GPA:</p>
                  <p className="font-bold text-left">
                    {score === 0 ? 'On Going' : `${score}/10`}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full bg-black h-[1px] mt-6"></div>
          </AnimFade>
        ))}

        <AnimFade
          direction="up"
          className="col-span-1 md:col-span-2 text-center w-full max-w-xl mx-auto"
        >
          <div className="w-full bg-black h-[1px] mt-6"></div>
          <h5 className="font-heading text-2xl my-3">SCORES</h5>
          <div className="flex items-center justify-center gap-4">
            <span>
              IELTS: <b>7.5</b>
            </span>
            <span>
              AP Chemistry: <b>5/5</b>
            </span>
          </div>
          <div className="w-full bg-black h-[0.5px] mt-6"></div>
        </AnimFade>
      </div>
    </div>
  );
};

export default AchievementList;
