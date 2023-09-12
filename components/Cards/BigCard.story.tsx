import BigCard from './BigCard';
import { Meta, StoryObj, Preview } from '@storybook/react';

const meta: Meta<typeof BigCard> = {
  component: BigCard,
};

export default meta;

type Story = StoryObj<typeof BigCard>;

export const Primary: Story = {
  args: {
    title: 'Daktilo 2.0',
    badgeIconName: 'IconPlayerRecordFilled',
    badgePos: 'bottomLeft',
    badgeTitle: 'Live',
    cardImage:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    date: 'July, 25 2023',
    hasExtra: true,
    link: '/',
    cardSettings: {},
    listData: [
      {
        withImage: false,
        link: '/',
        content: "list hover color'i card'dan ayri değiştirmek için renk verin",
        hoverColor: 'purple',
      },
      {
        withImage: false,
        link: '/',
        content: 'What is Lorem Ipsum?',
      },
      {
        withImage: false,
        link: '/',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        hoverColor: 'lime',
      },
      {
        withImage: false,
        link: '/',
        content: "Lorem Ipsum has been the industry's standard dummy text",
      },
    ],
    listIconBackground: true,
    listIconBgSettings: {
      color: 'orange',
      radius: 'lg',
    },
    listIconSettings: {
      color: 'red',
      size: 20,
    },
    listIconName: 'IconCircleCheck',
    listType: 'custom',
    separator: true,
    cardImageAlt: 'image alt title',
  },
};
