'use client';
import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import classes from './MostViewed.module.css';

const MostViewed = () => {
    return (
        <Tabs variant="unstyled" defaultValue="mostViewed" classNames={classes}>
            <Tabs.List grow >
                <Tabs.Tab
                    value="mostViewed"
                    leftSection={<IconMessageCircle style={{ width: rem(16), height: rem(16) }} />}
                >
                    Viewed
                </Tabs.Tab>
                <Tabs.Tab
                    value="mostSpoken"
                    leftSection={<IconPhoto style={{ width: rem(16), height: rem(16) }} />}
                >
                    Spoken
                </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="mostViewed" pt="xs">
                Most Viewed content
            </Tabs.Panel>
            <Tabs.Panel value="mostSpoken" pt="xs">
                Most Talked tab content
            </Tabs.Panel>
        </Tabs>
    );
}
export default MostViewed;