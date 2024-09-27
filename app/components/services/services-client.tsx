'use client';

import { Empty, Select } from 'antd';
import SearchBar from '../search-bar';
import { IoIosArrowDown } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import { ServicesTypes } from '@/app/(general)/services/page';
import { useState } from 'react';

interface Options {
  label: string;
  value: string;
}

const branchOptions: Options[] = [
  { label: 'Makati', value: 'makati' },
  // { label: 'Cavite', value: 'cavite' },
];
const hmoOptions: Options[] = [
  // { label: 'Avega', value: 'avega' },
  // {
  //   label: 'Care Health Plus',
  //   value: 'care-health-plus',
  // },
];

export default function ServicesClient({ data }: { data: ServicesTypes[] }) {
  const [hover, setHover] = useState<{ [key: string]: boolean }>(() => {
    return data.reduce<{ [key: string]: boolean }>((acc, curr) => {
      acc[curr.id] = false;
      return acc;
    }, {});
  });

  const [serviceNameQuery, setServiceNameQuery] = useState('');
  const [branchQuery, setBranchQuery] = useState('');
  const [hmoQuery, setHmoQuery] = useState('');

  const filteredData = data.filter((service) => {
    const serviceNameMatch = service.name
      .toLowerCase()
      .includes(serviceNameQuery.toLowerCase());
    const branchMatch =
      branchQuery === '' || service.branch.includes(branchQuery);
    const hmoMatch = hmoQuery === '' || service.hmo.includes(hmoQuery);
    return serviceNameMatch && branchMatch && hmoMatch;
  });

  return (
    <div>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 pt-5 pb-14">
        <SearchBar
          placeholder="Search for services"
          onChange={(e) => {
            setServiceNameQuery(e.target.value);
          }}
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
          <Select
            size="large"
            className="!border-primary"
            showSearch
            suffixIcon={<IoIosArrowDown className="text-xl text-primary" />}
            placeholder="Select branch"
            options={branchOptions}
            dropdownStyle={{
              borderRadius: 8,
            }}
            allowClear
            onSelect={(value) => setBranchQuery(value)}
            onClear={() => setBranchQuery('')}
          />
          <Select
            size="large"
            className="!border-primary "
            showSearch
            suffixIcon={<IoIosArrowDown className="text-xl text-primary" />}
            placeholder="Select HMO"
            options={hmoOptions}
            dropdownStyle={{
              borderRadius: 8,
            }}
            allowClear
            onSelect={(value) => setHmoQuery(value)}
            onClear={() => setHmoQuery('')}
          />
        </div>
      </div>

      {filteredData.length > 0 ? (
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 ">
          {filteredData.map((service, i) => (
            <Link
              href={service.link}
              key={service.id}
              onMouseOver={() =>
                setHover((prev) => ({
                  ...prev,
                  [service.id]: true,
                }))
              }
              onMouseLeave={() =>
                setHover((prev) => ({
                  ...prev,
                  [service.id]: false,
                }))
              }
            >
              <div className="px-5 py-20 relative overflow-hidden md:h-[600px] transition ease-in-out delay-50 hover:bg-primary group">
                <h4 className="font-mairy text-4xl sm:text-5xl text-primary group-hover:text-white max-w-44">
                  {service.name}
                </h4>
                <div className="absolute -right-12 top-2/4 -translate-y-2/4 md:top-2/3">
                  <div className="h-[180px] sm:h-[300px] md:h-[420px] aspect-square relative">
                    <Image
                      src={hover[service.id] ? service.hover_img : service.img}
                      alt=""
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                      className="p-5 md:p-0"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <Empty description="No services data" />
      )}
    </div>
  );
}
