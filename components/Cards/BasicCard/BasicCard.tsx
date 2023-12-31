'use client';
import { IconEye, IconMessageCircle } from '@tabler/icons-react';
import { Card, Text, Group, Center, rem, useMantineTheme, Image } from '@mantine/core';
import classes from './BasicCard.module.css';
import Link from 'next/dist/client/link';

export default function BasicCard() {
  const theme = useMantineTheme();

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component={Link}
      href="https://mantine.dev/"
      target="_blank"
    >
      <Image
        className={classes.image}
        src={
          'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
        height={300}
      />
      <div className={classes.overlay} />
      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} fw={500}>
            Journey to Swiss Alps
          </Text>

          <Group justify="space-between" gap="xs">
            <Text size="sm" className={classes.author}>
              Robert Gluesticker
            </Text>

            <Group gap="lg">
              <Center>
                <IconEye
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
                <Text size="sm" className={classes.bodyText}>
                  7847
                </Text>
              </Center>
              <Center>
                <IconMessageCircle
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
                <Text size="sm" className={classes.bodyText}>
                  5
                </Text>
              </Center>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
  );
}
