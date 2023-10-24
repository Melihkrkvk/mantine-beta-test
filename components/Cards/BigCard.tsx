'use client';
import { ThemeIcon, Card, Text, AspectRatio, List, Box, Image } from '@mantine/core';
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
  cardSettings?: {
    cardRadius?: 'xs' | 'sm' | 'md' | 'lg' | number;
    cardBgColor?: string;
    cardHoverColor?: string;
    titleFontSz?: 'xs' | 'sm' | 'md' | 'lg' | number;
    titleFontWe?: 'bold' | 'bolder' | number;
    titleFontFamily?: string;
    titleColor?: string;
    dateFontSz?: 'xs' | 'sm' | 'md' | 'lg' | number;
    dateFontColor?: string;
    dateFontFamily?: string;
    dateFontWe?: 'bold' | 'bolder' | number;
  };
  title: string;
  listType: 'on' | 'off' | 'custom' | 'number';
  date?: string;
  cardImage?: string;
  cardImageAlt?: string;
  hasExtra: boolean;
  separator: boolean;
  link: string;
  hasBadge: boolean;
  badgeTitle: string;
  badgePos?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  badgeIconName?: string;
  listIconName?: string;
  listIconBackground?: boolean;
  listIconSettings?: {
    color?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  };
  listIconBgSettings?: {
    radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
    color?: string;
  };
  withImage: boolean;
  listData?: Array<{
    /*     withImage: boolean; */
    title: string;
    slug: string;
    selfIconName?: any;
    hoverColor?: string;
    id: number;
  }>;
}

interface NestedIconProps {
  listIconBackground: boolean;
  listIconSettings?: any;
  listIconBgSettings?: any;
}

const IconMapper = (IconName: undefined | any) => {
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
  hasBadge = true,
  badgeTitle = 'badge Title',
  badgePos = 'topLeft',
  badgeIconName,
  listIconName,
  listData,
  listIconBackground = true,
  listIconBgSettings,
  listIconSettings,
  cardImage,
  cardImageAlt,
  withImage,
  cardSettings = {
    cardRadius: 'md',
    dateFontColor: 'dimmed',
    dateFontWe: 700,
    dateFontSz: 'xs',
  },
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

  const listdata = listData?.map((data, index) => (
    <Link key={index} href={`${data.id}${data.slug}`} className={classes.main_link}>
      <List.Item
        icon={data.selfIconName}
        key={index}
        pt={10}
        pb={10}
        className={separator ? classes.list_item : ''}
      >
        <ExtraList hoverColor={cardSettings.cardHoverColor} withImage={withImage} {...data} />
      </List.Item>
    </Link>
  ));

  const badgePoses = {
    bottomLeft: {
      bottom: -1,
      left: -1,
    },
    bottomRight: {
      bottom: -1,
      right: -1,
    },
    topLeft: {
      top: -1,
      left: -1,
    },
    topRight: {
      top: -1,
      right: -1,
    },
  };

  return (
    <>
      <Card
        bg={cardSettings.cardBgColor}
        key={title}
        p="md"
        radius={cardSettings?.cardRadius}
        className={classes.card}
      >
        <Link key={title} href={link} className={classes.main_link}>
          <div style={{ position: 'relative' }}>
            <AspectRatio ratio={1920 / 1080}>
              <Image src={cardImage} alt={cardImageAlt} />
            </AspectRatio>
            {hasBadge === true && (
              <Box style={badgePoses[badgePos]} ta={'center'} className={classes.badge}>
                <Component
                  style={{ marginRight: 8, alignSelf: 'center', color: 'red' }}
                  size={20}
                />
                {badgeTitle}
              </Box>
            )}
          </div>
          <Text
            className={classes.text_hover}
            c={cardSettings.dateFontColor}
            tt={'uppercase'}
            mt={'md'}
            fw={cardSettings.dateFontWe}
            fz={cardSettings.dateFontSz}
            ff={cardSettings.dateFontFamily}
            style={{
              textDecorationColor: cardSettings.cardHoverColor,
            }}
          >
            {date}
          </Text>
          <Text
            c={cardSettings.titleColor}
            fz={cardSettings.titleFontSz}
            fw={cardSettings.titleFontWe}
            ff={cardSettings.titleFontFamily}
            className={clsx([classes.title, classes.text_hover])}
            mt={{ base: 5 }}
            style={{
              textDecorationColor: cardSettings.cardHoverColor,
            }}
          >
            {title}
          </Text>
        </Link>
        {hasExtra && (
          <List
            mt={20}
            listStyleType={listType === 'on' ? 'inherit' : listType === 'number' ? 'bold' : 'none'}
            icon={
              listType === 'custom' ? (
                <ListNestedIcon
                  listIconBackground={listIconBackground}
                  listIconBgSettings={listIconBgSettings}
                  listIconSettings={listIconSettings}
                />
              ) : (
                ''
              )
            }
          >
            {listdata}
          </List>
        )}
      </Card>
    </>
  );
}
