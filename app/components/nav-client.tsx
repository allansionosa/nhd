'use client';

import Link from 'next/link';
import { Menu, Drawer, Button } from 'antd';
import type { MenuProps } from 'antd';
import { usePathname } from 'next/navigation';
import { BiMenu } from 'react-icons/bi';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';

export default function NavigationClient({
  items,
}: {
  items: MenuProps['items'];
}) {
  let pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  if (pathname.startsWith('/appointment')) {
    pathname = '/appointment';
  }

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex items-center gap-x-5">
      <div className="flex gap-x-5 flex-col items-end xl:flex-row xl:items-center">
        <div className="hidden md:block md:w-[706.72px]">
          <Menu
            theme="dark"
            selectedKeys={[pathname]}
            mode="horizontal"
            items={items}
          />
        </div>

        <div className="flex gap-x-2 items-center">
          <div className="hidden sm:block">
            <div className="flex gap-2 flex-wrap flex-col sm:flex-row">
              <Link href="/" className="">
                <Button type="primary" className="uppercase" size="small">
                  <p className="text-xs">Patient Portal</p>
                </Button>
              </Link>
              <Link href="/" className="">
                <Button type="primary" className="uppercase" size="small">
                  <p className="text-xs">Doctor Portal</p>
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-primary flex items-center p-1.5 rounded-full ">
            <FaPhoneAlt className="text-white" />
          </div>
        </div>
      </div>

      <nav className="text-3xl text-altBlack md:hidden">
        <BiMenu onClick={showDrawer} className="cursor-pointer" />
        <Drawer
          placement="right"
          onClose={onClose}
          open={open}
          destroyOnClose={true}
          styles={{
            header: {
              display: 'grid',
              justifyItems: 'end',
              padding: 0,
              paddingTop: '15px',
              paddingBottom: '15px',
              border: 'none',
            },
            body: {
              padding: 0,
            },
          }}
          closeIcon={<IoMdClose className="text-3xl text-secondary" />}
        >
          <Menu
            selectedKeys={[pathname]}
            mode="inline"
            items={items}
            onSelect={() => setOpen(false)}
            style={{
              fontSize: '18px',
            }}
          />
        </Drawer>
      </nav>
    </div>
  );
}
