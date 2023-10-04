'use client';
import { useState } from 'react';
import { Container, Group, Burger, Anchor } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.css';
import Link from 'next/link';
import ToggleColorScheme from '../ColorSchemeToggle/ToggleColorScheme';

const links = [
  { link: '/', label: 'Home' },
  { link: '/TestPage', label: 'Test' },

];

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Anchor
      key={link.label}
      href={link.link}
      component={Link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        Logo
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Group gap={1}>
          <ToggleColorScheme />
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Group>
      </Container>
    </header>
  );
}
export default Navbar;