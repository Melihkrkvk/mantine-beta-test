import { Button, Container, Grid, GridCol, SimpleGrid } from '@mantine/core';
import Link from 'next/link';
import BasicCard from '@/components/Cards/BasicCard/BasicCard';
import dynamic from 'next/dynamic';
/* import { res } from '@/test-utils/mock'; */
import { getClient } from '@/lib/client';
import { GET_NEWS } from '@/graphql/news';

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

export default async function HomePage() {
  const data = await getClient().query<any>({
    query: GET_NEWS,
    variables: {
      name: 'home',
    },
  });

  /*  try {
    console.log(data.data.pageByName.template.screens[0].rows[0].columns[0].component);
    console.log(
      data.data.pageByName.template.screens[0].rows[0].columns[0].component.properties[0].value
    );
  } catch (error) {
    console.log(error);
  } */

  /* data.data.pageByName.template.screens?.map((item: any) => {
    item.rows.map((row: any) => {
      row.columns.map((col: any) => {
        console.log(col.component.name);
      });
    });
  }); */

  const res = data.data.pageByName.template.screens.reduce((acc: any, val: any) => {
    acc[val.name] = {
      rows: val.rows,
      id: val.id,
    };
    return acc;
  }, {});

  return (
    <>
      <Container my="md">
        <Grid columns={12}>
          {res.desktop.rows?.map((row: any, index: any) => {
            return row.columns.map((column: any, columnIndex: any) => {
              const Component = ComponentMapper(column.component.name);

              console.log('data: ', column.component.data);

              const title =
                column.component.data.length > 0 ? column.component.data[0].title : 'title';
              const slug =
                column.component.data.length > 0 ? column.component.data[0].slug : 'slug';

              const props = column.component.properties.reduce((acc: any, val: any) => {
                let value = val.value.includes('true') ? true : false;
                if (val.value.includes('true')) {
                  value = true;
                } else if (val.value.includes('false')) {
                  value = false;
                } else {
                  value = val.value;
                }
                acc[val.name] = value;
                return acc;
              }, {});
              console.log({ props });

              /*  if (component.column && component.columns.components.length) {
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
                    <SimpleGrid key={index} cols={component.columns.columns}>
                      {component.columns.components.map((col: any) => {
                        const NewComponent = ComponentMapper(col.name);
                        return <NewComponent {...col.props} />;
                      })}
                    </SimpleGrid>
                  </GridCol>
                );
              } */
              /*  return (
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
                  <SimpleGrid cols={component.columns}>
                    <Component {...component.props} />
                  </SimpleGrid>
                </GridCol>
              ); */

              return (
                <GridCol>
                  <Component {...{ ...props, title, link: `/${slug}` }} />
                </GridCol>
              );
            });
          })}
        </Grid>
      </Container>
    </>
  );
}
