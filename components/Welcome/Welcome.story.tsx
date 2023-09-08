import { Welcome } from './Welcome';
import {Meta, StoryObj, Preview} from '@storybook/react';

const meta: Meta<typeof Welcome> = {
  component: Welcome,
};
export default meta;

type Story = StoryObj<typeof Welcome>;

export const Primary: Story = {args: {
  title: 'Daktilo 2.0',
  color: 'black',
}}
