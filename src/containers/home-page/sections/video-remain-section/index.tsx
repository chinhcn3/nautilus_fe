import {VideoRemainTopicList} from '@/containers/home-page/sections/video-remain-section/components/video-remain-topic-list';
import {TopReviewOutstanding} from '@/containers/home-page/sections/video-remain-section/components/top-review-outstanding';
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";

export function VideoRemainSection() {
  return (
    <div className="review-outstanding">
        <Container maxWidth="xl">
            <Grid container spacing={3}>
                <VideoRemainTopicList/>
                <TopReviewOutstanding/>
            </Grid>
        </Container>
    </div>
  );
}
