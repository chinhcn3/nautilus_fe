import {SectionHeading} from '@/containers/home-page/components/section-heading';
import {useHomePageContext} from '@/containers/home-page/home-provider';
import {BigVideoTopic} from '@/containers/home-page/sections/top-video-section/big-video-topic';
import {TopVideoTopicList} from '@/containers/home-page/sections/top-video-section/top-video-topic-list';
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";

export function TopVideoSection() {
    const {home} = useHomePageContext();
    const topVideos = home.top_video_topics || [];

    return (
        <div className="home-videos">
            <Container maxWidth="xl">
                <SectionHeading title="VIDEO NỔI BẬT"/>
                <Grid container>
                    <BigVideoTopic topic={topVideos?.[0]}/>
                    <TopVideoTopicList topics={topVideos}/>
                </Grid>
            </Container>
        </div>
    );
}