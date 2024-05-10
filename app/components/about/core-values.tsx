import Image from 'next/image';

interface CoreValuesTypes {
  id: number;
  img: string;
  title: string;
  description: string;
}

const data: CoreValuesTypes[] = [
  {
    id: 0,
    img: '/images/about/professionalism.svg',
    title: 'Professionalism',
    description:
      'We commit to being competent, diligent, honest, and respectful to our colleagues. In whatever we do, we shall exercise fairness and truthfulness with all of our stakeholders.',
  },
  {
    id: 1,
    img: '/images/about/customer-centricity.svg',
    title: 'Customer Centricity',
    description:
      'We shall uphold the highest commitment to our patients, giving the utmost priority and dedicated care; we shall think and deliver, with the patients’ health and well-being on top of our minds at all times.',
  },
  {
    id: 2,
    img: '/images/about/star.svg',
    title: 'Customer Centricity',
    description:
      'As we aspire to become the best, we shall be the experts in our fields of endeavor and shall impart this expertise to others who have the same passion and values for excellence.',
  },
  {
    id: 3,
    img: '/images/about/teamwork.svg',
    title: 'Teamwork',
    description: 'We encourage a collaborative and reassuring work culture.',
  },
];

export default function CoreValues() {
  return (
    <section>
      <div className="absolute -translate-y-8 md:-translate-y-12 right-0 z-10">
        <div className="flex ">
          <div className="h-16 md:h-24 aspect-square relative translate-x-7 md:translate-x-12">
            <Image
              src="/images/arrow.svg"
              alt="arrow"
              fill
              style={{
                objectFit: 'contain',
              }}
              className="grayscale"
            />
          </div>
          <div className="h-16 md:h-24 aspect-square relative">
            <Image
              src="/images/arrow.svg"
              alt="arrow"
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>
      <h3 className="bg-[#E5C4CD] text-center font-mairy pt-3 font-medium text-6xl text-primary">
        Core Values
      </h3>

      <div className="py-36 container text-primary text-center grid gap-y-12 gap-x-8 items-start sm:grid-cols-2 md:grid-cols-4 md:gap-x-12">
        {data.map((item) => (
          <div
            key={item.id}
            className="grid justify-center justify-items-center gap-y-5"
          >
            <div className="h-[120px] aspect-square relative">
              <Image
                src={item.img}
                alt={item.title}
                fill
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
            <div>
              <h5 className="text-2xl font-mairy uppercase font-semibold tracking-wide">
                {item.title}
              </h5>
              <p className="font-questrial font-light">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
