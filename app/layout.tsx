import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import NavbarSimple from '@/components/Navbars/NavbarSimple';
import ClassicFooter from '@/components/Footers/ClassicFooter/ClassicFooter';
import Navbar from '@/components/Navbars/Navbar';


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
          <Navbar />
          {/* <NavbarSimple /> */}
          {children}
          <ClassicFooter />
        </MantineProvider>
      </body>
    </html>
  );
}
