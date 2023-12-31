import { GET_NEWS } from '@/graphql/news';
import { getClient } from '@/lib/client';
import { Container, Grid, SimpleGrid } from '@mantine/core';

type Props = {
  params: {
    id: string | number;
  };
};

export const generateMetadata = ({ params }: Props) => {
  return {
    title: `${params.id}`,
  };
};

const Page = async ({ params }: Props) => {
  const newsId = params.id;
  console.log(params);

  try {
    const data: any = await getClient().query<Response>({
      query: GET_NEWS,
      variables: {
        take: 2,
      },
    });
    //console.log('data: ', data.items);
  } catch (err: any) {
    //console.log('err: ', err);
  }

  return (
    <>
      <div>dynmaic page {params.id}</div>
    </>
  );
};
export default Page;
