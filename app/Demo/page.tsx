'use client';
import {
  Button,
  Container,
  Title,
  useMantineColorScheme,
  useComputedColorScheme,
} from '@mantine/core';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

const Demo = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const [value, SetValue] = useState('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tryMode = window.localStorage.getItem('mantine-color-scheme') as any;
      SetValue(tryMode);
    }
  }, [colorScheme]);

  return (
    <Container m={'lg'}>
      <h1>Demo page</h1>
      <ColorSchemeToggle />
      <Button component={Link} href={'/'}>
        Back
      </Button>
      <Title
        styles={{
          root: {
            color:
              value === 'dark'
                ? `var(--mantine-color-grape-4)`
                : value === 'light'
                ? `var(--mantine-color-red-4)`
                : '',
          },
        }}
      >
        Deneme
      </Title>
    </Container>
  );
};

export default Demo;
