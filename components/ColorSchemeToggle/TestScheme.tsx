'use client';
import { useLocalStorage } from '@mantine/hooks';
import { ActionIcon } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export default function TestToggler() {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = () =>
    setColorScheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return (
    <ActionIcon onClick={toggleColorScheme}>
      {colorScheme === 'dark' ? <IconSun /> : <IconMoonStars />}
    </ActionIcon>
  );
}
