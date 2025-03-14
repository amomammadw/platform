import { config } from '@platform/config';
// @ts-expect-error
import favicon from '@platform/config/favicon';
import { Dialog } from '@platform/ui';
import './global.css';
import { Metadata } from 'next';
import { MainHeader } from '../components/layout/header/MainHeader';
import { ReactScan } from '#/components/layout/ReactScan';

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  authors: [{ name: config.author?.name, url: config.author?.website }],
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: favicon.src,
      url: favicon.src,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={config.lang} dir={config.dir}>
      <body>
        <MainHeader />
        <main>{children}</main>
        <Dialog />
        <ReactScan />
      </body>
    </html>
  );
}
