import { GET_NEWS } from "@/graphql/news";
import { getClient } from "@/lib/client";
import { Container, Grid, SimpleGrid } from "@mantine/core";



type Props = {
    params: {
        id: string | number;
    }
};

export const generateMetadata = ({ params }: Props) => {
    return {
        title: `${params.id}`
    };
};

const Page = async ({ params }: Props) => {
    const newsId = params.id;
    try {
        const data: any = await getClient().query<Response>({
            query: GET_NEWS,
            variables: {
                take: 2
            }
        });
        console.log('data: ', data.data.pages.items[0].template.screens[0].rows[2]);
    }
    catch (err: any) {
        console.log('err: ', err);
    }

    return (
        <>
            <div>dynmaic page</div>
        </>
    );
}
export default Page;