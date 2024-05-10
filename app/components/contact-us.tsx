import ContactUsForm from './contact-us-form';

export default function ContactUs() {
  return (
    <section className="bg-center bg-cover bg-[url('/images/contact-bg.jpg')]">
      <div className="backdrop-blur-lg bg-white/30 py-28 md:bg-transparent md:backdrop-blur-0">
        <div className="container">
          <h3 className="uppercase text-secondary font-semibold pb-12 text-4xl md:text-5xl">
            Get in touch <span className="block text-primary">with us</span>
          </h3>
          <div className="md:w-1/2">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </section>
  );
}
