import {
    VideoRemainTopicList
} from '@/containers/home-page/sections/video-remain-section/components/video-remain-topic-list';
import {
    TopReviewOutstanding
} from '@/containers/home-page/sections/video-remain-section/components/top-review-outstanding';
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import {themeColor} from "@/common/configs/theme";

export function VideoRemainSection() {
    return (
        <ReviewOutstanding className="review-outstanding">
            <Container maxWidth="xl" sx={{px: 2}}>
                <Grid direction={{xs: "column-reverse", md: "row"}} container spacing={3}>
                    <VideoRemainTopicList/>
                    <TopReviewOutstanding/>
                </Grid>
            </Container>
        </ReviewOutstanding>
    );
}

const ReviewOutstanding = styled.div`
    background-color: ${themeColor('white')};
    padding: 40px 0 40px;
`