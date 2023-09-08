import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { localStorageColorSchemeManager } from './colorSchemeManager';

export const metadata = {
  title: 'Daktilo 2.0',
  description: 'Daktilo',
};

const colorSchemeManager = localStorageColorSchemeManager({ key: 'my-color-scheme' });

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
