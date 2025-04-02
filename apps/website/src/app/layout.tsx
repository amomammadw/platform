import { config } from '@platform/config';
// @ts-expect-error
import favicon from '@platform/config/favicon';
import { Dialog } from '@platform/ui';
import './global.css';
import { Metadata, Viewport } from 'next';
import { MainHeader } from '../components/layout/header/MainHeader';
import { ReactScan } from '#/components/layout/ReactScan';
import ReactQueryProvider from '#/providers/ReactQueryProvider';
import { MainFooter } from '#/components/layout/footer/MainFooter';
import { UpperFooter } from '#/components/layout/footer/UpperFooter';

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

export const viewport: Viewport = {
  themeColor: config.themeColor,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={config.lang} dir={config.dir}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body>
        <ReactQueryProvider>
          <MainHeader />
          <main>{children}</main>
          <UpperFooter />
          <MainFooter />
          <Dialog />
        </ReactQueryProvider>
        <ReactScan />
      </body>
    </html>
  );
}
