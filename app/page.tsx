import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Anchor, Container, Grid, GridCol } from '@mantine/core';
import { listData } from '../test-utils/mock';
import Link from 'next/link';
import BigCard from '@/components/Cards/BigCard';
import BasicCard from '@/components/Cards/BasicCard/BasicCard';

export default function HomePage() {
  return (
    <>
      <Container size={'110rem'}>
        <ColorSchemeToggle />
        <Anchor
          component={Link}
          href={'/Demo'}
          styles={{
            root: { textDecorationColor: 'red' },
          }}
        >
          asd
        </Anchor>

        <Grid p={20}>
          <GridCol span={6}>
            <BigCard
              title="Deneme"
              badgeTitle="Deneme2"
              hasExtra={true}
              link={'/'}
              listType="custom"
              separator={true}
              badgeIconName="IconCircle"
              listIconName="IconCircleDashed"
              listData={listData}
              date="Agust, 03 2023"
              listIconBackground={true}
              listIconBgSettings={{
                radius: 'lg',
              }}
              listIconSettings={{
                size: 20,
              }}
              cardImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              cardImageAlt="Temsili görsel"
            />
          </GridCol>
          <GridCol span={6}>
            <BigCard
              title="Deneme"
              badgeTitle="Deneme2"
              hasExtra={true}
              link={'/'}
              listType="custom"
              separator={true}
              badgeIconName="IconCircle"
              listIconName="IconCircleDashed"
              listData={listData}
              date="Agust, 03 2023"
              listIconBackground={true}
              listIconBgSettings={{
                radius: 'lg',
              }}
              listIconSettings={{
                size: 20,
              }}
              cardImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              cardImageAlt="Temsili görsel"
            />
          </GridCol>
          <GridCol span={4}>
            <BasicCard />
          </GridCol>
        </Grid>
      </Container>
    </>
  );
}
