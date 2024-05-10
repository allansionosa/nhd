import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

export default function Slogan() {
  return (
    <section className="overflow-hidden relative">
      <div className=" -z-10 -bottom-48 -left-64">
        {/* <Image
          src="/clip-board.png"
          alt="clip-board"
          width={800}
          height={0}
          className="rotate-[20deg]"
        /> */}
      </div>
      <div className="container ">
        <div className="flex -translate-y-4 z-10 justify-end">
          <div className="h-24 md:h-32 aspect-square relative translate-x-10 md:translate-x-14">
            <Image
              src="/images/home/arrow.svg"
              alt="arrow"
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>

          <div className="h-24 md:h-32 aspect-square relative">
            <Image
              src="/images/home/arrow.svg"
              alt="arrow"
              fill
              style={{
                objectFit: 'contain',
              }}
              className="grayscale"
            />
          </div>
        </div>

        <div className="grid gap-y-12 py-28 text-center">
          <div>
            <h3 className="text-4xl md:text-6xl text-primary font-medium mb-8">
              Your health is our priority
            </h3>
            <p className="max-w-[887px] m-auto text-lg md:text-xl text-secondary">
              We have a highly trained team of medical experts, advanced
              facilities, and unwavering commitment to the welfare of our
              patients.
            </p>
          </div>
          <Link href="/" className="pb-32">
            <Button size="large" type="primary">
              Learn more
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute -z-10 -bottom-48 -left-64 md:-bottom-72 md:-left-80">
        <div className="h-[600px] md:h-[800px] aspect-square relative translate-x-10 md:translate-x-14">
          <Image
            src="/images/home/clip-board.png"
            alt="arrow"
            fill
            style={{
              objectFit: 'contain',
            }}
            className="rotate-[20deg]"
          />
        </div>
      </div>
    </section>
  );
}
