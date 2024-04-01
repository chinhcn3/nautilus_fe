import {SectionHeading} from '@/containers/home-page/components/section-heading';
import {useHomePageContext} from '@/containers/home-page/home-provider';
import {BigVideoTopic} from '@/containers/home-page/sections/top-video-section/big-video-topic';
import {TopVideoTopicList} from '@/containers/home-page/sections/top-video-section/top-video-topic-list';
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";

export function TopVideoSection() {
    const {home} = useHomePageContext();
    const topVideos = home.top_video_topics || [];

    return (
        <HomeVideos>
            <Container maxWidth="xl">
                <SectionHeading classItem="grey" title="VIDEO NỔI BẬT"/>
                <Grid container>
                    <BigVideoTopic topic={topVideos?.[0]}/>
                    <TopVideoTopicList topics={topVideos}/>
                </Grid>
            </Container>
        </HomeVideos>
    );
}

const HomeVideos = styled.div`
    padding: 40px 0 0;
    background: #F5F5F5;
    margin-top: 0;
`;
