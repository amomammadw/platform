import { config } from '@platform/config';
import { Dialog } from '@platform/ui';
import './global.css';
import { Metadata } from 'next';
import { MainHeader } from '../components/layout/header/MainHeader';

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  authors: [{ name: config.author?.name, url: config.author?.website }],
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
        <main className="py-5 container">{children}</main>
        <Dialog />
      </body>
    </html>
  );
}
