import { ReactNode } from 'react';
import { ServerStyleSheet } from 'styled-components';

export const metadata = {
  title: 'Dashboard de Estatísticas',
  description: 'Projeto demonstrativo de gráficos com React e Next.js.',
};

export default function Layout({ children }: { children: ReactNode }) {
  const sheet = new ServerStyleSheet();
  try {
    return (
      <html lang='pt'>
        <head>{sheet.getStyleElement()}</head>
        <body>{children}</body>
      </html>
    );
  } finally {
    sheet.seal();
  }
}
