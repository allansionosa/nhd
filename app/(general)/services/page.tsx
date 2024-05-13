import ServicesClient from '@/app/components/services/services-client';
import { Button } from 'antd';
import { FiDownload } from 'react-icons/fi';

export interface ServicesTypes {
  id: string;
  name: string;
  link: string;
  img: string;
  hover_img: string;
  branch: string[];
  hmo: string[];
}

const data: ServicesTypes[] = [
  {
    id: 'lab',
    name: 'Laboratory Testing',
    link: '/',
    img: '/images/services/microscope.svg',
    hover_img: '/images/services/microscope-hover.svg',
    branch: ['makati'],
    hmo: ['care-health-plus', 'avega'],
  },
  {
    id: 'prof',
    name: 'Professional Consultation',
    link: '/',
    img: '/images/services/message-bubble.svg',
    hover_img: '/images/services/message-bubble-hover.svg',
    branch: ['makati', 'cavite'],
    hmo: ['avega'],
  },
  {
    id: 'imaging',
    name: 'Imaging',
    link: '/',
    img: '/images/services/mri.svg',
    hover_img: '/images/services/mri-hover.svg',
    branch: ['makati', 'cavite'],
    hmo: ['care-health-plus', 'avega'],
  },
];

export default function Services() {
  return (
    <section>
      <div className="container py-28">
        <div className="grid justify-end mb-14">
          <Button size="large" type="primary">
            <div className="flex gap-x-2 items-center">
              <p>Download Brochure</p>
              <FiDownload className="text-2xl" />
            </div>
          </Button>
        </div>
        <h1 className="font-mairy text-center uppercase text-5xl text-primary">
          Services
        </h1>

        <ServicesClient data={data} />
      </div>
    </section>
  );
}
