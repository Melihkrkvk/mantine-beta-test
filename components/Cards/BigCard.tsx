import {
  ThemeIcon,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
  List,
  rem,
  Group,
} from '@mantine/core';
import Link from 'next/link';
import classes from './BigCard.module.css';

interface BigCard {
  title: string;
  listType: 'on' | 'off' | 'custom';
  date?: string;
  hasExtra: boolean;
  separator: boolean;
  link: string;
  badgeTitle: string;
  badgePos: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
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

const BigCard = ({
  title = 'Title',
  listType = 'off',
  date,
  hasExtra = true,
  separator = true,
  link,
  badgeTitle = 'badge Title',
  badgePos = 'topLeft',
  badgeIconName,
  listIconName,
  listData,
  listIconBackground,
  listIconBgSettings,
  listIconSettings,
}: BigCard) => {
  return <div className={classes.card}>TEST</div>;
};

export default BigCard;
