import Navbar3 from './Navbar3';

import { Meta, StoryObj, Preview } from '@storybook/react';

const meta: Meta<typeof Navbar3> = {
    component: Navbar3,
};

export default meta;

type Story = StoryObj<typeof Navbar3>;

export const Primary: Story = {
    args: {

    }
};
