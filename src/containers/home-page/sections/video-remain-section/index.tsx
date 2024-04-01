import {
    VideoRemainTopicList
} from '@/containers/home-page/sections/video-remain-section/components/video-remain-topic-list';
import {
    TopReviewOutstanding
} from '@/containers/home-page/sections/video-remain-section/components/top-review-outstanding';
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";

export function VideoRemainSection() {
    return (
        <ReviewOutstanding className="review-outstanding">
            <Container maxWidth="xl">
                <Grid direction={{xs: "column-reverse", md: "row"}} container spacing={3}>
                    <VideoRemainTopicList/>
                    <TopReviewOutstanding/>
                </Grid>
            </Container>
        </ReviewOutstanding>
    );
}

const ReviewOutstanding = styled.div`
    margin-top: 40px;
`