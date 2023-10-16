import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import ClassicFooter from '@/components/Footers/ClassicFooter/ClassicFooter';
import Navbar from '@/components/Navbars/Navbar/Navbar';
import Navbar2 from '@/components/Navbars/Navbar2/Navbar2';
import Navbar3 from '@/components/Navbars/Navbar3/Navbar3';

export const metadata = {
  title: 'Daktilo 2.0',
  description: 'Daktilo',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="tr">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          {/* <Navbar /> */}
          {/* <Navbar2 /> */}
          <Navbar3 toggler />
          {children}
          <ClassicFooter />
        </MantineProvider>
      </body>
    </html>
  );
}
