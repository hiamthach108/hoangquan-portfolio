import Image from 'next/image';

import React from 'react';

import ImgCarousel from '@/components/shared/ImgCarousel';

const list = [
  {
    id: 1,
    title: 'Panacea - Remedy for your health',
    position: 'Founder',
    subtitle:
      'A club focused on sharing and marketing products made from nutritious grains and seeds that are beneficial for health',
    contents: [
      {
        content:
          'Operated the Munchies project, a business initiative focused on selling biscotti and granola products to generate funds for charity',
        subContent: [
          'Sold more than 30 kilograms of biscotti and around 10 kilograms of granola, generating a revenue of 12,000,000 VND for charitable purposes',
          'Donated 1,000,000 VND from business profits to UNICEF Vietnam',
          'Organized extracurricular activities and presented 200 gifts worth a total of 8,000,000 VND to students at Nguyen Hung Manh Primary School and Long My Primary School in Dat Do Town, Ba Ria - Vung Tau Province.',
          'Provided opportunities to experience coastal cuisine in Phuoc Hai, Vung Tau.',
        ],
      },
      {
        content:
          'Published contents on social media to share knowledge about the nutritional benefits of various seeds with the community',
      },
    ],
    time: 'Mar 2024 - Present',
    link: 'https://www.facebook.com/panacea.redemyforyourhealth',
    imgList: [
      '/extracurricular-activities/panacea/1.JPG',
      '/extracurricular-activities/panacea/2.JPG',
    ],
  },
  {
    id: 2,
    title: 'Happy Meal',
    position: 'Co-founder',
    subtitle: '',
    contents: [
      {
        content: 'Organized Tet Gathering 2024',
        subContent: [
          "Decorated the shelter's grounds with vibrant Tet-themed decorations.",
          'Organized a flower crafting activity using velvet zinc, allowing participants to create unique vases to give to the elderly.',
          'Coordinated the cooking of 35 servings of nutritious vegetarian noodles tailored to the dietary needs of the elderly. Wrapped 20 traditional banh chung, providing a special Tet treat for the residents.',
          'Organized a birthday party for the elderly whose birthdays are in January and February.',
          'Prepared and distributed 35 Tet gift packages containing essential items and festive treats, ensuring recipients felt valued and remembered.',
          'Engaged volunteers in interactive games and activities, fostering community connections and encouraging the sharing of stories and traditions.',
        ],
      },
    ],
    link: 'https://www.facebook.com/profile.php?id=100082884970347',
    time: 'Jan 2024 - Present',
    imgList: [
      '/extracurricular-activities/tet-gathering/1.webp',
      '/extracurricular-activities/tet-gathering/2.webp',
    ],
  },
  {
    id: 3,
    title: 'The Science Store',
    position: 'Head of Academics',
    contents: [
      {
        content: '',
        subContent: [
          "Designed and organized science classes and extracurricular activities at schools and children's shelters, aiming to inspire and ignite a passion for science among young learners.",
          'Developed innovative science education programs using interactive and creative methods to attract student participation.',
          'Created and published media content to share scientific knowledge with the community, contributing to the dissemination of science to a broader audience.',
          'Actively participated in volunteer activities, supporting underprivileged children in accessing science and technology education.',
          'Collaborated with organizations and schools to implement science programs, promoting the development of STEM education.',
          'Involved in the management, operation, and growth of The Science Store club, ensuring that activities are conducted effectively and meaningfully.',
        ],
      },
    ],
    link: 'https://www.facebook.com/profile.php?id=100082874125517',
    time: 'Sep 2023 - Present',
  },
  {
    id: 4,
    title: 'Music Do Wonder',
    position: 'Vice President',
    contents: [
      {
        content:
          'Organized the I See Your Voice 2024 charity concert, aimed at raising funds for the Bừng Sáng Blind Shelter',
        subContent: [
          'Developed and implemented a marketing strategy to promote the concert, utilizing social media, flyers, and community outreach to maximize attendance.',
          'Launched a sales campaign for dried mango, peanuts, and concert tickets, successfully raising over 24,000,000 VND for charity.',
          'Coordinated the distribution of funds raised to the Bừng Sáng Blind Shelter, ensuring transparency and accountability in the donation process.',
          "Performed as a violinist during the charity concert on June 1, 2024, contributing to the event's entertainment and atmosphere.",
          'Participated in gift-giving activities for the children at the Bừng Sáng Blind Shelter, fostering joy and connection with the residents.',
          'Organized fun games and interactive activities for the children, creating a memorable experience for both the kids and volunteers.',
        ],
      },
    ],
    link: 'https://www.facebook.com/musicdowonder',
    time: 'Feb 2024 - Present',
    video:
      'https://storage.googleapis.com/staging.thach-personal.appspot.com/music-do-wonder-charity.mp4',
  },
];

