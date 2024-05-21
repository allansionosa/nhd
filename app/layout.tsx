import type { Metadata } from 'next';
import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import localFont from 'next/font/local';
import { Questrial } from 'next/font/google';

const gotham = localFont({
  src: '../public/font/Gotham Book.otf',
  variable: '--font-gotham',
});
const mairy = localFont({
  src: '../public/font/Mairy Book.otf',
  variable: '--font-mairy',
});

const questrial = Questrial({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-questrial',
});

export const metadata: Metadata = {
  title: 'Next Health Diagnostics',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AntdRegistry>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#BA0C2F',
              fontFamily: 'var(--font-gotham)',
              colorTextSecondary: '#FFFF00',
              // borderRadiusLG: 1000,
            },
            components: {
              Menu: {
                darkItemBg: 'transparent',
                darkItemColor: '#BA0C2F',
                darkItemSelectedBg: 'transparent',
                darkItemSelectedColor: '#BA0C2F',
                darkItemHoverColor: '#BA0C2F',
              },
              Button: {
                paddingInlineSM: 14,
                paddingBlockLG: 12,
                paddingInlineLG: 30,
                controlHeightLG: 55,
                contentFontSizeLG: 18,
                borderRadiusLG: 1000,
                borderRadiusSM: 1000,
              },
              Carousel: {
                dotHeight: 10,
                dotWidth: 10,
                dotActiveWidth: 10,
              },
              Input: {
                borderRadiusLG: 20,
                paddingInlineLG: 18,
              },
              Select: {
                borderRadiusLG: 20,
                colorBorder: '#BA0C2F',
                colorIcon: '#BA0C2F !important',
              },
              Card: {
                borderRadiusLG: 30,
              },
              Collapse: {
                headerBg: '#ffffff',
                borderRadiusLG: 20,
                colorBorder: 'transparent',
              },
              DatePicker: {
                borderRadius: 20,
                paddingInline: 18,
              },
            },
          }}
        >
          <body
            className={`${gotham.variable} ${gotham.className} ${mairy.variable} ${questrial.variable}`}
          >
            {children}
          </body>
        </ConfigProvider>
      </AntdRegistry>
    </html>
  );
}
