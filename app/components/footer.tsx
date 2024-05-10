import Link from 'next/link';
import Image from 'next/image';
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaRegCalendarAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="font-questrial">
      <div className="py-28 bg-primary text-white">
        <div className="container grid items-start gap-14 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="grid gap-y-8">
            <Link href="/">
              <Image
                src="/nhd-logo-white.png"
                alt="NHD logo"
                width={300}
                height={0}
              />
            </Link>
            <div>
              <p className="uppercase tracking-widest">Follow us:</p>
              <div className="flex gap-1 text-2xl pt-3">
                <FaFacebookSquare />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
          </div>

          <div className="grid gap-y-6">
            <div>
              <div className="flex gap-2 items-center pb-1">
                <FaRegCalendarAlt className="text-xl" />
                <p className="uppercase text-lg">Clinic Schedule</p>
              </div>
              <p className="indent-7">
                Monday to Sunday{' '}
                <span className="block">8:00 AM - 10:00 PM</span>
              </p>
            </div>
            <div>
              <div className="flex gap-2 items-center pb-1">
                <FaMapMarkerAlt className="text-xl" />
                <p className="uppercase text-lg">Location</p>
              </div>
              <p className="indent-7">B8 Bonifacio Highstreet, Taguig</p>
            </div>
          </div>

          <div className="md:col-start-2 md:row-start-1">
            <div className="pb-2">
              <p className="uppercase text-xl">Quick Links</p>
            </div>
            <div className="grid gap-1 sm:grid-cols-2 items-start text-lg">
              <ul className="grid gap-1">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">HMO</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">Services</Link>
                </li>
                <li>
                  <Link href="/">Appointment</Link>
                </li>
              </ul>
              <ul className="grid gap-1">
                <li>
                  <p>Online Results</p>
                  <ul className="text-base">
                    <li>
                      <Link href="/">Patient Portal</Link>
                    </li>
                    <li>
                      <Link href="/">Doctor Portal</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/">Be Part of us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm text-primary py-2 px-5 text-center uppercase">
        &copy; {year} Next Health Diagnostics. ALL RIGHTS RESERVED |{' '}
        <Link
          href="/terms-and-conditions"
          className="underline underline-offset-2"
        >
          Terms and Conditions
        </Link>{' '}
        |{' '}
        <Link href="/privacy-policy" className="underline underline-offset-2">
          Privacy Policy
        </Link>{' '}
      </div>
    </footer>
  );
}
