'use client';

import { Button, Form, Input } from 'antd';

export default function ContactUsForm() {
  const validatePhoneNumber = (rule: any, value: string) => {
    const phoneNumber = String(value);
    if (!phoneNumber.startsWith('09') || phoneNumber.length !== 11) {
      return Promise.reject('Invalid phone number');
    }
    return Promise.resolve();
  };
  return (
    <Form
      layout="vertical"
      size="large"
      onFinish={() => {
        console.log('finish');
      }}
    >
      <div className="grid md:grid-cols-2 gap-x-5">
        <Form.Item
          name="fname"
          rules={[
            {
              required: true,
              message: 'Please input your first name',
            },
          ]}
        >
          <Input placeholder="First Name" />
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
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item
          name="contactNo"
          rules={[
            {
              required: true,
              message: 'Please input your contact number',
            },
            {
              validator: validatePhoneNumber,
            },
          ]}
        >
          <Input placeholder="Contact Number" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please input your email address',
            },
          ]}
        >
          <Input placeholder="Email Address" />
        </Form.Item>
      </div>
      <Form.Item
        name="subject"
        rules={[
          {
            required: true,
            message: 'Please input the message subject',
          },
        ]}
      >
        <Input placeholder="Subject" />
      </Form.Item>
      <Form.Item
        name="message"
        rules={[
          {
            required: true,
            message: 'Please input your message',
          },
        ]}
      >
        <Input.TextArea placeholder="Message" />
      </Form.Item>
      <div className="grid justify-end">
        <Button type="primary" htmlType="submit">
          Send Message
        </Button>
      </div>
    </Form>
  );
}
