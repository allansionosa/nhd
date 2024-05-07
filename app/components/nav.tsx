import Link from 'next/link';
import Image from 'next/image';
import NavigationClient from './nav-client';
import { MenuProps } from 'antd';
import { BiChevronDown } from 'react-icons/bi';
import { MdOpenInNew } from 'react-icons/md';

export default function Navigation() {
  const items: MenuProps['items'] = [
    {
      label: <Link href="/">Home</Link>,
      key: '/',
    },
    {
      label: <Link href="/hmo">HMO</Link>,
      key: '/hmo',
    },
    {
      label: <Link href="/about">About</Link>,
      key: '/about',
    },
    {
      label: <Link href="/services">Services</Link>,
      key: '/services',
    },
    {
      label: <Link href="/appointment">Appointment</Link>,
      key: '/appointment',
    },
    {
      label: (
        <p className="flex items-center gap-x-1 md:hover:text-primary transition ease-in-out delay-50">
          Online Results <BiChevronDown className="text-lg hidden md:block" />
        </p>
      ),
      key: 'sub3',
      theme: 'light',
      children: [
        {
          label: (
            <Link href="/portal/doctor" target="_blank">
              Doctor&apos;s Portal
            </Link>
          ),
          key: '/portal/doctor',
          icon: <MdOpenInNew />,
        },
        {
          label: (
            <Link href="/portal/patient" target="_blank">
              Patient&apos;s Portal
            </Link>
          ),
          key: '/portal/patient',
          icon: <MdOpenInNew />,
        },
      ],
    },
    {
      label: <Link href="/be-part-of-us">Be Part of Us</Link>,
      key: '/be-part-of-us',
    },
  ];
  return (
    <section className="container">
      <div className="flex justify-between items-center py-5 xl:py-10 gap-5">
        <div className="flex justify-between items-center shrink-0">
          <Link href="/">
            <Image
              src="/nhd-logo.png"
              alt="Next Health Diagnostics"
              width={200}
              priority
              height={0}
            />
          </Link>
        </div>

        <nav>
          <NavigationClient items={items} />
        </nav>
      </div>
    </section>
  );
}
