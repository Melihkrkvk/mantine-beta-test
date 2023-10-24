import BasicCard from '@/components/Cards/BasicCard/BasicCard';
import SimpleCard from '@/components/Cards/SimpleCard/SimpleCard';
import DetailSystem from '@/components/DetailSystem/DetailSystem';
import { GET_NEWS } from '@/graphql/news';
import { getClient } from '@/lib/client';
import { Anchor, Breadcrumbs, Container, Grid, SimpleGrid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import news from '../../../test-utils/newsData.json';
import { notFound } from 'next/navigation';

/*type Props = {
  params: {
    id: string | number;
  };
};*/

const Page = async ({ params }: any) => {
  const { entryName, category } = params;
  const items = [
    { title: 'Demo', href: '/Demo' },
    { title: `${category}`, href: `/${category}` },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  /* const foundNews = news.find((news) => news.slug === slug);
  if (!foundNews) {
    notFound();
  } */
  return (
    <>
      <Container size={'lg'} mb={25}>
        {/* <Breadcrumbs>{items}</Breadcrumbs> */}
        <p>entryName: {entryName}</p>
        <p>category: {category}</p>
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
