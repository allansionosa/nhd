import { useAppointment } from '@/app/store';
import { Card } from 'antd';

export default function BookingSummary() {
  const { selectedBranch, selectedPackage } = useAppointment();
  return (
    <Card
      title={
        <div className="py-4">
          <h4 className="text-center text-primary text-lg uppercase">
            Booking Summary
          </h4>
        </div>
      }
      styles={{
        header: {
          backgroundColor: '#FFFFFF',
        },
        body: {
          paddingBlock: '50px',
        },
      }}
      className="w-full"
    >
      <div className="grid gap-y-6">
        <Description
          title="Location"
          value={selectedBranch.id !== 0 ? selectedBranch.name : '-'}
        />
        <Description
          title="Package"
          value={selectedPackage.id !== 0 ? selectedPackage.name : '-'}
        />
        <Description title="Date & Time" value="BGC Branch" />
      </div>
    </Card>
  );
}

const Description = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="grid grid-cols-2 gap-x-2 text-lg">
      <p className="text-primary">{title}</p>
      <p className="text-end font-medium">{value}</p>
    </div>
  );
};
