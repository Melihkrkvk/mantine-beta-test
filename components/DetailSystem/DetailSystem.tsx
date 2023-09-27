import { Container, Grid, GridCol, Stack, Text } from "@mantine/core";
import MostViewed from "../Widgets/MostViewed/MostViewed";

interface DetailProps {
    children: any;
}

const DetailSystem = () => {
    return (
        <Container size={'lg'}>
            <Grid columns={12}>

                <GridCol bg={'red'} span={{ base: 9 }}>
                    <Text fw={'bold'}>title</Text>

                </GridCol>
                <GridCol span={{ base: 3 }} bg={'blue'}>
                    <Stack>
                        <MostViewed />
                    </Stack>
                </GridCol>
            </Grid>
        </Container>
    )
}

export default DetailSystem
