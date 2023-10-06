import { Container, Grid, GridCol, Image, Stack, Text } from "@mantine/core";
import MostViewed from "../Widgets/MostViewed/MostViewed";
import SimpleCard from "../Cards/SimpleCard/SimpleCard";

interface DetailProps {
    title: string;
    sideBarPos: 'left' | 'right';
    sideBarComponents: React.Component;
}

const DetailSystem = ({ sideBarPos = 'right', title, sideBarComponents }: DetailProps) => {
    const htmlData = "<h2 style='color: red;'>Test</h2> <p>this is a html content</p>";
    if (sideBarPos === 'right') {
        return (
            <Container size={'lg'}>
                <Grid columns={12}>
                    <GridCol span={{ base: 8 }}>
                        <Text fw={'bold'} fz={28} mb={20}>{title}</Text>
                        <Image height={480} width={270} src={'https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'} />
                        <div dangerouslySetInnerHTML={{ __html: htmlData }} />
                    </GridCol>
                    <GridCol span={{ base: 4 }}>
                        <Stack>
                            <MostViewed />
                        </Stack>
                    </GridCol>
                </Grid>
            </Container>
        );
    }
    return (
        <Container size={'lg'}>
            <Grid columns={12}>
                <GridCol span={{ base: 4 }}>
                    <Stack>
                        <MostViewed />
                    </Stack>
                </GridCol>
                <GridCol span={{ base: 8 }}>
                    <Text fw={'bold'} fz={28} mb={20}>{title}</Text>
                    <Image height={480} width={270} src={'https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'} />
                </GridCol>
            </Grid>
        </Container>
    );

}

export default DetailSystem;
