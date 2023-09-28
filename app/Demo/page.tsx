'use client';
import { Button, Container, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import darkMode from '@/hooks/darkMode';
const Demo = () => {
  const { value } = darkMode();

  return (
    <Container m={'lg'}>
      <h1>Demo page</h1>
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
      <Button color={'my-blue'}>Test</Button>
    </Container>
  );
};

export default Demo;
