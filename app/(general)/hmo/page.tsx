import ContactUs from '@/app/components/contact-us';
import HMOClient from '@/app/components/hmo/hmo-client';

export interface HMOTypes {
  id: number;
  name: string;
  logo: string;
}

const data: HMOTypes[] = [
  {
    id: 0,
    name: 'Allianz',
    logo: '/allianz.webp',
  },
  {
    id: 1,
    name: 'Avega',
    logo: '/avega.webp',
  },
  {
    id: 2,
    name: 'Carewell',
    logo: '/carewell.webp',
  },
  {
    id: 3,
    name: 'EastWest Healthcare',
    logo: '/eastwest.webp',
  },
];

export default function HMO() {
  return (
    <section>
      <div className="container py-28">
        <h1 className="font-mairy text-center uppercase text-5xl text-primary">
          Accredited HMO Providers
        </h1>
        <HMOClient data={data} />
      </div>
      <ContactUs />
    </section>
  );
}
