import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';
import {TopicAuthor} from '@/components/topic-author';
import {useHomePageContext} from '@/containers/home-page/home-provider';
import Grid from "@mui/material/Grid";
import {Stack} from "@mui/material";
import {CommonImage} from "@/containers/home-page/components/common-image";
import {ArticleCategory} from "@/containers/home-page/components/article/article-category";
import {ArticleTitle} from "@/containers/home-page/components/article/article-title";
import {ArticleDescription} from "@/containers/home-page/components/article/article-description";
import {ArticleAuth} from "@/containers/home-page/components/article/article-auth";
import styled from "@emotion/styled";

export function VideoRemainTopicList() {
    // const {getTopicCate} = useTopicData();
    // const {home} = useHomePageContext();
    // const topVideos = home.top_video_topics || [];
    const {home} = useHomePageContext();
    const {getTopicCate} = useTopicData();
    const topVideos = home.main_topics || [];
    return (
        <Grid item xs={9} className="review-outstanding-left">
            <div className="review-outstanding-content">
                <Grid container rowSpacing={4}>
                    {topVideos?.slice(6, 11)?.map((topic) => {
                        return (
                            <Grid item xs={12} key={topic.id}>
                                <Stack direction='row' spacing={2}>
                                    <CommonImage classItem="list-img-xl" src="https://photo2.tinhte.vn/data/attachment-files/2023/11/8174383_cover-intel-itanium-ia-64-linux-kernel-tinhte.jpg" alt="list image"/>
                                    <Stack spacing={1}>
                                        <ArticleCategory topic={topic}/>
                                        <ArticleTitle title={topic.title}/>
                                        <ArticleDescription classItem="d-none" style={{'color': 'black'}} description={topic.long_title} />
                                        <ArticleAuth topic={topic} isDarkMode={false}/>
                                    </Stack>
                                </Stack>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
            <ViewMore className="viewmore">
                <button>Xem thêm</button>
            </ViewMore>
        </Grid>
    );
}

const ViewMore = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    
    button {
        width: 180px;
        height: 56px;
        background-color: #4b40d4;
        color: #fff;
        border-radius: 4px;
        border: none;
    }
`