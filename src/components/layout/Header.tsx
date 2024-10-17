'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  IconBrandFacebookFilled, // IconBrandYoutubeFilled,
  IconMailFilled,
  IconMenu,
  IconX,
} from '@tabler/icons-react';
import { useState } from 'react';

import { EMAIL, FACEBOOK } from '@/config/constants/social.const';

import AnimSlide from '../features/animation/AnimSlide';

const NAV_LINKS = [
  {
    id: 'home',
    name: 'Home',
    url: '/',
  },
  { id: 'about-me', name: 'About Me', url: '/about-me' },
  { id: 'education', name: 'Education', url: '/education' },
  {
    id: 'extracurricular-activities',
    name: 'Extracurricular Activities',
    url: '/extracurricular-activities',
  },
];

const Header = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-bg sticky top-0 left-0 z-50">
        <div className="hidden fluid-container md:flex items-center justify-between">
          <div className="w-1/5 flex gap-2 items-center"></div>
          <div className="w-3/5 text-center">
            <h1 className="font-heading text-[40px] font-semibold">
              PHAM NGUYEN HOANG QUAN
            </h1>
            <div className="flex items-center justify-center gap-5">
              {NAV_LINKS.map((navLink) => (
                <Link
                  key={navLink.url}
                  href={navLink.url}
                  className="no-underline text-gray-800 mt-4 font-normal text-lg whitespace-nowrap"
                >
                  {navLink.name}

                  {pathname === navLink.url && (
                    <div className="h-[1px] w-full bg-black" />
                  )}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-1/5 "></div>
        </div>

        <div className="flex justify-between md:hidden p-3">
          <Link href={'/'} className="no-underline">
            <h2 className="font-heading text-xl font-semibold  text-black">
              PHAM NGUYEN HOANG QUAN
            </h2>
          </Link>

          <IconMenu
            size={32}
            className="cursor-pointer"
            onClick={() => {
              setIsMenuOpen(true);
            }}
          />
        </div>
        <div className="absolute top-6 right-6 z-10 flex items-start justify-end gap-2 w-fit h-auto max-md:hidden ">
          <Link href={`mailto:${EMAIL}`} target="_blank">
            <IconMailFilled
              size={28}
              className="cursor-pointer text-primary hover:text-secondary"
            />
          </Link>
          <Link href={FACEBOOK} target="_blank">
            <IconBrandFacebookFilled
              size={28}
              className="cursor-pointer text-primary hover:text-secondary"
            />
          </Link>
        </div>
      </header>

      {isMenuOpen && (
        <AnimSlide
          direction="right"
          className="fixed top-0 right-0 left-0 bg-bg h-screen w-full z-50"
        >
          <div className="flex justify-end p-4">
            <IconX
              size={32}
              className="cursor-pointer"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            {NAV_LINKS.map((navLink) => (
              <Link
                key={navLink.url}
                href={navLink.url}
                className="no-underline text-gray-800 mt-4 font-normal text-lg whitespace-nowrap"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                {navLink.name}

                {pathname === navLink.url && <div className="h-[1px] w-full bg-black" />}
              </Link>
            ))}
          </div>
        </AnimSlide>
      )}
    </>
  );
};

export default Header;
