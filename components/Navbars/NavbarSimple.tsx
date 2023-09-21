'use client';
import { useEffect, useState } from 'react';
import { Container, Group, Burger, rem, Anchor, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import clsx from 'clsx';
import classes from './NavbarSimple.module.css';

type linkProps = Array<{
  link: string;
  label: string;
}>;

const links: linkProps = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/Demo',
    label: 'Demo',
  },
];

const NavbarSimple = () => {

  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link, index) => (
    <Anchor
      component={Link}
      key={index}
      href={link.link}
      className={clsx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        setActive(link.link);
      }}
      style={(theme) => ({})}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        <Group>
          <Link
            className={classes.logo}
            href={'/'}
            onClick={() => {
              setActive(links[0].link);
            }}
          >
            Logo
          </Link>
          <Group className={classes.links}>{items}</Group>
        </Group>
        <Group>
          <div>search</div>
          <div>toggler</div>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size={'sm'} />
        </Group>
      </Container>
    </header>
  );
};

export default NavbarSimple;
