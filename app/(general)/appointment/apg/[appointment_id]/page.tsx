import CustomSteps from '@/app/components/custom-steps';

export default function Booking() {
  return (
    <section className="container py-28">
      <CustomSteps current={2} />
    </section>
  );
}
