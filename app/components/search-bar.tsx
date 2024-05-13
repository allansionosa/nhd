import { Input } from 'antd';
import { ChangeEventHandler } from 'react';
import { MdSearch } from 'react-icons/md';

export default function SearchBar({
  placeholder,
  onChange,
}: {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <Input
        size="large"
        allowClear
        placeholder={placeholder}
        className="!border-primary !pl-9"
        onChange={onChange}
      />
      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
        <MdSearch className="text-2xl text-primary" />
      </div>
    </div>
  );
}
