'use client';

import {
  Button,
  Card,
  Collapse,
  CollapseProps,
  Divider,
  Input,
  Select,
  message,
} from 'antd';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import React, { useEffect, useRef, useState } from 'react';
import {
  useAppointment,
  useAppointmentActions,
  useCurrentStepAction,
} from '@/app/store';

interface PackageTypes {
  id: number;
  packageName: string;
  price: string;
  children: React.ReactNode;
}

const packages: PackageTypes[] = [
  {
    id: 1,
    packageName: 'Pre Employment Package ',
    price: 'PHP 2,500',
    children: (
      <ul className="list-disc px-12 text-base ">
        <li>Urinalysis</li>
        <li>Consultation</li>
        <li>Height/Weight/BMI, Waist Circumference, Blood Pressure</li>
        <li>Eye Sight</li>
        <li>Chest X-ray (2 Directions)</li>
      </ul>
    ),
  },
  {
    id: 2,
    packageName: 'Executive Health Check Up',
    price: 'PHP 2,500',
    children: (
      <ul className="list-disc px-12 text-base ">
        <li>Urinalysis</li>
      </ul>
    ),
  },
  {
    id: 3,
    packageName: 'Men Executive Health Check Up',
    price: 'PHP 3,500',
    children: (
      <ul className="list-disc px-12 text-base ">
        <li>Urinalysis</li>
        <li>Eye Sight</li>
        <li>Chest X-ray (2 Directions)</li>
      </ul>
    ),
  },
];

export default function ChoosePackage() {
  const [heights, setHeights] = useState<{ [key: number]: number }>({});
  const refs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const [messageApi, contextHolder] = message.useMessage();
  const { next, previous } = useCurrentStepAction();
  const { selectedPackage } = useAppointment();
  const { setSelectedPackage } = useAppointmentActions();

  useEffect(() => {
    packages.forEach((item) => {
      if (refs.current[item.id]) {
        setHeights((prevHeights) => ({
          ...prevHeights,
          [item.id]: refs.current[item.id]!.scrollHeight,
        }));
      }
    });
  }, [packages, selectedPackage]);

  const handleNext = () => {
    if (selectedPackage.id !== 0) {
      next();
    } else {
      messageApi.error({
        content: (
          <span className="text-sm uppercase font-semibold">
            Please select a package
          </span>
        ),
      });
    }
  };

  return (
    <div>
      {contextHolder}
      <div className="grid gap-y-2">
        <div className="relative">
          <Input
            size="large"
            styles={{
              input: {
                borderColor: '#BA0C2F',
              },
            }}
            value={selectedPackage.name}
            style={{
              pointerEvents: 'none',
            }}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
            <IoIosArrowDown className="text-xl text-primary" />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 divide-y-2 ">
          {packages.map((item) => {
            const isActive = selectedPackage.id === item.id;
            return (
              <div
                className={`p-5 cursor-pointer ${
                  isActive ? 'text-primary' : 'text-black'
                }`}
                onClick={() => {
                  setSelectedPackage(item.packageName, item.id);
                }}
                key={item.id}
              >
                <div className="flex justify-between items-center gap-x-2">
                  <div className="flex flex-wrap justify-between font-semibold text-lg w-full md:text-xl">
                    <p>{item.packageName}</p>
                    <p>{item.price}</p>
                  </div>
                  <div>
                    <IoIosArrowForward
                      className={`text-xl transition-all duration-300 ease-in-out ${
                        isActive ? 'rotate-90' : 'rotate-0'
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden`}
                  style={{
                    maxHeight: isActive ? `${heights[item.id]}px` : '0px',
                  }}
                  ref={(el) => {
                    refs.current[item.id] = el;
                  }}
                >
                  <div className="py-10 px-5 ">{item.children}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between mt-10 ">
        <Button type="text" size="large" onClick={() => previous()}>
          <p className="text-primary">Back</p>
        </Button>
        <Button type="text" size="large" onClick={handleNext}>
          <p className="text-primary">Next</p>
        </Button>
      </div>
    </div>
  );
}
