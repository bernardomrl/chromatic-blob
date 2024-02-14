import { Metadata } from 'next';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Chromatic blob',
  description: 'Website made by Bernardo Meirelles'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
