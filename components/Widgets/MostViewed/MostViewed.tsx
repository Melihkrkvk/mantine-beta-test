'use client';
import { List, ListItem, Tabs, rem } from '@mantine/core';
import { IconEye, IconMessageCircle } from '@tabler/icons-react';
import classes from './MostViewed.module.css';
import ExtraList from '@/components/ExtraList/ExtraList';
import Link from 'next/link';

const listData = [
    {
        content: 'deneme 1',
        withImage: true,
        Image: '',
        link: '/',
    },
    {
        content: 'deneme 2',
        withImage: true,
        Image: '',
        link: '/',
    },
    {
        content: 'deneme 3',
        withImage: true,
        Image: '',
        link: '/',
    },
]

const MostViewed = () => {

    const listItem = listData?.map((data, index) => (
        <Link href={data.link} key={index}>
            <ListItem>
                <ExtraList {...data} />
            </ListItem>
        </Link>
    ));

    return (
        <Tabs variant="unstyled" defaultValue="mostViewed" classNames={classes}>
            <Tabs.List grow >
                <Tabs.Tab
                    value="mostViewed"
                    leftSection={<IconEye style={{ width: rem(16), height: rem(16) }} />}
                >
                    Çok Görüntülenen
                </Tabs.Tab>
                <Tabs.Tab
                    value="mostSpoken"
                    leftSection={<IconMessageCircle style={{ width: rem(16), height: rem(16) }} />}
                >
                    Çok Konuşulan
                </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="mostViewed" pt="xs">
                <List listStyleType='none'>
                    {listItem}
                </List>
            </Tabs.Panel>
            <Tabs.Panel value="mostSpoken" pt="xs">
                Most Talked tab content
            </Tabs.Panel>
        </Tabs>
    );
}
export default MostViewed;