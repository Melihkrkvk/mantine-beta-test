'use client';
import SimpleCard from '@/components/Cards/SimpleCard/SimpleCard';
import DetailSystem from '@/components/DetailSystem/DetailSystem';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Container, Grid, GridCol, Group, Text, Title, } from '@mantine/core';
import BasicCard from '@/components/Cards/BasicCard/BasicCard';

const TestPage = () => {
  /* const mobile = useMediaQuery('(max-width: 36em)', true, { getInitialValueInEffect: false });
  const tablet = useMediaQuery('(max-width: 62em)', true, { getInitialValueInEffect: false });

  if (mobile) {
    return (
      <>
        <Container size={'xs'}>
          <h1>Mobile Design</h1>
          <SimpleCard link="/" title="Mobile Design" descp="this is a descp" />
        </Container>
      </>
    );
  } else if (tablet) {
    return (
      <>
        <Container size={'sm'}>
          <h1>Table Design</h1>
          <BasicCard />
        </Container>
      </>
    );
  } */

  return (
    <>
      <Container>
        <Grid>
          <GridCol span={6}>
            <Title order={1}>h1 heading</Title>
            <h2>h2 heading</h2>
            <h3>h3 heading</h3>
            <h4>h4 heading</h4>
            <h5>h5 heading</h5>
            <h6 style={{ color: 'var(--mantine-color-bright-pink-6)' }}>h6 heading</h6>
            <Text c={'var(--mantine-color-bright-pink-6)'} style={{ '--mantine-color-bright-pink-6': 'blue' }}>Test heading</Text>
          </GridCol>
          <GridCol span={6}>
            <Group display={'flex'} justify='space-around'>
              <Button variant='default'>Default Button</Button>
              <Button variant='filled'>Filled Button</Button>
              <Button variant='gradient'>Gradient Button</Button>
            </Group>
            <Group mt={20} display={'flex'} justify='space-around'>
              <Button variant='light'>Light Button</Button>
              <Button variant='outline'>Outline Button</Button>
              <Button variant='subtle'>Subtle Button</Button>
            </Group>
            <Group mt={20} display={'flex'} justify='space-around'>
              <Button variant='transparent'>Transparent Button</Button>
              <Button variant='white'>White Button</Button>
            </Group>
          </GridCol>
        </Grid>
      </Container>

    </>
  );
};

export default TestPage;
