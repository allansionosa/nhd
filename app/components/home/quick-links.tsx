import Image from 'next/image';
import Link from 'next/link';

interface QuickLinksTypes {
  title: string;
  blockTitle: string;
  img: string;
  link: string;
}

const quickLinksData: QuickLinksTypes[] = [
  {
    title: 'Schedule',
    blockTitle: 'an appointment',
    img: '/images/home/calendar.svg',
    link: '/appointment',
  },
  {
    title: 'Create',
    blockTitle: 'an account',
    img: '/images/home/user.svg',
    link: '',
  },
  {
    title: 'Check',
    blockTitle: 'online results',
    img: '/images/home/checklist.svg',
    link: '',
  },
];

export default function QuickLinks() {
  return (
    <section className="grid font-mairy text-primary divide-y md:divide-y-0 md:divide-x  md:grid-cols-3">
      {quickLinksData.map((item, i) => (
        <Link
          href={item.link}
          className="relative px-5 py-20 overflow-hidden hover:bg-white/70 hover:text-primary/50 transition ease-in-out delay-50 md:h-[600px]"
          key={i}
        >
          <h4 className="text-4xl sm:text-5xl grid md:justify-center">
            {item.title}
            <span className="block">{item.blockTitle}</span>
          </h4>
          <div
            className={`absolute -z-10 ${
              i === 2
                ? '-right-14 top-2/4 -translate-y-2/4 md:translate-y-20  md:-right-16'
                : '-right-12 top-2/4 -translate-y-2/4 md:translate-y-20  md:-right-8'
            }`}
          >
            <div className="h-[180px] sm:h-[200px] md:h-[260px] aspect-square relative">
              <Image
                src={item.img}
                alt={item.title}
                fill
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
