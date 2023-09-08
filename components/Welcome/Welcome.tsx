import { Title, Text } from '@mantine/core';
import classes from './Welcome.module.css';

interface Welcome {
  title?: string;
  color?: any;
}

export function Welcome({ title = 'Daktilo 2.0', color }: Welcome) {
  return (
    <>
      <Title className={classes.title} ta="center" c={color} mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          {title}
        </Text>
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Try to change title and color.
      </Text>
    </>
  );
}
