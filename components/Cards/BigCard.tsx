'use client';
import { ThemeIcon, Card, Image, Text, Container, AspectRatio, List, Group } from '@mantine/core';
import Link from 'next/link';
import {
  IconCamera,
  IconPlayerRecord,
  IconPlayerRecordFilled,
  IconVideo,
  IconCircleCheck,
  IconCircleDashed,
  IconCircle,
} from '@tabler/icons-react';
import classes from './BigCard.module.css';
import clsx from 'clsx';
import ExtraList from '../ExtraList/ExtraList';

interface BigCard {
  title: string;
  listType: 'on' | 'off' | 'custom' | 'number';
  date?: string;
  cardImage?: string;
  hasExtra: boolean;
  separator: boolean;
  link: string;
  badgeTitle: string;
  badgePos?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  badgeIconName?: string;
  listIconName?: string;
  listIconBackground?: boolean;
  listIconSettings?: {
    color: string;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  };
  listIconBgSettings?: {
    radius: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
    color: string;
  };
  listData?: Array<{
    withImage: boolean;
    content: string;
    link: string;
    selfIconName?: any;
  }>;
}

interface NestedIconProps {
  listIconBackground: boolean;
  listIconSettings?: any;
  listIconBgSettings?: any;
}

const IconMapper = (IconName: string | undefined | any) => {
  const icons: any = {
    IconPlayerRecordFilled: IconPlayerRecordFilled,
    IconVideo: IconVideo,
    IconPlayerRecord: IconPlayerRecord,
    IconCircleCheck: IconCircleCheck,
    IconCircleDashed: IconCircleDashed,
    IconCircle: IconCircle,
    IconCamera: IconCamera,
  };
  return icons[IconName];
};

export default function BigCard({
  title = 'Title',
  listType = 'off',
  date,
  hasExtra = false,
  separator = true,
  link,
  badgeTitle = 'badge Title',
  badgePos = 'topLeft',
  badgeIconName,
  listIconName,
  listData,
  listIconBackground = true,
  listIconBgSettings,
  listIconSettings,
  cardImage,
}: BigCard) {
  const Component = IconMapper(badgeIconName);
  const ListIconComponent = IconMapper(listIconName);

  const ListNestedIcon = ({
    listIconBackground = true,
    listIconSettings,
    listIconBgSettings,
  }: NestedIconProps) => {
    if (listIconBackground) {
      return (
        <ThemeIcon {...listIconBgSettings}>
          <ListIconComponent {...listIconSettings} />
        </ThemeIcon>
      );
    }
    return <ListIconComponent {...listIconSettings} />;
  };

  return (
    <>
      <Card key={title} p="md" radius="md" className={classes.card}>
        <Link key={title} href={link} className={classes.main_link}>
          <div style={{ position: 'relative' }}>
            <AspectRatio ratio={1920 / 1080}>
              <Image src={cardImage} />
            </AspectRatio>
            <div className={classes.badge}>
              <ListIconComponent
                style={{ marginRight: 8, alignSelf: 'center', color: 'red' }}
                size={20}
              />
              {badgeTitle}
            </div>
          </div>
          <Text className={classes.text_hover} c={'dimmed'} size={'xs'} tt={'uppercase'}>
            {date}
          </Text>
          <Text className={clsx([classes.title, classes.text_hover])} mt={5}>
            {title}
          </Text>
        </Link>
        {hasExtra && (
          <List
            mt={20}
            listStyleType={
              listType === 'on' ? 'inherit' : listType === 'number' ? '-moz-initial' : 'none'
            }
            icon={
              listType === 'custom' ? (
                <ListNestedIcon
                  listIconBackground={listIconBackground}
                  listIconBgSettings={listIconBgSettings}
                  listIconSettings={listIconBgSettings}
                />
              ) : (
                ''
              )
            }
          >
            {/* {listdata} */}
          </List>
        )}
      </Card>
    </>
  );
}
