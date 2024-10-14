'use client';

import Image from 'next/image';

import React, { useEffect, useRef, useState } from 'react';

import AnimFade from '../animation/AnimFade';

import clsx from 'clsx';
import { useInView } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  description: string;
  sub: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "A MIDSUMMER NIGHT'S DREAM",
    description:
      'The concert will take place on August 11, 2024, at Air Strings - Violin Choir.',
    sub: 'The song is titled: Oblivion - Astor Piazzolla.',
    link: 'https://www.youtube.com/embed/8GTjWSfMOck?si=08KT_IiDRptU9pbz',
  },

  {
    id: 2,
    title: 'I SEE YOUR VOICE',
    description:
      'The charity concert raises funds for the "Bừng Sáng" shelter for the visually impaired, with donations exceeding 24,000,000 VND.',
    sub: 'The "I Can See Your Voice" program will take place on June 1, 2024.',
    link: 'https://www.youtube.com/embed/OllhguKeWOo?si=jxNGmOKsJJmIr30e',
  },
  {
    id: 3,
    title: 'WINTER WONDERLAND 2023',
    description: 'The concert will take place on [date] at Air Strings - Violin Choir.',
    sub: 'The song is titled: Hallelujah - Leonard Cohen.',
    link: 'https://www.youtube.com/embed/XKKpOiThKb8?si=IH6u-gGw-OLj-mMT',
  },
  {
    id: 4,
    title: 'TERESARO CHOIR - PHU HANH CHURCH 2023-2024',
    description: 'The birthday of the Teresa Choir at Phú Hạnh Church: May 7, 2023.',
    sub: 'The song is titled: Dắt dìu con đi - Phương Anh.',
    link: 'https://www.youtube.com/embed/Xhu-E77uGvQ?si=zM1UlEr0igsgaYn_',
  },
];

const ProjectCard = ({
  project,
  setActive,
}: {
  project: Project;
  setActive: (p: Project) => void;
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setActive(project);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div
      className={clsx(
        'flex-1 relative h-fit w-full',
        project.id != 1 ? 'py-24' : 'pt-16 pb-24',
      )}
    >
      <AnimFade direction="up" key={project.id}>
        <div className="aspect-w-16 aspect-h-9 mt-1">
          <iframe
            width="700"
            height="400"
            src={project.link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-[400px] w-full"
          ></iframe>
        </div>
        <p className="text-sm text-center italic">{project.sub}</p>
      </AnimFade>
      <div className="absolute top-1/2 left-0" ref={ref}></div>
    </div>
  );
};

const HobbiesProjects = () => {
  const [active, setActive] = useState<Project>(projects[0]);

  return (
    <div
      className="py-6 md:py-16 fluid-container text-center h-min scroll-smooth"
      id="hobbies-project"
    >
      {/* <h2 className="section-heading text-center">Projects</h2> */}

      <Image
        src="/violin-hobbies.png"
        alt="Violin"
        width={120}
        height={120}
        className="mx-auto"
      />

      <div className="max-md:hidden flex gap-10 max-w-[1024px] mx-auto mt-10 w-full relative">
        <div className="w-1/3 text-left h-screen sticky top-0">
          <div className="sticky top-[200px] left-0 z-10 w-full">
            <h5 className="section-heading-hand">0{active.id}</h5>
            <h6 className="text-xl font-heading">{active.title}</h6>
            <p className="text-base">{active.description}</p>
          </div>
        </div>
        <div className="flex-1">
          {projects.map((p) => {
            return <ProjectCard project={p} setActive={setActive} key={p.id} />;
          })}
        </div>
      </div>

      <div className="md:hidden flex flex-col gap-10 mx-auto mt-10 relative">
        {projects.map((p) => {
          return (
            <div
              className="flex flex-col md:flex-row gap-2 md:gap-10 w-full py-5"
              key={p.id}
            >
              <div className="w-full md:w-1/3 text-left">
                <h5 className="section-heading-hand">0{p.id}</h5>
                <h6 className="text-xl font-heading">{p.title}</h6>
                <p className="text-base">{p.description}</p>
              </div>

              <div className="flex-1">
                <div className="aspect-w-16 aspect-h-9 mt-1">
                  <iframe
                    width="700"
                    height="400"
                    src={p.link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="h-[400px] w-full"
                  ></iframe>
                </div>
                <p className="text-sm text-center italic">{p.sub}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HobbiesProjects;
