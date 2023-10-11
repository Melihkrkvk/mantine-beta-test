'use client';
import { Container, Group, Burger, Anchor } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.css';
import Link from 'next/link';
import ToggleColorScheme from '../../ColorSchemeToggle/ToggleColorScheme';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

const Navbar2 = dynamic(() => import('../Navbar2/Navbar2'));

const links = [
  { link: '/', label: 'Home' },
  { link: '/TestPage', label: 'Test' },
  { link: '/Demo', label: 'Demo' },
];

type NavbarProps = {
  logoType?: 'text' | 'img';
  logoLink?: string;
  linkGap?: number | `${number}${'px'}`;
  rightGap?: number | `${number}${'px'}`;
  burgerMenuVissible?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  burgerMenuSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  navbarType?: 'type1' | 'type2';
};

const Navbar = ({
  logoLink = '/',
  logoType = 'text',
  linkGap = 5,
  rightGap = 5,
  burgerMenuVissible = 'xs',
  burgerMenuSize = 'sm',
  navbarType = 'type2',
}: NavbarProps) => {
  const pathname = usePathname();
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <Anchor
      key={link.label}
      href={link.link}
      component={Link}
      className={classes.link}
      data-active={pathname === link.link || undefined}
    >
      {link.label}
    </Anchor>
  ));
  if (navbarType === 'type2') {
    return <Navbar2 />;
  }

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <Link className={classes.logo} href={logoLink}>
          Logo
        </Link>
        <Group gap={linkGap} visibleFrom="xs">
          {items}
        </Group>
        <Group gap={rightGap}>
          <ToggleColorScheme />
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom={burgerMenuVissible}
            size={burgerMenuSize}
          />
        </Group>
      </Container>
    </header>
  );
};
export default Navbar;
