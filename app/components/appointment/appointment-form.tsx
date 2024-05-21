'use client';
import { validatePhoneNumber } from '@/app/helpers';
import { Button, Card, Form, Input } from 'antd';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AppointmentForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = (values: any) => {
    console.log(values);
    setIsLoading(true);
    setTimeout(() => {
      router.push('/appointment/apg/1123');
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div>
      <div className="max-w-[800px] px-5 m-auto md:-translate-y-20">
        <Card
          title={
            <div className="py-8">
              <h4 className="text-center font-medium text-white text-2xl">
                Schedule an appointment
              </h4>
            </div>
          }
          styles={{
            header: {
              backgroundColor: '#ba0c2f',
            },
            body: {
              paddingBlock: '50px',
            },
          }}
        >
          <Form className="py-10" onFinish={handleSubmit}>
            <div className="grid md:grid-cols-2 md:gap-x-5">
              <Form.Item
                name="fname"
                rules={[
                  {
                    required: true,
                    message: 'Please input your first name',
                  },
                ]}
              >
                <Input placeholder="First name" size="large" />
              </Form.Item>
              <Form.Item name="maname">
                <Input placeholder="Middle name (optional)" size="large" />
              </Form.Item>
              <Form.Item
                name="lname"
                rules={[
                  {
                    required: true,
                    message: 'Please input your last name',
                  },
                ]}
              >
                <Input placeholder="Last name" size="large" />
              </Form.Item>
              <Form.Item name="suffix">
                <Input placeholder="Suffix (optional)" size="large" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email',
                  },
                  {
                    type: 'email',
                    message: 'Please input valid email',
                  },
                ]}
              >
                <Input placeholder="Email address" size="large" />
              </Form.Item>
              <Form.Item
                name="contact_no"
                rules={[
                  {
                    required: true,
                    message: 'Please input your contact number',
                  },
                  {
                    validator: validatePhoneNumber,
                  },
                ]}
                validateFirst
              >
                <Input placeholder="Contact no." size="large" />
              </Form.Item>
            </div>

            <div className="grid justify-end">
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                loading={isLoading}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
}
