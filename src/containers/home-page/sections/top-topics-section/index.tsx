import {SectionHeading} from '@/containers/home-page/components/section-heading';
import {BigTopTopic} from '@/containers/home-page/sections/top-topics-section/components/big-top-topic';
import {useHomePageContext} from '@/containers/home-page/home-provider';
import {TopTopicList} from '@/containers/home-page/sections/top-topics-section/components/top-topic-list';
import {SectionContainer} from "@/containers/home-page/components/section-container";
import Grid from "@mui/material/Grid";
import {Container} from "@mui/material";

export function TopTopicsSection() {
    const {home} = useHomePageContext();
    const topTopics = home.top_topics || [];

    return (
        <div className="outstanding">
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={12}>
                        <SectionHeading title="Tin nổi bật"/>
                        <BigTopTopic topic={topTopics?.[0]}/>
                        <TopTopicList topics={topTopics}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
