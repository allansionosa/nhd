import React from 'react';
import BannerCarousel from './banner-carousel';
import Image from 'next/image';
import { Button } from 'antd';
import Link from 'next/link';
export interface CarouseItems {
  img: string;
  description: string | React.ReactNode;
  externalLink: string;
}

const carouselData: CarouseItems[] = [
  {
    img: '/images/home/carousel-img-1.jpg',
    description: (
      <div className="grid gap-y-12">
        <div className="grid justify-center md:justify-start">
          <Image src="/nhd-logo.png" width={520} height={0} alt="logo" />
        </div>
        <p className="text-secondary text-2xl md:text-4xl font-semibold">
          Live Better Go <span className="text-primary">Further</span>
        </p>
      </div>
    ),
    externalLink: '/',
  },
  {
    img: '/images/home/carousel-img-1.jpg',
    description: (
      <div className="grid gap-y-12">
        <div className="grid justify-center md:justify-start">
          <Image src="/nhd-logo.png" width={520} height={0} alt="logo" />
        </div>
        <p className="text-secondary text-2xl md:text-4xl font-semibold">
          Live Better Go <span className="text-primary">Further</span>
        </p>
      </div>
    ),
    externalLink: '/',
  },
  {
    img: '/images/home/carousel-img-1.jpg',
    description: (
      <div className="grid gap-y-12">
        <div className="grid justify-center md:justify-start">
          <Image src="/nhd-logo.png" width={520} height={0} alt="logo" />
        </div>
        <p className="text-secondary text-2xl md:text-4xl font-semibold">
          Live Better Go <span className="text-primary">Further</span>
        </p>
      </div>
    ),
    externalLink: '/',
  },
];

export default function Banner() {
  return (
    <section>
      <BannerCarousel data={carouselData} />
    </section>
  );
}
