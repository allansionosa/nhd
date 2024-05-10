import FacilitiesCarousel from './facilities-carousel';

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
    <section>
      <h3 className="bg-[#E5C4CD] text-center font-mairy pt-3 font-medium text-6xl text-primary">
        Our Facilities
      </h3>
      <FacilitiesCarousel data={data} />
    </section>
  );
}
