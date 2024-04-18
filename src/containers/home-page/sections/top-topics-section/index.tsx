import {SectionHeading} from '@/containers/home-page/components/section-heading';
import {BigTopTopic} from '@/containers/home-page/sections/top-topics-section/components/big-top-topic';
import {useHomePageContext} from '@/containers/home-page/home-provider';
import {TopTopicsList} from '@/containers/home-page/sections/top-topics-section/components/top-topics-list';
import Grid from "@mui/material/Grid";
import {Container} from "@mui/material";
import styled from "@emotion/styled";
import {themeColor} from "@/common/configs/theme";

export function TopTopicsSection() {
    const {home} = useHomePageContext();
    const topTopics = home.top_topics || [];

    return (
        <Outstanding className="outstanding">
            <Container maxWidth="xl" sx={{px: 2}}>
                <SectionHeading classItem="grey2" title="Tin nổi bật"/>
                <Grid container rowSpacing={3}>
                    <Grid item xs={12}>
                        <BigTopTopic topic={topTopics?.[0]}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TopTopicsList topics={topTopics}/>
                    </Grid>
                </Grid>
            </Container>
        </Outstanding>
    );
}

const Outstanding = styled.div`
    background-color: ${themeColor('grey2')};
    padding: 40px 40px;
    margin: 16px 0 0;
    
    @media screen and (max-width: 821px) {
        padding: 16px 0;
    }
`