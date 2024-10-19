'use client';

import Image from 'next/image';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { EffectCoverflow } from 'swiper/modules';

interface Props {
  images: string[];
}

const ImgCarousel = ({ images }: Props) => {
  const [current, setCurrent] = useState(0);

  const swiperRef = useRef<SwiperRef>(null);

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="w-full relative">
      <Swiper
        ref={swiperRef}
        slidesPerView={3.2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        tabIndex={current}
        onSlideChange={({ realIndex }) => setCurrent(realIndex)}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="relative w-fit h-fit rounded-lg overflow-hidden"
          >
            <Image
              src={image}
              alt=""
              width={300}
              height={300}
              className="w-full h-auto object-cover object-center aspect-square rounded-[10px]"
            />
          </SwiperSlide>
        ))}

        <div
          className="max-md:hidden absolute left-6 top-1/2 transform -translate-y-1/2 z-10 bg-light-brown aspect-square w-[60px] rounded-full flex items-center justify-center cursor-pointer"
          onClick={handlePrevSlide}
        >
          <Image
            src="/down-arrow.png"
            alt="Arrow Down"
            width={48}
            height={48}
            className="rotate-90"
          />
        </div>
        <div
          className="max-md:hidden absolute right-6 top-1/2 transform -translate-y-1/2 z-10 bg-light-brown aspect-square w-[60px] rounded-full flex items-center justify-center cursor-pointer"
          onClick={handleNextSlide}
        >
          <Image
            src="/down-arrow.png"
            alt="Arrow Down"
            width={48}
            height={48}
            className="-rotate-90"
          />
        </div>
      </Swiper>
    </div>
  );
};

export default ImgCarousel;
