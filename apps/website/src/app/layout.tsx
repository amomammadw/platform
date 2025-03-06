import { config } from '@platform/config';
import './global.css';
import { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
