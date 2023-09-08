import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Anchor, Grid } from '@mantine/core';
import { themeBreakePoints } from '../test-utils/mock';
import Link from 'next/link';
import BigCard from '@/components/Cards/BigCard';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Anchor
        component={Link}
        href={'/Demo'}
        styles={{
          root: { textDecorationColor: 'red' },
        }}
      >
        asd
      </Anchor>
      {/* <BigCard /> */}
    </>
  );
}
