import {useHomePageContext} from '@/containers/home-page/home-provider';
import {BigMainTopic} from '@/containers/home-page/sections/main-topics-section/components/big-main-topic';
import {MainTopicsList} from '@/containers/home-page/sections/main-topics-section/components/main-topics-list';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";

export function MainTopicsSection() {
    const {home} = useHomePageContext();
    const mainTopics = home.main_topics || [];
    return (
        <Container maxWidth="xl" sx={{ pt: 3, pb: 3 , px: {xs: 1, md: 2}}}>
            <Grid container rowSpacing={3} columnSpacing={{sm: 3}}>
                <Grid item xs={12} md={6}>
                    <BigMainTopic topic={mainTopics?.[0]}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <MainTopicsList topics={home.main_topics || []}/>
                </Grid>
            </Grid>
        </Container>
    );
}