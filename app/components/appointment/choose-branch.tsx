'use client';

import { Button, Input, message } from 'antd';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import React, { useEffect, useRef, useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import {
  useAppointment,
  useAppointmentActions,
  useCurrentStepAction,
} from '@/app/store';

interface BranchTypes {
  id: number;
  branchName: string;
  address: string;
}

const branches: BranchTypes[] = [
  {
    id: 1,
    branchName: 'BGC High Street',
    address:
      'B8, Ground Flr., The Spa Wellness Building, Bonifacio Global City',
  },
  {
    id: 2,
    branchName: 'Makati City',
    address:
      'B8, Ground Flr., The Spa Wellness Building, Bonifacio Global City',
  },
  {
    id: 3,
    branchName: 'Pasig City',
    address:
      'B8, Ground Flr., The Spa Wellness Building, Bonifacio Global City',
  },
];

export default function ChooseBranch() {
  const [messageApi, contextHolder] = message.useMessage();
  const { setSelectedBranch } = useAppointmentActions();
  const { selectedBranch } = useAppointment();

  const { next } = useCurrentStepAction();

  const handleNext = () => {
    if (selectedBranch.id !== 0) {
      next();
    } else {
      messageApi.error({
        content: (
          <span className="text-sm uppercase font-semibold">
            Please select a branch
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
            value={selectedBranch.name}
            style={{
              pointerEvents: 'none',
            }}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
            <IoIosArrowDown className="text-xl text-primary" />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 divide-y-2 ">
          {branches.map((item) => {
            const isActive = selectedBranch.id === item.id;
            return (
              <div
                className={`px-5 py-8 cursor-pointer ${
                  isActive ? 'text-primary' : 'text-black'
                }`}
                key={item.id}
                onClick={() => {
                  setSelectedBranch(item.branchName, item.id);
                }}
              >
                <div className="flex gap-x-1">
                  <MdLocationOn className="text-3xl shrink-0 " />
                  <div>
                    <p className="font-semibold text-lg md:text-xl">
                      BGC High Street
                    </p>
                    <span className="md:text-lg">
                      B8, Ground Flr., The Spa Wellness Building, Bonifacio
                      Global City
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-end mt-10 ">
        <Button type="text" size="large" onClick={handleNext}>
          <p className="text-primary">Next</p>
        </Button>
      </div>
    </div>
  );
}
