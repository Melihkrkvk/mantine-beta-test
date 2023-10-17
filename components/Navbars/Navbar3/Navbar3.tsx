'use client';
import { useState } from 'react';
import { Container, Anchor, Group, Burger, Box, Text, Divider, Drawer, Transition, Paper } from '@mantine/core';
import { useClickOutside, useDisclosure } from '@mantine/hooks';
import classes from './Navbar3.module.css';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { IconArrowBack, IconArrowBackUp, IconHome, IconHome2 } from '@tabler/icons-react';

const Toggler = dynamic(() => import('@/components/ColorSchemeToggle/ToggleColorScheme'), {
    loading: () => <p>toggler loading...</p>
})

interface Navbar3 {
    toggler: boolean;
}

const links = [
    {
        link: '/Ekonomi',
        label: 'Ekonomi',
        subLinks: [
            {
                link: '/Ekonomi/TurkLirasi',
                label: 'Türk Lirası',
            },
            {
                link: '/Ekonomi/Dolar',
                label: 'Dolar',
            },
        ],
    },
    {
        link: '/Spor',
        label: 'Spor',
        subLinks: [
            {
                link: '/Spor/Fenerbahce',
                label: 'Fenerbahçe',
            },
            {
                link: '/Spor/Galatasaray',
                label: 'Galatasaray',
            },
        ],
    },
    {
        link: '/',
        label: 'Home'
    },
];

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
                link: '/link1',
            },
            {
                label: 'Test2',
                link: '/link1',
            },
        ],
    },
];

const Navbar3 = ({ toggler = true }: Navbar3) => {
    const router = useRouter();
    const pathname = usePathname();
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    /* const [burgerOpened, setBurgerOpened] = useState(false); */
    const [burgerOpened, { toggle: toggleBurger, close: closeBurger }] = useDisclosure(false);
    const clickOutsideRef = useClickOutside(closeBurger);
    const [backButtonClicked, setButtonClicked] = useState(false);
    const category = pathname.split('/').filter(Boolean)[0];


    /* const mainItems = mainLinks.map((item, index) => {
      return (
        <Anchor
          component={Link}
          href={item.link}
          key={item.label}
          className={classes.mainLink}
          data-active={pathname === item.link || undefined}
          onClick={(event) => {}}
        >
          {item.label}
        </Anchor>
      );
    }); */

    const selectedLink = links.find((link) => link.link === `/${category}`);


    const subItems = (
        <>
            <Text className={classes.selected_category}>{selectedLink?.label}</Text>
            {selectedLink?.subLinks?.map((subItem, index) => (
                <Anchor
                    component={Link}
                    href={subItem.link}
                    key={index}
                    className={classes.mainLink}
                    data-active={pathname === subItem.link || undefined}
                >
                    {subItem.label}
                </Anchor>
            ))}
            <Divider orientation='vertical' size={'xs'} my={10} mx={10} bg={'red'} />
            <IconArrowBack className={classes.icon} style={{ cursor: 'pointer', marginRight: 10 }} onClick={() => {
                setButtonClicked(true);
            }} />
            <IconHome className={classes.icon} style={{ cursor: 'pointer' }} onClick={() => {
                router.push('/')
            }} />
        </>
    );

    /* const subItems = selectedLink?.subLinks?.map((subItem, index) => (
      <>
        <Anchor
          component={Link}
          href={subItem.link}
          key={index}
          className={classes.mainLink}
          data-active={pathname === subItem.link || undefined}
        >
          {subItem.label}
        </Anchor>
      </>
    )); */

    const mainItems = links
        .map((item, index) => {
            return (
                <>
                    <Anchor
                        component={Link}
                        href={item.link}
                        key={index}
                        className={classes.mainLink}
                        data-active={pathname === item.link || undefined}
                        onClick={(event) => { }}
                    >
                        {item.label}
                    </Anchor>
                </>
            );
        })
        .flat();

    const ShownLinks = () => {
        if (selectedLink) {
            return subLinks;
        } else if (backButtonClicked || !selectedLink) { return mainItems }
    };



    return (
        <>
            <header className={classes.header}>
                <Container size={'lg'} className={classes.inner}>
                    <Group>
                        <Burger
                            opened={burgerOpened}
                            onClick={toggleBurger}
                            className={classes.burger}
                            size="sm"
                            visibleFrom="sm"
                        />
                        LOGO
                        <Box className={classes.links} visibleFrom="sm">
                            <Group gap={0} className={classes.mainLinks}>
                                {/* {selectedLink ? subItems : mainItems} */}
                                {(backButtonClicked || !selectedLink) ? mainItems : subItems}


                            </Group>
                        </Box>
                    </Group>
                    <Group>
                        {toggler &&
                            <Toggler />
                        }
                        <Burger
                            opened={drawerOpened}
                            onClick={toggleDrawer}
                            className={classes.burger}
                            size="sm"
                            hiddenFrom="sm"
                        />
                    </Group>
                </Container>
            </header>
            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                title="Mobile Drawer"
                size="100%"
                zIndex={1000000}
                hiddenFrom='sm'
                position='right'
            >
                <Container bg={'red'}></Container>
            </Drawer>
            <Transition mounted={burgerOpened} duration={500} transition='scale-y'>
                {(transitionStyle) => (
                    <Paper
                        h={'35%'}
                        pos={'absolute'}
                        top={55}
                        left={0}
                        right={0}
                        ref={clickOutsideRef}
                        style={{ ...transitionStyle, zIndex: 9999, backgroundColor: 'red' }}
                    >
                        My Model
                    </Paper>
                )}
            </Transition>
        </>
    );
};
export default Navbar3;
