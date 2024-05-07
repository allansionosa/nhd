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

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex items-center gap-x-5">
      <div className="flex items-center gap-10">
        <div className="hidden md:block w-[706.72px]">
          <Menu
            theme="dark"
            selectedKeys={[pathname]}
            mode="horizontal"
            items={items}
          />
        </div>

        <div className="flex gap-x-2 items-center">
          <Link href="/" className="hidden sm:block md:hidden xl:block">
            <Button type="primary" className="uppercase" size="small">
              Patient Portal
            </Button>
          </Link>
          <Link href="/" className="hidden sm:block md:hidden xl:block">
            <Button type="primary" className="uppercase" size="small">
              Doctor Portal
            </Button>
          </Link>
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
