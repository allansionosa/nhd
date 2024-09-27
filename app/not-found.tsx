'use client';
import { Button } from 'antd';
import React from 'react';
import { LuConstruction } from 'react-icons/lu';
const NotFound = () => {
  return (
    <section className="container my-28 text-center gap-y-5">
      <div className=" flex flex-col items-center justify-center bg-gradient-to-b p-4">
        <div className="text-center">
          <LuConstruction className="w-24 h-24 text-primary mx-auto mb-8 animate-bounce" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Under Construction
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're working hard to bring you something amazing. Please check back
            soon!
          </p>
          <Button
            type="primary"
            onClick={() => (window.location.href = '/')}
            className=" hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 bg-primary"
          >
            Go to Home Page
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
