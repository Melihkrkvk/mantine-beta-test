import { Container, Grid, GridCol, SimpleGrid } from '@mantine/core';
import dynamic from 'next/dynamic';
import res from '../../test-utils/mockApi.json';

const DynamicCard = dynamic(() => import('@/components/Cards/BigCard'), {
  loading: () => <p>Loading...</p>,
});

const DynamicSimpleCard = dynamic(() => import('@/components/Cards/SimpleCard/SimpleCard'), {
  loading: () => <p>Loading SimpleCard...</p>,
});

const ComponentMapper = (component: any): any => {
  const components: any = {
    BigCard: DynamicCard,
    SimpleCard: DynamicSimpleCard,
  };
  return components[component];
};

export default async function Demo() {
  return (
    <>
      <Container my="md">
        <Grid columns={res.grid}>
          {res.items.rows.map((row: any, index: any) => {
            return row.components.map((component: any, componentIndex: any) => {
              const Component = ComponentMapper(component.name);

              if (component.columns && component.columns.components.length) {
                return (
                  <GridCol
                    span={{
                      lg: component.breakpoints.lg,
                      md: component.breakpoints.md,
                      sm: component.breakpoints.sm,
                    }}
                    key={componentIndex}
                    id={`grid col ${index}`}
                  >
                    <SimpleGrid h={'100%'} key={index} cols={component.columns.columns}>
                      {component.columns.components.map((col: any) => {
                        const NewComponent = ComponentMapper(col.name);
                        return <NewComponent {...col.props} />;
                      })}
                    </SimpleGrid>
                  </GridCol>
                );
              }
              return (
                <GridCol
                  span={{
                    lg: component.breakpoints.lg,
                    md: component.breakpoints.md,
                    sm: component.breakpoints.sm,
                    xs: component.breakpoints.xs,
                  }}
                  key={componentIndex}
                  id={`grid col ${index}`}
                >
                  <SimpleGrid h={'100%'} cols={component.columns}>
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
