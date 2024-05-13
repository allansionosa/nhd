'use client';

import { HMOTypes } from '@/app/(general)/hmo/page';
import { Input, Empty } from 'antd';
import { MdSearch } from 'react-icons/md';
import React, { useState } from 'react';
import Image from 'next/image';
import SearchBar from '../search-bar';

export default function HMOClient({ data }: { data: HMOTypes[] }) {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (value: string) => {
    setFilteredData(
      data.filter((hmo: HMOTypes) =>
        hmo.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div>
      {/* <div className="max-w-[562px] m-auto py-5 relative">
        <Input
          size="large"
          allowClear
          placeholder="Search HMO"
          className="!border-primary !pl-9"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
          <MdSearch className="text-2xl text-primary" />
        </div>
      </div> */}
      <div className="max-w-[600px] m-auto py-5">
        <SearchBar
          placeholder="Search HMO"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div className="pt-10">
        {filteredData.length < 1 ? (
          <Empty description="No Accredited HMO" />
        ) : (
          <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4  ">
            {filteredData.map((item) => (
              <li key={item.id}>
                <div className="h-24 relative">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    fill
                    style={{
                      objectFit: 'contain',
                    }}
                    quality={50}
                    className="p-5"
                  />
                </div>
                <p className="text-center text-sm text-secondary">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
