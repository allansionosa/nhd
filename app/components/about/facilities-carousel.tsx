'use client';

import { Carousel } from 'antd';
import { FacilitiesTypes } from './facilities';
import Image from 'next/image';
import { useRef } from 'react';
export default function FacilitiesCarousel({
  data,
}: {
  data: FacilitiesTypes[];
}) {
  const facilitiesRef = useRef<any>(null);

  return (
    <div className="pt-36 container pb-48">
      <Carousel
        focusOnSelect={false}
        autoplay
        autoplaySpeed={5000}
        swipeToSlide
        draggable
        centerMode={true}
        slidesToShow={1}
        ref={facilitiesRef}
        className="center"
      >
        {data.map((item, i) => (
          <div
            key={i}
            className="item-center rounded-3xl overflow-hidden h-[400px] md:h-[430px] lg:h-[550px] w-full relative"
          >
            <Image
              src={item.img}
              alt="banner"
              fill
              style={{
                objectFit: 'cover',
              }}
              //   quality={50}
            />
            <div className="absolute top-3/4 left-0 right-1/2 md:right-3/4">
              <div className="bg-primary/60 py-3 px-5 text">
                <p className="text-white text-right font-questrial text-lg md:text-xl">
                  {item.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
