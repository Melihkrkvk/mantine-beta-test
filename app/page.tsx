import { Button, Container, Grid, GridCol, SimpleGrid } from '@mantine/core';
import Link from 'next/link';
import BasicCard from '@/components/Cards/BasicCard/BasicCard';
import dynamic from 'next/dynamic';
import { res } from '@/test-utils/mock';
import { getClient } from '@/lib/client';
import { GET_NEWS } from '@/graphql/news';

const DynamicCard = dynamic(
  () => import('@/components/Cards/BigCard'),
  {
    loading: () => <p>Loading...</p>,
  }
)

const DynamicSimpleCard = dynamic(
  () => import('@/components/Cards/SimpleCard/SimpleCard'),
  {
    loading: () => <p>Loading SimpleCard...</p>
  }
)

const ComponentMapper = (component: any): any => {
  const components: any = {
    'BigCard': DynamicCard,
    'SimpleCard': DynamicSimpleCard,
  };
  return components[component];
};




export default async function HomePage() {
  const data = await getClient().query<any>({
    query: GET_NEWS,
    variables: {
      name: "home",
    }
  })

  try {
    console.log(data.data.pageByName.template.screens[0].rows[0].columns[0].component);
    console.log(data.data.pageByName.template.screens[0].rows[0].columns[0].component.properties[0].value);

  } catch (error) {
    console.log(error);

  }


  return (
    <>
      <Container my="md">
        <Grid columns={res.grid.columns}>
          {res.rows.map((row: any, index: any) => {
            return row.components.map((component: any, componentIndex: any) => {
              const Component = ComponentMapper(component.name);

              if (component.columns && component.columns.components.length) {
                return (
                  <GridCol
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
                  </GridCol>
                );

              }
              return (
                <GridCol
                  span={{ lg: component.breakpoints.lg, md: component.breakpoints.md, sm: component.breakpoints.sm, xs: component.breakpoints.xs }}
                  key={componentIndex}
                  id={`grid col ${index}`}
                >
                  <SimpleGrid cols={component.columns}>
                    <Component {...component.props} />
                  </SimpleGrid>
                </GridCol>

              );
            });
          })}
        </Grid>
      </Container>
    </>
  );
}
