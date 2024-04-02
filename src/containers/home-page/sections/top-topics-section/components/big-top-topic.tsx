import {contentdto_TopicResp} from '@/common/openapi';
import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';
import {TopicAuthor} from '@/components/topic-author';
import {SectionContainer} from "@/containers/home-page/components/section-container";
import Grid from '@mui/material/Grid';
import styled from "@emotion/styled";
import {Stack} from "@mui/material";
import {themeColor} from "@/common/configs/theme";
import {ArticleCategory} from "@/containers/home-page/components/article/article-category";
import {ArticleDescription} from "@/containers/home-page/components/article/article-description";
import {ArticleTitle} from "@/containers/home-page/components/article/article-title";
import {CommonImage} from "@/containers/home-page/components/common-image";
import {ArticleAuth} from "@/containers/home-page/components/article/article-auth";

export function BigTopTopic({topic}: { topic: contentdto_TopicResp }) {
    const {getTopicCate} = useTopicData();
    return (
        <NewsCardOutstanding className="news-card news-card-outstanding">
            <Grid container>
                <Grid item xs={12} md={6}>
                    <CommonImage classItem="border-left" src="https://photo2.tinhte.vn/data/attachment-files/2023/11/8174383_cover-intel-itanium-ia-64-linux-kernel-tinhte.jpg" alt="list image"/>
                </Grid>
                <Grid className="news-card-body" item xs={12} md={6}>
                    <Stack spacing={{xs:1, md: 'auto'}}>
                        <Stack spacing={{xs: 1, md: 2}}>
                            <ArticleCategory color="white" topic={topic}/>
                            <ArticleTitle color="white" classItem="bigTitle" style={{'fontSize': 32}}  title={topic.title} />
                            <ArticleDescription style={{'color': 'white'}} description={topic.long_title} />
                        </Stack>
                        <ArticleAuth topic={topic} isDarkMode={true}/>
                    </Stack>
                </Grid>
            </Grid>
        </NewsCardOutstanding>
    );
}
const NewsCardOutstanding = styled.div`
    border-radius: 8px;
    overflow: hidden;
    
    .news-card-body {
        color: white;
        padding: 32px;
        background-color: ${themeColor('primary')};
        display: flex;
        flex-wrap: wrap;
        
        @media screen and (max-width: 821px) {
            padding: 16px;
            border-radius: 0 0 6px 0;
        }
    }
`
const LinkImg = styled.a`
    width: 100%;
    border-radius: 8px 0 8px 8px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`