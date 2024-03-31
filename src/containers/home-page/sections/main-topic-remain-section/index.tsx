import AdsBanner from './../../assets/banner-ads-horizontal.svg';
import {
    MainRemainTopicList
} from '@/containers/home-page/sections/main-topic-remain-section/components/main-remain-topic-list';
import {PopularTopic} from '@/containers/home-page/sections/main-topic-remain-section/components/popular-topic';
import {Container} from "@mui/material";
import Grid from '@mui/material/Grid';

export function MainTopicRemainSection() {
    return (
        <div className="popular">
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={9}>
                        <div className="popular-left">
                            <div className="ad-banner">
                                <AdsBanner/>
                            </div>
                            <MainRemainTopicList/>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <PopularTopic/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
