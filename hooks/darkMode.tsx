import { useMantineColorScheme } from '@mantine/core';
import { useEffect, useState } from 'react';

const darkMode = () => {
  const { colorScheme } = useMantineColorScheme();
  const [value, SetValue] = useState('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const getColorScheme = window.localStorage.getItem('mantine-color-scheme') as any;
      SetValue(getColorScheme);
    }
  }, [colorScheme]);
  return { value };
};

export default darkMode;
