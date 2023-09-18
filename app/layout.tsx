import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import Navbar from '@/components/Navbars/Navbar';
import NavbarSimple from '@/components/Navbars/NavbarSimple';

export const metadata = {
  title: 'Daktilo 2.0',
  description: 'Daktilo',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          {/* <Navbar /> */}
          <NavbarSimple />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
