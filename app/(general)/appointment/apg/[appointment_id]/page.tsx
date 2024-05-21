'use client';

import BookingSummary from '@/app/components/appointment/booking-summary';
import Content from '@/app/components/appointment/content';
import CustomSteps from '@/app/components/custom-steps';
import { useCurrentStep } from '@/app/store';
import { Button } from 'antd';
import { useState } from 'react';

export default function Booking() {
  const current = useCurrentStep();

  return (
    <section className=" bg-[#F1F1F1]">
      <div className="container py-28 ">
        <CustomSteps current={current} />

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <BookingSummary />
          </div>

          <div className="md:col-span-3">
            <Content current={current} />
          </div>
        </div>
      </div>
    </section>
  );
}
