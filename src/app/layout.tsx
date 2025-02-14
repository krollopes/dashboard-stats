'use client';

import { ReactNode } from 'react';
import GlobalStyle from '../styles/globalStyles';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='pt'>
      <head></head>
      <body>
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}
