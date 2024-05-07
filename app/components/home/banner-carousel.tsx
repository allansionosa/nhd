'use client';

import { Button, Divider } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'antd';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import { useRef } from 'react';
import { CarouseItems } from './banner';

export default function BannerCarousel({ data }: { data: CarouseItems[] }) {
  const heroSlider = useRef<any>(null);
  return (
    <section className="relative">
      {data.length > 1 && (
        <>
          <BiChevronLeft
            className="text-5xl absolute z-10 cursor-pointer text-secondary/70 hover:text-black top-2/4 -translate-y-1/2 hidden md:block"
            onClick={() => heroSlider.current.prev()}
          />
          <BiChevronRight
            className="text-5xl absolute z-10 cursor-pointer text-secondary/70 hover:text-black right-0 top-2/4 -translate-y-1/2 hidden md:block"
            onClick={() => heroSlider.current.next()}
          />
        </>
      )}
      <Carousel
        focusOnSelect={false}
        autoplay
        swipeToSlide
        draggable
        ref={heroSlider}
        autoplaySpeed={5000}
      >
        {data.map((item, i) => (
          <div
            className="h-[644px] md:h-[430px] lg:h-[700px] w-full relative"
            key={i}
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
            <div className="absolute bottom-0 right-0 left-0 top-0 overlay">
              <div className="container grid items-center content-center h-full w-full text-center text-white md:text-left gap-y-14 px-12 md:px-28 xl:px-12">
                <div>{item.description}</div>
                <Link href="/">
                  <Button type="primary" size="large">
                    Book a consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
