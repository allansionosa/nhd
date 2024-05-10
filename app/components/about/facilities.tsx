import FacilitiesCarousel from './facilities-carousel';
import Image from 'next/image';
export interface FacilitiesTypes {
  img: string;
  name: string;
}

const data: FacilitiesTypes[] = [
  {
    img: '/sample-news-img.jpg',
    name: 'CT Scan Room',
  },
  {
    img: '/sample-news-img.jpg',
    name: 'CT Scan Room',
  },
  {
    img: '/sample-news-img.jpg',
    name: 'CT Scan Room',
  },
];

export default function Facilities() {
  return (
    <section className="overflow-hidden relative ">
      <h3 className="bg-[#E5C4CD] text-center font-mairy pt-3 font-medium text-6xl text-primary">
        Our Facilities
      </h3>
      <div className="absolute top-0 -left-20">
        <Image
          src="/images/about/wavy-line.svg"
          alt="wavy-line"
          height={0}
          className="opacity-20 rotate-45"
          width={700}
        />
      </div>
      <FacilitiesCarousel data={data} />
      <div className="absolute -translate-y-12 md:-translate-y-20 left-0 z-10">
        <div className="flex ">
          <div className="h-16 md:h-24 aspect-square relative translate-x-7 md:translate-x-12">
            <Image
              src="/images/arrow.svg"
              alt="arrow"
              fill
              style={{
                objectFit: 'contain',
              }}
              className="grayscale"
            />
          </div>
          <div className="h-16 md:h-24 aspect-square relative">
            <Image
              src="/images/arrow.svg"
              alt="arrow"
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
