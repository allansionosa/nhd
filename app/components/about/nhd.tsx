import Image from 'next/image';

export default function NHD() {
  return (
    <section>
      <div className="h-[600px] md:h-screen w-full relative">
        <Image
          src="/images/about/about-bg.jpg"
          alt="heart"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div className="absolute bottom-0 right-0 left-0 top-0 backdrop-blur-sm bg-white/50 lg:backdrop-blur-none lg:bg-transparent">
          <div className="container py-28">
            <h1 className="font-mairy text-primary text-6xl md:text-8xl">
              About us
            </h1>
            <p className="text-justify font-questrial text-secondary tracking-wide md:text-lg md:max-w-[600px]">
              Next Health Diagnostics (NHD) was formed with the belief that
              preventive healthcare must be an integral part of a proactive
              lifestyle. Focus with providing global-standard service, NHD has a
              continuously increasing array of diagnostic services, from routine
              and specialized laboratory tests to preventive and medical imaging
              that are multi-specialty in nature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
