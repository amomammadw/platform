'use client';
import { Swiper, SwiperSlide, type SwiperProps } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import type { ReactNode } from 'react';

export type TCarouselProps = SwiperProps & { slides: ReactNode[] };

export const Carousel = ({ slides, ...props }: TCarouselProps) => {
  return (
    <Swiper
      {...props}
      slidesPerView={3}
      spaceBetween={50}
      navigation={{ enabled: true }}
      pagination={{ clickable: true }}
      modules={[Pagination, Navigation]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={`slide-${index}`}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};
