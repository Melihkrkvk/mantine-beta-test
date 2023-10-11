'use client';
import { createTheme, Box, Text, Button, rem } from '@mantine/core';

export const theme = createTheme({
  //primaryColor: 'bright-pink',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  colors: {
    //myColor: ['red', 'yellow', 'blue', 'pink', 'green', 'aqua', 'orange', 'black', 'purple', 'maroon'],
    //dark: ['red', 'yellow', 'blue', 'pink', 'green', 'aqua', 'lime', 'black', 'purple', 'maroon'],
    'bright-pink': [
      '#F0BBDD',
      '#ED9BCF',
      '#EC7CC3',
      '#ED5DB8',
      '#F13EAF',
      '#F71FA7',
      '#FF00A1',
      '#E00890',
      '#C50E82',
      '#AD1374',
    ],
  },
  headings: {
    fontFamily: 'Segoe',
    sizes: {
      h1: { fontSize: rem(56) },
    },
  },

  /*  components: {
     Button: Button.extend({
       styles: {
         root: { backgroundColor: 'red' },
         label: { color: 'blue' },
         inner: { fontSize: 20 },
       },
     }),
   }, */
});
