import Image from 'next/image';

import React from 'react';

import ImgCarousel from '@/components/shared/ImgCarousel';
import MyCarousel from '@/components/shared/MyCarousel';

import AnimFade from '../animation/AnimFade';

const projectCommunication = [
  {
    id: 1,
    content:
      'At Mush-Room of Love, we are committed to providing high-quality organic mushrooms, grown using natural methods without harmful chemicals. Each type of mushroom is carefully nurtured from seed selection, planting, to harvest, ensuring safety and nutrition for you and your beloved family. 💕',
    img: '/projects/20.jpg',
  },
  {
    id: 2,
    content:
      'Straw mushrooms – the "queen" of Vietnamese kitchens – not only bring delicious flavors but are also packed with nutrients. Understanding this, MUSH-ROOM OF LOVE would like to share two unique recipes to help you transform straw mushrooms into delightful dishes that will win over every guest.',
    img: '/projects/12.jpg',
  },
  {
    id: 3,
    content:
      'Oyster mushrooms have a naturally sweet flavor and are full of nutrients beneficial for health. Are you looking for tasty oyster mushroom recipes? Here are seven simple yet nutritious meal ideas you can easily make at home! Vegetarian fried chicken with oyster mushrooms, oyster mushrooms stir-fried with eggs, bitter melon salad with oyster mushrooms.',
    img: '/projects/13.jpg',
  },
  {
    id: 4,
    content:
      'Mushrooms are not only a familiar ingredient in daily meals but also a rich source of nutrients, offering numerous health benefits. Let’s explore the most common mushrooms in Vietnam and their amazing health benefits!',
    img: '/projects/11.jpg',
  },
  {
    id: 5,
    content:
      '✨ Hello everyone, Our fundraising mushroom project, Mush-Room of Love, has finally come to an end.Thank you so much for your continuous support and help throughout the project. Over the two months of the project, Mush-Room of Love has brought many memories: both joyful and challenging.',
    img: '/projects/16.jpg',
  },
  {
    id: 6,
    content:
      'Organic straw mushrooms are rich in nutrients, containing up to 90% water, 3.6% protein, 0.3% fat, 3.2% sugar, 1.1% fiber (cellulose), 0.8% ash, 28mg% calcium, 80mg% phosphorus, 1.2% iron, and vitamins A, B1, B2, C, D, PP. Due to its high nutritional content, regularly eating straw mushrooms can help detoxify, reduce heat, aid digestion, improve blood health, lower blood pressure, and prevent heart attacks.',
    img: '/projects/17.jpg',
  },
];

