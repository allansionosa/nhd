import Image from 'next/image';

export default function AboutBanner() {
  return (
    <div>
      <div className="w-full h-[300px] md:h-[490px] relative overflow-hidden">
        <Image
          src="/images/about/about-banner.jpg"
          alt="about-banner"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'top',
          }}
        />
        <div className="translate-x-1/3 -translate-y-1/3 md:translate-x-[40%]">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="/images/about/dotted1.svg"
              alt="dotted-1"
              fill
              style={{
                objectFit: 'contain',
              }}
              className="opacity-10"
            />
          </div>
        </div>

        <div className="absolute bottom-0 right-0 left-0 top-0">
          <div className="container grid items-center content-center h-full w-full">
            <h3 className="text-white text-4xl md:text-6xl">
              Let’s make your{' '}
              <span className="block indent-6">
                health a <span className="text-primary">priority</span>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
