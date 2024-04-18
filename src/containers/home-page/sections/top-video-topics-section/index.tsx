import {SectionHeading} from '@/containers/home-page/components/section-heading';
import {useHomePageContext} from '@/containers/home-page/home-provider';
import {BigVideoTopic} from '@/containers/home-page/sections/top-video-topics-section/big-video-topic';
import {TopVideoTopicsList} from '@/containers/home-page/sections/top-video-topics-section/top-video-topics-list';
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import {themeColor} from "@/common/configs/theme";

export function TopVideoSection() {
    const {home} = useHomePageContext();
    const topVideos = home.top_video_topics || [];

    return (
        <HomeVideos>
            <Container maxWidth="xl" sx={{px: {xs: 1, md: 2}}}>
                <SectionHeading classItem="grey2" title="VIDEO NỔI BẬT"/>
                <Grid container>
                    <BigVideoTopic topic={topVideos?.[0]}/>
                    <TopVideoTopicsList topics={topVideos}/>
                </Grid>
            </Container>
        </HomeVideos>
    );
}

const HomeVideos = styled.div`
    padding: 32px 0;
    background: ${themeColor('grey2')};
    margin-top: 0;
`;
