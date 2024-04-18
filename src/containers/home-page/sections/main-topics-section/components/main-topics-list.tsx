import type {contentdto_TopicResp} from '@/common/openapi';
import Grid from '@mui/material/Grid';
import {CommonImage} from '@/containers/home-page/components/common-image';
import {TopicCategory} from '@/containers/home-page/components/topic/topic-category';
import {TopicTitle} from '@/containers/home-page/components/topic/topic-title';
import {Stack} from '@mui/material';
import {TopicAuthor} from '@/containers/home-page/components/topic/topic-author';

export function MainTopicsList({topics}: { topics: Array<contentdto_TopicResp> }) {
    return (
        <Grid container rowSpacing={3} columnSpacing={{md: 3}}>
            {topics.slice(1, 5).map((topic: contentdto_TopicResp) => {
                return (
                    <Grid item xs={12} md={6} key={topic.id}>
                        <Stack spacing={{xs: 1, md: 2}} direction={{xs: 'row', md: 'column'}}>
                            <CommonImage classItem="xs-horizontal" src={topic.thumbnail} alt="list image"/>
                            <Stack spacing={1}>
                                <TopicCategory topic={topic}/>
                                <TopicTitle title={topic.title}/>
                                <TopicAuthor topic={topic} isDarkMode={false}/>
                            </Stack>
                        </Stack>
                    </Grid>
                );
            })}
        </Grid>
    );
}