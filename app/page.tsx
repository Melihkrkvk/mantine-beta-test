'use client'
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Anchor, Container, Grid, SimpleGrid } from '@mantine/core';
import { listData } from '../test-utils/mock';
import Link from 'next/link';
import BasicCard from '@/components/Cards/BasicCard/BasicCard';
import dynamic from 'next/dynamic';
import { res } from '@/test-utils/mock';

const DynamicCard = dynamic(
  () => import('@/components/Cards/BigCard'),
  {
    loading: () => <p>Loading...</p>,
  }
)

const ComponentMapper = (component: any): any => {
  const components: any = {
    'BigCard': DynamicCard,
  };
  return components[component];
};


export default function HomePage() {
  return (
    <>
      <Container my="md">
        <Grid columns={res.grid.columns}>
          {res.rows.map((row: any, index: any) => {
            console.log('row: ', row);
            return row.components.map((component: any, componentIndex: any) => {
              const Component = ComponentMapper(component.name);

              if (component.columns && component.columns.components.length) {
                return (
                  <Grid.Col
                    span={{ lg: component.breakpoints.lg, md: component.breakpoints.md, sm: component.breakpoints.sm }}
                    key={componentIndex}
                    id={`grid col ${index}`}
                  >
                    <SimpleGrid key={index} cols={component.columns.columns}  >
                      {
                        component.columns.components.map((col: any) => {
                          const NewComponent = ComponentMapper(col.name);
                          return (
                            <NewComponent {...col.props} />
                          );
                        })
                      }
                    </SimpleGrid>
                  </Grid.Col>
                );

              }
              return (
                <Grid.Col
                  key={componentIndex}
                  id={`grid col ${index}`}
                >
                  <SimpleGrid cols={component.columns}>
                    <Component {...component.props} />
                  </SimpleGrid>

                </Grid.Col>

              );
            });
          })}
        </Grid>
      </Container>
    </>
  );
}
