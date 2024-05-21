'use client';

import { useState } from 'react';

interface StepItemTypes {
  id: number;
  title: string;
}

const items: StepItemTypes[] = [
  {
    id: 1,
    title: 'Choose Branch',
  },
  {
    id: 2,
    title: 'Choose Package',
  },
  {
    id: 3,
    title: 'Select Date & Time',
  },
];

export default function CustomSteps({ current = 1 }: { current?: number }) {
  return (
    <div className="flex justify-around rounded-xl items-center py-2 font-semibold sm:bg-transparent relative mb-20 sm:mb-10">
      {items.map((item) => {
        const currentStep = current === item.id;
        return (
          <div key={item.id}>
            <div
              className={`py-2 px-[18px] rounded-full grid justify-center items-center transition-all duration-300 ease-in-out transform cursor-pointer border-2 sm:px-5 ${
                currentStep
                  ? 'bg-primary text-white  sm:bg-primary'
                  : 'text-primary '
              } ${
                item.id <= current
                  ? 'opacity-100 scale-110 border-primary'
                  : 'opacity-50 scale-100 '
              }`}
              //   onClick={() => setStep(item.id)}
            >
              <div className=" flex items-center gap-x-2">
                <p
                  className={`sm:py-2 sm:px-[17px] sm:rounded-full ${
                    currentStep
                      ? 'sm:bg-white sm:text-primary '
                      : 'sm:bg-primary sm:text-white'
                  }`}
                >
                  {item.id}
                </p>
                <p
                  className={`hidden sm:block ${
                    currentStep ? 'sm:text-white' : 'text-secondary'
                  }`}
                >
                  {item.title}
                </p>
              </div>
            </div>
            <p className="absolute -bottom-10 right-1/2 translate-x-1/2 text-primary sm:hidden">
              {current === item.id && item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}
