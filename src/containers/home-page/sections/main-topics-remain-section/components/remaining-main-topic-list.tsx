import {useHomePageContext} from '@/containers/home-page/home-provider';
import {contentdto_TopicResp} from '@/common/openapi';
import styled from "@emotion/styled";
import {Stack} from "@mui/material";
import {CommonImage} from "@/containers/home-page/components/common-image";
import {TopicCategory} from "@/containers/home-page/components/topic/topic-category";
import {TopicTitle} from "@/containers/home-page/components/topic/topic-title";
import {TopicAuthor} from "@/containers/home-page/components/topic/topic-author";
import Grid from "@mui/material/Grid";
import {TopicDescription} from "@/containers/home-page/components/topic/topic-description";

export function RemainingMainTopicList() {
    const {home} = useHomePageContext();
    const mainTopics = home.main_topics || [];

    return (
        <Popular className="popular-content">
            <Grid container rowSpacing={4}>
                {mainTopics?.slice(5, 10).map((topic: contentdto_TopicResp) => {
                    return (
                        <Grid item xs={12} key={topic.id}>
                            <Stack direction='row' spacing={{xs:1, md: 2}}>
                                <CommonImage classItem="list-img-xl" src={topic.thumbnail} alt="list image"/>
                                <Stack spacing={{xs: 1, md:'auto'}}>
                                    <Stack spacing={1}>
                                        <TopicCategory topic={topic}/>
                                        <TopicTitle title={topic.title}/>
                                        <TopicDescription classItem="d-none" style={{'color': 'black'}} description={topic.long_title} />
                                    </Stack>
                                    <TopicAuthor topic={topic} isDarkMode={false}/>
                                </Stack>
                            </Stack>
                        </Grid>
                    );
                })}
            </Grid>
        </Popular>
    );
}

const Popular = styled.div`
    margin: 48px 0 24px;
    display: flex;
    
    @media screen and (max-width: 821px) {
        margin-top: 0;
    }
    
`