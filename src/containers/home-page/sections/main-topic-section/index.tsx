import {useHomePageContext} from '@/containers/home-page/home-provider';
import {BigMainTopic} from '@/containers/home-page/sections/main-topic-section/components/big-main-topic';
import {MainTopicList} from '@/containers/home-page/sections/main-topic-section/components/main-topic-list';
import {SectionContainer} from '@/containers/home-page/components/section-container';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";

export function MainTopicSection() {
    const {home} = useHomePageContext();
    const mainTopics = home.main_topics || [];

    return (
        <Container maxWidth="xl" sx={{ pt: 3, pb: 3 , px: 2}}>
            <Grid container rowSpacing={3} columnSpacing={{sm: 3}}>
                <Grid item xs={12} md={6}>
                    <BigMainTopic topic={mainTopics?.[0]}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <MainTopicList topics={home.main_topics || []}/>
                </Grid>
            </Grid>
            {/*<div className="top-news">*/}
            {/*  <div className="container">*/}
            {/*    <div className="row gutter-24px">*/}
            {/*      <div className="col-sm-6 top-news-left">*/}
            {/*        <div className="col">*/}
            {/*          <BigMainTopic topic={mainTopics?.[0]} />*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      <MainTopicList topics={home.main_topics || []} />*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
        </Container>
    );
}