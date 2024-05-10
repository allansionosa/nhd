import { Button } from 'antd';
import Link from 'next/link';

export default function About() {
  return (
    <section className="bg-primary text-white text-center tracking-wide relative">
      <div className="about-overlay py-20">
        <div className="bg-left bg-cover md:bg-center md:bg-contain bg-no-repeat bg-[url('/images/home/pulse.svg')]">
          <div className="about-overlay">
            <div className="container grid gap-y-12 py-28">
              <div>
                <h3 className="text-4xl md:text-6xl  ont-medium mb-8">
                  Welcome to Next Health Diagnostics
                </h3>
                <p className="max-w-[887px] m-auto text-lg md:text-xl">
                  Next Health Diagnostics is an exceptional clinic that provides
                  a comprehensive range of diagnostic services dedicated to
                  fostering a proactive approach to lifestyle and wellness.
                </p>
              </div>
              <Link href="/">
                <Button size="large">
                  <p className="text-primary">Check our services</p>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
