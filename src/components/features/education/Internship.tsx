import Link from 'next/link';

import React from 'react';

import AnimFade from '../animation/AnimFade';

const list = [
  {
    company: 'Nam Thanh Phat Clinic',
    position: 'Medical Secretary',
    to: '31 Aug 2023',
    from: '01 Aug 2023 ',
    link: 'https://drive.google.com/file/d/1_3Wrb1P7EIdcKqT4ZapR82r2qbUp1rBj/view?usp=sharing',
    content: [
      'Received and created patient medical records, ensuring all information was accurately documented and maintained in compliance with healthcare regulations.',
      'Entered patient information into the clinic’s management software, ensuring accuracy and completeness of data for efficient patient care.',
      'Conducted follow-up calls to check on patients’ conditions provide guidance, advice, and answered questions related to procedures and medical examination and treatment services, enhancing patient understanding and satisfaction.',
      'Managed incoming phone calls, transferring calls to doctors or relevant staff when necessary, ensuring efficient communication within the clinic.',
      'Worked closely with doctors and healthcare providers to coordinate patient care and ensure all necessary information was communicated effectively.',
    ],
  },
  {
    company: 'Nam Thanh Phat Clinic',
    position: 'Medical Secretary',
    to: '17 Jul 2024 ',
    from: '15 Jul 2024 ',
    link: 'https://drive.google.com/file/d/1V4GlZjxRQE1tlez_-ZXNwEkX0j-mdTzP/view?usp=drive_link',
    content: [
      'Received and created medical records, record prescriptions',
      'Input patient information into management system',
      'Typed medical examination and treatment results',
      'Guided, advised and answered questions related to procedures as well as medical examination and treatment services',
      'Called to check on patients and remind them of follow-up dates. Answer the phone and transfer the phone to the doctor when needed',
    ],
  },
  {
    company: 'Children’s Hospital 1',
    position: 'Volunteer',
    to: '30 Jun 2024',
    from: '01 Jun 2024',
    link: 'https://drive.google.com/file/d/15NKwf0imUDvVV6sMQei3fZTNil-V7bns/view?usp=drive_link',
    content: [
      'Assisted in organizing social activities, providing spiritual care to patients and distributing rice and gifts to various departments.',
      'Collected donation information from donors, recorded the data, and reported it to the officer in charge.',
      'Supported tasks assigned and supervised by the officer in charge',
      'Built toy cabinets for children',
    ],
  },
];

const Internship = () => {
  return (
    <div className="py-10 bg-white">
      <h2 className="text-center section-heading">INTERNSHIP</h2>
      <div className="fluid-container grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {list.map((item, index) => (
          <AnimFade
            direction={index % 2 === 0 ? 'left' : 'right'}
            key={index}
            className="p-6 text-left"
          >
            <h3 className="text-xl text-primary font-heading">{item.company}</h3>
            <p className="text-sm text-gray-500 italic my-2">{item.position}</p>
            <p className="text-sm text-gray-500 mb-3">
              {item.from} - {item.to}
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1 text-sm">
              {item.content.map((content, index) => (
                <li key={index} className="">
                  {content}
                </li>
              ))}
            </ul>
          </AnimFade>
        ))}
      </div>
    </div>
  );
};

export default Internship;
