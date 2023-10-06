'use client';
import { Button, Container, Grid, GridCol, SimpleGrid, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SimpleCard from '@/components/Cards/SimpleCard/SimpleCard';
import BasicCard from '@/components/Cards/BasicCard/BasicCard';
const Demo = () => {

  return (
    <Container size={'lg'}>
      <Grid columns={12}>
        <GridCol bg={'red'} span={{ base: 6 }}>
          grid col 1
        </GridCol>
        <GridCol bg={'blue'} span={{ base: 6 }}>
          grid col 2
        </GridCol>
      </Grid>
    </Container>
  );
};

export default Demo;
