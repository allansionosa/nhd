'use client';

import { useCurrentStepAction } from '@/app/store';
import { Button, Calendar, TimePicker } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

export default function DateTime() {
  const { next, previous } = useCurrentStepAction();
  const [currentDate, setCurrentDate] = useState(dayjs());

  const handlePrev = () => {
    setCurrentDate((prevDate) => prevDate.subtract(1, 'month'));
  };

  const handleNext = () => {
    setCurrentDate((prevDate) => prevDate.add(1, 'month'));
  };

  return (
    <div>
      <div className="grid gap-5">
        <TimePicker
          size="large"
          className="w-full"
          format="hh:mm A"
          showNow={false}
        />
        <div className="flex flex-col items-center  mx-auto bg-white py-8 rounded-3xl ">
          <div className="flex items-center justify-between w-full mb-4 px-10 text-primary">
            <IoIosArrowBack
              className="cursor-pointer text-3xl"
              onClick={handlePrev}
            />
            <span className="font-bold text-3xl uppercase">
              {currentDate.format('MMMM YYYY')}
            </span>
            <IoIosArrowForward
              className="cursor-pointer text-3xl"
              onClick={handleNext}
            />
          </div>
          <Calendar
            fullscreen={false}
            value={currentDate}
            onSelect={(date) => setCurrentDate(date)}
            headerRender={() => null}
            className="!text-xl"
          />
        </div>
      </div>
      <div className="flex justify-between mt-10 ">
        <Button type="text" size="large" onClick={() => previous()}>
          <p className="text-primary">Back</p>
        </Button>
        <Button type="text" size="large" onClick={() => next()}>
          <p className="text-primary">Next</p>
        </Button>
      </div>
    </div>
  );
}