const ActivityList = () => {
  return (
    <div className="w-full py-12">
      {/* <div className="flex flex-col gap-4 md:gap-10">
        <div className="fluid-container">
          <h3 className="section-heading text-justify">Foody Buddy</h3>
          <div className="mt-6">
            <ImgCarousel
              images={[
                '/extracurricular-activities/foody-buddy/1.JPG',
                '/extracurricular-activities/foody-buddy/2.JPG',
                '/extracurricular-activities/foody-buddy/3.JPG',
                '/extracurricular-activities/foody-buddy/4.JPG',
                '/extracurricular-activities/foody-buddy/5.JPG',
                '/extracurricular-activities/foody-buddy/6.JPG',
                '/extracurricular-activities/foody-buddy/7.JPG',
                '/extracurricular-activities/foody-buddy/8.JPG',
                '/extracurricular-activities/foody-buddy/9.JPG',
              ]}
            />
          </div>
        </div>
        <div className="fluid-container">
          <h3 className="section-heading text-justify">Mid-Autumn Festival</h3>
          <div className="mt-6">
            <ImgCarousel
              images={[
                '/extracurricular-activities/mid-autumn-festival/1.JPG',
                '/extracurricular-activities/mid-autumn-festival/2.JPG',
                '/extracurricular-activities/mid-autumn-festival/3.JPG',
                '/extracurricular-activities/mid-autumn-festival/4.JPG',
                '/extracurricular-activities/mid-autumn-festival/5.JPG',
              ]}
            />
          </div>
        </div>
        <div className="fluid-container">
          <h3 className="section-heading text-justify">Music Do Wonder Charity</h3>

          <div className="flex gap-6 mt-6 w-full max-w-4xl mx-auto justify-center">
            <video controls>
              <source
                src="https://storage.googleapis.com/staging.thach-personal.appspot.com/music-do-wonder-charity.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 w-full fluid-container">
        <div className="flex-1">
          <h3 className="section-heading text-justify">Panacea</h3>

          <div className="w-full flex-1 flex gap-2 mt-4">
            <div className="flex-1">
              <Image
                src="/extracurricular-activities/panacea/1.JPG"
                alt="Panacea"
                width={400}
                height={400}
                className="w-full h-auto object-center object-cover aspect-square"
              />
            </div>
            <div className="flex-1">
              <Image
                src="/extracurricular-activities/panacea/2.JPG"
                alt="Panacea"
                width={400}
                height={400}
                className="w-full h-auto object-center object-cover aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="section-heading text-justify">Tet Gathering</h3>

          <div className="w-full flex-1 flex gap-2 mt-4">
            <div className="flex-1">
              <Image
                src="/extracurricular-activities/tet-gathering/1.webp"
                alt="Tet Gathering"
                width={400}
                height={400}
                className="w-full h-auto object-center object-cover aspect-square"
              />
            </div>
            <div className="flex-1">
              <Image
                src="/extracurricular-activities/tet-gathering/2.webp"
                alt="Tet Gathering"
                width={400}
                height={400}
                className="w-full h-auto object-center object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="mx-auto max-w-[90vw] flex flex-col gap-10">
        {list.map((item) => (
          <div className="flex flex-col md:flex-row items-center gap-10" key={item.id}>
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="text-xl text-primary font-heading text-left">
                {item.title}
              </h3>
              <p className="text-justify text-sm text-gray-500">{item.position}</p>
              <p className="text-justify text-sm text-gray-500">{item.time}</p>
              <p className="text-justify text-sm text-gray-500 italic">{item.subtitle}</p>
              {item.contents.map((content) => (
                <div key={content.content} className="flex flex-col gap-2">
                  <p className="text-justify text-sm">{content.content}</p>
                  <ul className="list-disc list-inside text-justify">
                    {content.subContent?.map((subContent) => (
                      <li key={subContent} className="text-sm">
                        {subContent}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {item.imgList && (
              <div className="w-full md:w-[40%]">
                <ImgCarousel images={item.imgList} />
              </div>
            )}

            {item.video && (
              <div className="w-full md:w-[40%]">
                <video controls className="w-full rounded-img">
                  <source
                    src="https://storage.googleapis.com/staging.thach-personal.appspot.com/music-do-wonder-charity.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityList;
