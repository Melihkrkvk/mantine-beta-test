'use client';
import { useState } from 'react';
import { Container, Anchor, Group, Burger, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar3.module.css';
import ToggleColorScheme from '@/components/ColorSchemeToggle/ToggleColorScheme';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


const mainLinks = [
    { link: '/', label: 'Gündem', hasSubLinks: true },
    { link: '/Ekonomi', label: 'Ekonomi' },
    { link: '/Siyaset', label: 'Siyaset' },
    { link: '/Spor', label: 'Spor' },
    { link: '/Canli', label: 'Canlı' },
];

const subLinks = [
    {
        title: 'Gündem',
        links: [
            {
                label: 'Test1',
                link: '/link1'
            },
            {
                label: 'Test2',
                link: '/link1'
            },
        ]
    }
];

const Navbar3 = () => {
    const pathname = usePathname();
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(0);


    const mainItems = mainLinks.map((item, index) => {
        if (item.hasSubLinks) {


        }
        return (
            <Anchor
                component={Link}
                href={item.link}
                key={item.label}
                className={classes.mainLink}
                data-active={pathname === item.link || undefined}
                onClick={(event) => {

                }}
            >
                {item.label}
            </Anchor>
        )
    });

    return (
        <header className={classes.header}>
            <Container className={classes.inner}>
                <Group>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        className={classes.burger}
                        size="sm"
                        visibleFrom='sm'
                    />
                    LOGO
                    <Box className={classes.links} visibleFrom="sm">
                        <Group gap={0} className={classes.mainLinks}>
                            {mainItems}
                        </Group>
                    </Box>
                </Group>
                <Group>
                    <ToggleColorScheme />
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        className={classes.burger}
                        size="sm"
                        hiddenFrom="sm"
                    />
                </Group>
            </Container>
        </header>
    );
}
export default Navbar3;