'use client';
import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconNotification,
  IconCheck,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  TablerIconsProps,
} from '@tabler/icons-react';
import classes from './Navbar2.module.css';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import ToggleColorScheme from '@/components/ColorSchemeToggle/ToggleColorScheme';


const mockdata = [
  {
    label: 'Home',
    link: '/',
    isMega: false

  },
  {
    label: 'Authors',
    link: '/#',
    isMega: true,
    megaMenuSettings: {
      title: 'Authors',
      viewAllTitle: 'View All',
      viewAllLink: '/Authors',
      footerTitle: 'Author Aplication',
      footerDescp: 'Lets work together',
      footerButtonTitle: 'Apply',
    },
    megaMenuLinks: [
      {
        icon: IconCheck,
        title: 'Open source',
        description: 'This Pokémon’s cry is very loud and distracting',
      },
      {
        icon: IconCoin,
        title: 'Free for everyone',
        description: 'The fluid of Smeargle’s tail secretions changes',
      },
      {
        icon: IconBook,
        title: 'Documentation',
        description: 'Yanma is capable of seeing 360 degrees without',
      },
      {
        icon: IconFingerprint,
        title: 'Security',
        description: 'The shell’s rounded shape and the grooves on its.',
      },
      {
        icon: IconChartPie3,
        title: 'Analytics',
        description: 'This Pokémon uses its flying ability to quickly chase',
      },
      {
        icon: IconNotification,
        title: 'Notifications',
        description: 'Combusken battles with the intensely hot flames it spews',
      },
    ],
  },
  {
    label: 'Economics',
    link: '/#',
    isMega: false,
  },
  {
    label: 'Sport',
    link: '/#',
    isMega: false,
  },
];

const mobileData = [
  {
    label: 'Home',
    link: '/',
    isMega: false,
  },
  {
    label: 'Authors',
    link: '/#',
    isMega: true,
    megaMenuLinks: [
      {
        icon: IconCheck,
        title: 'Open source',
        description: 'This Pokémon’s cry is very loud and distracting',
      },
      {
        icon: IconCoin,
        title: 'Free for everyone',
        description: 'The fluid of Smeargle’s tail secretions changes',
      },
      {
        icon: IconBook,
        title: 'Documentation',
        description: 'Yanma is capable of seeing 360 degrees without',
      },
      {
        icon: IconFingerprint,
        title: 'Security',
        description: 'The shell’s rounded shape and the grooves on its.',
      },
      {
        icon: IconChartPie3,
        title: 'Analytics',
        description: 'This Pokémon uses its flying ability to quickly chase',
      },
      {
        icon: IconNotification,
        title: 'Notifications',
        description: 'Combusken battles with the intensely hot flames it spews',
      },
    ],
  },
  {
    label: 'We can show',
    link: '/',
    isMega: false,
  },
  {
    label: 'Diffrent Links',
    link: '/',
    isMega: false,
  },
];

/* const testData = [
  {
    icon: 'IconCheck',
    title: 'test',
    description: 'this is a test descp',
  },
  {
    icon: 'IconPlayerPlayFilled',
    title: 'test',
    description: 'this is a test descp',
  }
]
 */
/* Sonra incele 
function IconMapper({ iconName }: any | undefined) {
  const DynamicIcon = dynamic(() => import('@tabler/icons-react').then((mod) => testData[0].icon.slice(0, testData[0].icon.length)))
  const icons: any = {
    'IconCheck': DynamicIcon
  }
  return icons[iconName]
} */

const Navbar2 = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();


  //BEST PRACTICE Mİ? KONTROL ET
  const menuLinks = mockdata.map((item, index) => {
    const megaMenuItems = item.megaMenuLinks?.map((item, key) => {
      return (
        <UnstyledButton className={classes.subLink} key={key}>
          <Group wrap="nowrap" align="flex-start">
            <ThemeIcon size={34} variant="default" radius="md">
              <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
            </ThemeIcon>
            <div>
              <Text size="sm" fw={500}>
                {item.title}
              </Text>
              <Text size="xs" c="dimmed">
                {item.description}
              </Text>
            </div>
          </Group>
        </UnstyledButton>
      );
    })

    if (item.isMega) {
      return (
        <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
          <HoverCard.Target>
            <a href="#" className={classes.link}>
              <Center inline>
                <Box component="span" mr={5}>
                  {item.label}
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </a>
          </HoverCard.Target>

          <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
            <Group justify="space-between" px="md">
              <Text fw={500}>{item.megaMenuSettings?.title}</Text>
              <Anchor href={item.megaMenuSettings?.viewAllLink} fz="xs">
                {item.megaMenuSettings?.viewAllTitle}
              </Anchor>
            </Group>

            <Divider my="sm" />

            <SimpleGrid cols={2} spacing={0}>
              {megaMenuItems}
            </SimpleGrid>

            <div className={classes.dropdownFooter}>
              <Group justify="space-between">
                <div>
                  <Text fw={500} fz="sm">
                    {item.megaMenuSettings?.footerTitle}
                  </Text>
                  <Text size="xs" c="dimmed">
                    {item.megaMenuSettings?.footerDescp}
                  </Text>
                </div>
                <Button variant="default">{item.megaMenuSettings?.footerButtonTitle}</Button>
              </Group>
            </div>
          </HoverCard.Dropdown>
        </HoverCard>
      )
    }
    return (
      <Link href={item.link} className={classes.link}>{item.label}</Link>
    );

  }).flat();

  const mobileMenuLinks = mobileData.map((item, index) => {
    const megaMenuItems = item.megaMenuLinks?.map((item, key) => {
      return (
        <UnstyledButton className={classes.subLink} key={key}>
          <Group wrap="nowrap" align="flex-start">
            <ThemeIcon size={34} variant="default" radius="md">
              <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
            </ThemeIcon>
            <div>
              <Text size="sm" fw={500}>
                {item.title}
              </Text>
              <Text size="xs" c="dimmed">
                {item.description}
              </Text>
            </div>
          </Group>
        </UnstyledButton>
      );
    })

    if (item.isMega) {
      return (
        <>
          <UnstyledButton key={index} className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                {item.label}
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{megaMenuItems}</Collapse>
        </>
      )
    }
    return (
      <Link href={item.link} className={classes.link}>{item.label}</Link>
    )
  }).flat();

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          Logo
          <Group h="100%" gap={0} visibleFrom="sm">
            {menuLinks}
          </Group>
          <Group>
            <ToggleColorScheme />
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          {mobileMenuLinks}
          <Divider my="sm" />
          {/* mobile button area */}
        </ScrollArea>
      </Drawer>
    </Box>
  );
};
export default Navbar2;
