import { Card } from 'antd';
import { CiStethoscope } from 'react-icons/ci';
import { IoCalendarClearOutline, IoNewspaperOutline } from 'react-icons/io5';

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
      <h2 className="font-mairy text-primary text-5xl md:text-6xl">
        Latest news & updates
      </h2>

      {/* <div className="pt-10 grid gap-10 md:grid-cols-3 items-start">
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
              key={i}
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

      <div className="grid justify-center mt-12">
        <Button type="primary" size="large">
          See all news & updates
        </Button>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
        <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col items-center justify-center p-8">
            <IoNewspaperOutline className="w-16 h-16 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              Hospital News
            </h3>
            <p className="text-center text-gray-600">
              We&apos;re preparing important updates about our services and
              staff. Check back soon for the latest hospital news.
            </p>
          </div>
        </Card>

        <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col items-center justify-center p-8">
            <IoCalendarClearOutline className="w-16 h-16 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              Upcoming Events
            </h3>
            <p className="text-center text-gray-600">
              Stay tuned for information about upcoming health seminars,
              community outreach programs, and wellness events.
            </p>
          </div>
        </Card>

        <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col items-center justify-center p-8">
            <CiStethoscope className="w-16 h-16 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              Health Tips
            </h3>
            <p className="text-center text-gray-600">
              We&apos;re compiling expert health advice and tips from our
              medical professionals. Visit again for valuable health
              information.
            </p>
          </div>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-700 max-w-2xl mx-auto">
          We&apos;re committed to keeping our community informed about the
          latest developments in healthcare and our hospital. Please check back
          regularly for updates on news, events, and health information.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block px-6 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-300"
        >
          Contact Us for More Information
        </a>
      </div>
    </section>
  );
}
