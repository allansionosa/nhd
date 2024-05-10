import AboutBanner from '@/app/components/about/banner';
import CoreValues from '@/app/components/about/core-values';
import Facilities from '@/app/components/about/facilities';
import MissionVision from '@/app/components/about/mission-vision';
import NHD from '@/app/components/about/nhd';

export default function About() {
  return (
    <section className="bg-[#efedf0]">
      <AboutBanner />
      <NHD />
      <MissionVision />
      <CoreValues />
      <Facilities />
    </section>
  );
}
