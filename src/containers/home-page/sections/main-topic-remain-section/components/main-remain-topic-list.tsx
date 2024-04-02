import {useHomePageContext} from '@/containers/home-page/home-provider';
import {contentdto_TopicResp} from '@/common/openapi';
import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';
import {TopicAuthor} from '@/components/topic-author';
import styled from "@emotion/styled";
import {Stack} from "@mui/material";
import {CommonImage} from "@/containers/home-page/components/common-image";
import {ArticleCategory} from "@/containers/home-page/components/article/article-category";
import {ArticleTitle} from "@/containers/home-page/components/article/article-title";
import {ArticleAuth} from "@/containers/home-page/components/article/article-auth";
import Grid from "@mui/material/Grid";
import {ArticleDescription} from "@/containers/home-page/components/article/article-description";

export function MainRemainTopicList() {
    const {home} = useHomePageContext();
    const {getTopicCate} = useTopicData();
    const mainTopics = home.main_topics || [];

    return (
        <Popular className="popular-content">
            <Grid container rowSpacing={4}>
                {mainTopics?.slice(5, 10).map((topic: contentdto_TopicResp) => {
                    return (
                        <Grid item xs={12} key={topic.id}>
                            <Stack direction='row' spacing={{xs:1, md: 2}}>
                                <CommonImage classItem="list-img-xl" src="https://photo2.tinhte.vn/data/attachment-files/2023/11/8174383_cover-intel-itanium-ia-64-linux-kernel-tinhte.jpg" alt="list image"/>
                                <Stack spacing={{xs: 1, md:'auto'}}>
                                    <Stack spacing={1}>
                                        <ArticleCategory topic={topic}/>
                                        <ArticleTitle title={topic.title}/>
                                        <ArticleDescription classItem="d-none" style={{'color': 'black'}} description={topic.long_title} />
                                    </Stack>
                                    <ArticleAuth topic={topic} isDarkMode={false}/>
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