import type {contentdto_TopicResp} from '@/common/openapi';
import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';
import {TopicAuthor} from '@/components/topic-author';
import Grid from '@mui/material/Grid';
import {BigMainTopic} from '@/containers/home-page/sections/main-topic-section/components/big-main-topic';
import {CommonImage} from '@/containers/home-page/components/common-image';
import {ArticleCategory} from '@/containers/home-page/components/article/article-category';
import {ArticleTitle} from '@/containers/home-page/components/article/article-title';
import {Stack} from '@mui/material';
import {ArticleAuth} from '@/containers/home-page/components/article/article-auth';
import {fontSize} from "@mui/system";
import styled from "@emotion/styled";

export function MainTopicList({topics}: { topics: Array<contentdto_TopicResp> }) {
    const {getTopicCate} = useTopicData();
    return (
        <Grid container rowSpacing={3} columnSpacing={{md: 3}}>
            {topics.slice(1, 5).map((topic: contentdto_TopicResp) => {
                return (
                    <Grid item xs={12} md={6} key={topic.id}>
                        <Stack spacing={{xs: 1, md: 2}} direction={{xs: 'row', md: 'column'}}>
                            <CommonImage classItem="xs-horizontal" src="https://photo2.tinhte.vn/data/attachment-files/2023/11/8174383_cover-intel-itanium-ia-64-linux-kernel-tinhte.jpg" alt="list image"/>
                            <Stack spacing={1}>
                                <ArticleCategory topic={topic}/>
                                <ArticleTitle title={topic.title}/>
                                <ArticleAuth topic={topic} isDarkMode={false}/>
                            </Stack>
                        </Stack>
                    </Grid>
                );
            })}
        </Grid>
    );
}