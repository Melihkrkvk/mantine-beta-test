import { GET_NEWS } from "@/graphql/news";
import { getClient } from "@/lib/client";




type Props = {
    params: {
        id: string | number;
    }
};

export const generateMetadata = ({ params }: Props) => {
    // const news = await fetchNewsById(newsId);
    return {
        title: `Haber id: ${params.id}`
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
        console.log('data: ', data.data.pages.items.template.screens);
    }
    catch (err: any) {
        console.log('err: ', err);
        console.log('err2: ', err.networkError.result);
    }
    // const news = await fetchNewsById(newsId);

    return (
        <>
            <div>Dynamic Page</div>
        </>
    );
}
export default Page;