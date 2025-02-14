'use client';

import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='pt'>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