const ProjectList = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="fluid-container py-6 md:py-10">
        <div className="mt-6 md:mt-10 flex flex-col-reverse md:flex-row gap-4 md:gap-10 items-center">
          <AnimFade direction="left" className="text-justify flex flex-col gap-1 flex-1">
            <h2 className="section-heading md:mb-4 text-center">Mush-Room Of Love</h2>
            <p>
              The Mush-Room of Love project is a personal initiative aimed at supporting
              visually impaired and disabled children through the sale of organic
              mushrooms. 🍄
            </p>
            <p>
              The mushrooms are grown entirely from organic sources without chemicals,
              benefiting health and contributing to environmental protection. The
              cultivation process follows sustainable, eco-friendly principles, helping
              maintain the ecosystem and reduce pollution. 🌱
            </p>
            <p>
              What makes this project special is that all profits from mushroom sales will
              be used to fund charitable activities, particularly supporting visually
              impaired and disabled children. This modest amount will help the children
              have better access to education, development, and integration into society,
              offering them a brighter future. 🌟
            </p>
            <p>
              Mush-Room of Love not only provides value in terms of health and the
              environment but also spreads love and compassion to those in need, opening
              opportunities and hope for the children.💖
            </p>
          </AnimFade>
          <AnimFade direction="right" className="max-[400px]:w-full w-1/2 md:w-1/3">
            <Image
              src={'/projects/mushroomoflove.jpg'}
              width={600}
              height={600}
              alt="Mush-Room Of Love"
              className="w-full h-auto aspect-square rounded-xl object-cover object-center shadow-md"
            />
          </AnimFade>
        </div>
      </div>

      <div className="bg-white py-6 md:py-10">
        <div className="fluid-container flex gap-4 md:gap-8 flex-col md:flex-row items-center">
          <AnimFade direction="right" className="w-full md:w-[36%]">
            <Image
              src={'/projects/17.jpg'}
              width={600}
              height={600}
              alt="Mush-Room Of Love"
              className="h-auto w-full object-cover object-center"
            />
          </AnimFade>

          <AnimFade direction="up" className="text-justify flex-1 flex flex-col gap-2">
            <h3 className="section-heading mb-4">
              MUSHROOM FUNDRAISING PROJECT – CHARITY
            </h3>
            <p className="">
              At Mush-Room of Love, we aim to bring safe and healthy food to everyone. Our
              mushrooms are cultivated according to organic standards, with no harmful
              chemicals, ensuring that organic mushrooms are the safest and best choice
              for your family’s daily meals.
            </p>
            <p className="">
              At Mush-Room of Love, organic mushrooms not only bring health benefits, but
              the profits from each product sold are used for charitable activities, from
              donations to those in need to organizing charity projects. Every
              contribution, big or small, has significant value for the project and the
              community at large.
            </p>
          </AnimFade>
        </div>
      </div>

      <div className="fluid-container py-6 md:py-10">
        <AnimFade direction="up">
          <h3 className="section-heading mb-4 text-center">FARMING EXPERIENCE</h3>
        </AnimFade>
        <div className="text-justify flex flex-col gap-2">
          <AnimFade direction="up" delay={0.1}>
            <p>
              From the moment I first stepped onto the farm, I was captivated by the lush
              and soothing atmosphere, where hundreds of mushroom beds of all kinds were
              flourishing. I personally chose growing mushroom beds, gently watering them,
              and it felt as if I was transmitting a strong life energy from mother earth
              to each mushroom sprout. 🌱 The mushroom farming experience not only brought
              endless joy but also helped me deeply understand patience and how to connect
              with nature. After tending to them and watching the mushrooms grow like my
              &apos;little children,&apos; the feeling was truly heartwarming and full of
              anticipation! ✨
            </p>
          </AnimFade>
          <AnimFade direction="up" delay={0.13}>
            <p>
              The organic mushroom cultivation process was also fascinating, from
              preparing the substrate using natural materials like straw and sawdust to
              create a living environment for the mushrooms. After sterilizing the
              substrate to eliminate unwanted bacteria, I inoculated it with mushroom
              spores. The care process was continuous, watering and monitoring the
              humidity and temperature to create ideal conditions for the mushrooms to
              thrive. Finally, when the mushrooms reached the desired size, I harvested
              and stored them properly, not only to enjoy but to fully appreciate the love
              for nature through each mushroom I had nurtured.&quot;
            </p>
          </AnimFade>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full mt-4">
            {[
              '/projects/14.jpg',
              '/projects/15.jpg',
              '/projects/18.jpg',
              '/projects/19.jpg',
            ].map((img, idx) => (
              <AnimFade key={idx} direction="up" delay={0.1 * idx}>
                <Image
                  key={idx}
                  src={img}
                  width={400}
                  height={400}
                  alt="Mush-Room Of Love"
                  className="h-auto w-full object-cover object-center"
                />
              </AnimFade>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-6 md:py-10">
        <MyCarousel
          components={projectCommunication.map((project) => (
            <div
              key={project.id}
              className="block bg-white rounded-[4px] overflow-hidden w-full h-full"
            >
              <Image
                src={project.img}
                width={400}
                height={400}
                alt="Mush-Room Of Love"
                className="h-auto w-full object-cover object-center"
              />
              <div className="px-4 py-2">
                <p className="text-sm text-justify">{project.content}</p>
              </div>
            </div>
          ))}
        />
      </div>

      <div className="fluid-container">
        <AnimFade direction="up">
          <h3 className="section-heading text-center">
            &quot;JOYFUL SUMMER TUNES&quot; PROJECT
          </h3>
        </AnimFade>
        <div className="mt-4 text-justify flex flex-col gap-2">
          <AnimFade direction="up" delay={0.1}>
            <p>
              From the very first moment I stepped onto the farm, I was captivated by the
              lush, soothing environment, where hundreds of mushroom beds of various types
              were in full bloom. I personally selected growing mushroom beds, gently
              watered them, and felt as if I was transmitting a powerful life energy from
              mother earth to each mushroom sprout. 🌱 The mushroom farming experience not
              only brought endless joy but also allowed me to deeply understand patience
              and how to connect with nature. Tending to them and watching the mushrooms
              grow like my &apos;little children&apos; was a truly heartwarming and
              full-of-anticipation experience! ✨
            </p>
          </AnimFade>
          <AnimFade direction="up" delay={0.13}>
            <h6 className="text-xl text-primary">
              Organic mushroom cultivation process:
            </h6>
          </AnimFade>
          <AnimFade direction="up" delay={0.16}>
            <ul className="pl-6 mb-4">
              <li>
                Preparing the space: Create a lush, airy environment for growing
                mushrooms, with soft light and the right humidity.
              </li>
              <li>
                Choosing materials: Select natural materials like straw, sawdust, or
                coffee grounds as substrates for the mushrooms.
              </li>
              <li>
                Sterilizing the substrate: Sterilize the substrate with steam or high
                temperatures to eliminate unwanted bacteria and molds.
              </li>
              <li>
                Inoculating the mushrooms: Once the substrate has cooled, gently inoculate
                it with mushroom spores, ensuring an even distribution for balanced
                growth.
              </li>
              <li>
                Keep the mushrooms healthy: Regularly water to maintain humidity, and
                monitor the air temperature and moisture to create ideal conditions for
                mushroom development.
              </li>
              <li>
                Monitoring growth: Observe the mushrooms’ growth like &apos;little
                children,&apos; feeling the joy and connection with nature.
              </li>
              <li>
                Harvesting the mushrooms: When they reach the desired size, carefully
                harvest them, and feel the happiness of seeing the fully grown mushroom
                beds.
              </li>
            </ul>
          </AnimFade>

          <ImgCarousel
            images={[
              '/projects/1.jpg',
              '/projects/2.jpg',
              '/projects/3.jpg',
              '/projects/4.jpg',
              '/projects/5.jpg',
              '/projects/6.jpg',
              '/projects/7.jpg',
              '/projects/8.jpg',
              '/projects/9.jpg',
              '/projects/10.jpg',
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
