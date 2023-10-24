import BasicCard from '@/components/Cards/BasicCard/BasicCard';
import SimpleCard from '@/components/Cards/SimpleCard/SimpleCard';
import DetailSystem from '@/components/DetailSystem/DetailSystem';
import { GET_NEWS } from '@/graphql/news';
import { getClient } from '@/lib/client';
import { Anchor, Breadcrumbs, Container, Grid, SimpleGrid } from '@mantine/core';


/*type Props = {
  params: {
    id: string | number;
  };
};*/

const Page = async ({ params }: any) => {
  const { entryName, category, id } = params;




  /* const foundNews = news.find((news) => news.slug === slug);
  if (!foundNews) {
    notFound();
  } */
  return (
    <>
      <Container size={'lg'} mb={25}>
        {/* <Breadcrumbs>{items}</Breadcrumbs> */}
        <p>entryName: {entryName}</p><br />
        <p>category: {category}</p><br />
        <p>id: {id}</p><br />

      </Container>
      {/*  <DetailSystem
        title={foundNews.title}
        sideBarPos="right"
        htmlData={foundNews.description}
        img={foundNews.img}
      /> */}
    </>
  );
};
export default Page;
