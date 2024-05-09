import Image from 'next/image';
import Link from 'next/link';

interface NewsTypes {
  img: string;
  title: string;
  description: string;
  link: string;
}

const prevNews: NewsTypes[] = [
  {
    img: '/sample-news-img.jpg',
    title: 'Latest News Headline',
    description:
      'Next Health Diagnostics is an exceptional clinic that provides a comprehensive range of diagnostic services dedicated to fostering a proactive approach to lifestyle and wellness.',
    link: '/',
  },
  {
    img: '/sample-news-img.jpg',
    title: 'Latest News Headline',
    description:
      'Next Health Diagnostics is an exceptional clinic that provides a comprehensive range of diagnostic services dedicated to fostering a proactive approach to lifestyle and wellness.',
    link: '/',
  },
];
export default function LatestNews() {
  return (
    <section className="container my-56">
      <h3 className="font-mairy text-primary text-5xl md:text-6xl">
        Latest news & updates
      </h3>

      <div className="pt-10 grid gap-10 md:grid-cols-3 items-start">
        <Link href="/" className="grid gap-y-5 group col-span-2">
          <div className="w-full h-96 md:h-[600px] bg-slate-200 rounded-3xl overflow-hidden relative">
            <Image
              src="/sample-news-img.jpg"
              alt="arrow"
              fill
              style={{
                objectFit: 'cover',
              }}
              className="ease-in-out duration-300  group-hover:scale-110 "
            />
          </div>
          <div>
            <h5 className="text-2xl text-primary">Latest News Headline</h5>
            <p className="text-secondary line-clamp-3">
              Next Health Diagnostics is an exceptional clinic that provides a
              comprehensive range of diagnostic services dedicated to fostering
              a proactive approach to lifestyle and wellness.
            </p>
          </div>
          <p className="text-sm text-primary group-hover:underline">
            Read more
          </p>
        </Link>

        <div className="grid gap-7 ">
          {prevNews.map((item, i) => (
            <Link
              href={item.link}
              className="grid gap-5 group grid-cols-5 md:grid-cols-1"
            >
              <div className="w-full h-32 sm:h-44 md:h-52 bg-slate-200 rounded-3xl overflow-hidden relative col-span-2">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                  className="ease-in-out duration-300  group-hover:scale-110 "
                />
              </div>
              <div className="col-span-3">
                <h5 className="text-xl text-primary">Latest News Headline</h5>
                <div className="pt-2">
                  <p className="text-secondary text-sm line-clamp-3 pb-1">
                    {item.description}
                  </p>

                  <p className="text-sm text-primary group-hover:underline">
                    Read more
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
