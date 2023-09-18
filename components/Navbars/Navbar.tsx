import { useState } from 'react';
import { Container, Group, Text } from '@mantine/core';
import Link from 'next/link';
const Navbar = () => {
  return (
    <Container h={80} style={{ backgroundColor: 'red' }}>
      <Link href={'/'}>
        <Text>Logo</Text>
      </Link>
    </Container>
  );
};

export default Navbar;
