import Image from 'next/image';

export default function MissionVision() {
  return (
    <section className="py-56 text-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-32 translate-x-12">
        <Image
          src="/images/about/wavy-line.svg"
          alt="wavy-line"
          height={0}
          className="opacity-20 rotate-45"
          width={700}
        />
      </div>
      <div className="container grid gap-y-20 sm:gap-y-52">
        <div className="flex gap-x-10 items-center">
          <div className="relative h-[150px] aspect-square">
            <Image
              src="/images/about/mission.svg"
              alt="person-with-a-flag"
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div>
            <h4 className="font-mairy font-medium text-5xl">Our Mission</h4>
            <p className="font-questrial text-lg max-w-[300px]">
              To form communities that are passionate and proactive about their
              wellness.
            </p>
          </div>
        </div>

        <div className="flex gap-x-10 items-center justify-end sm:text-right">
          <div className="relative h-[150px] aspect-square sm:order-last">
            <Image
              src="/images/about/vision.svg"
              alt="vision"
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div>
            <h4 className="font-mairy font-medium text-5xl">Our Vision</h4>
            <p className="font-questrial text-lg max-w-[420px]">
              To be a globally recognized as holistic care advocate and go-to
              place for everyone who has a desire to discover their health, feel
              good about themselves.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-32 -translate-x-12">
        <Image
          src="/images/about/wavy-line.svg"
          alt="wavy-line"
          height={0}
          className="opacity-20 -rotate-12"
          width={700}
        />
      </div>
    </section>
  );
}
