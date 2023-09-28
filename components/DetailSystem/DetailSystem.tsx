import { Container, Grid, GridCol, Image, Stack, Text } from "@mantine/core";
import MostViewed from "../Widgets/MostViewed/MostViewed";

interface DetailProps {
    children: any;
}

const DetailSystem = () => {
    return (
        <Container size={'lg'}>
            <Grid columns={12}>

                <GridCol span={{ base: 8 }}>
                    <Text fw={'bold'} fz={28} mb={20} >New Title</Text>
                    <Image src={'https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'} />

                </GridCol>
                <GridCol span={{ base: 4 }}>
                    <Stack>
                        <MostViewed />
                    </Stack>
                </GridCol>
            </Grid>
        </Container>
    )
}

export default DetailSystem
