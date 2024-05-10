import About from '../components/home/about';
import Banner from '../components/home/banner';
import ContactUs from '../components/home/contact-us';
import LatestNews from '../components/home/latest-news';
import QuickLinks from '../components/home/quick-links';
import Slogan from '../components/home/slogan';

export default function Home() {
  return (
    <section>
      <Banner />
      <About />
      <Slogan />
      <QuickLinks />
      <LatestNews />
      <ContactUs />
    </section>
  );
}
