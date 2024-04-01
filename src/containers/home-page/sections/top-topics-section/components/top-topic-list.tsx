import type {contentdto_TopicResp} from '@/common/openapi';
import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';
import {TopicAuthor} from '@/components/topic-author';
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import {Stack} from "@mui/material";
import {CommonImage} from "@/containers/home-page/components/common-image";
import {ArticleCategory} from "@/containers/home-page/components/article/article-category";
import {ArticleTitle} from "@/containers/home-page/components/article/article-title";
import {ArticleAuth} from "@/containers/home-page/components/article/article-auth";

export function TopTopicList({topics}: { topics: Array<contentdto_TopicResp> }) {
    const {getTopicCate} = useTopicData();

    return (
        <Grid className="outstanding-list" container spacing={3}>
            {topics.slice(1, 5).map((topic: contentdto_TopicResp) => {
                return (
                    <Grid item xs={12} md={3} key={topic.id}>
                        <Stack direction={{xs: 'row', md: 'column'}} spacing={{xs: 1, md: 2}}>
                            <CommonImage src="https://photo2.tinhte.vn/data/attachment-files/2023/11/8174383_cover-intel-itanium-ia-64-linux-kernel-tinhte.jpg" alt="list image"/>
                            <Stack spacing={1}>
                                <ArticleCategory topic={topic}/>
                                <ArticleTitle title={topic.title}/>
                                <ArticleAuth topic={topic} isDarkMode={false}/>
                            </Stack>
                        </Stack>
                    </Grid>

                    // <Grid item key={topic.id} xs={12} md={3}>
                    //     <NewsCard className="news-card">
                    //         <a href="#" className="d-block news-card-img">
                    //             <img src={topic.thumbnail} alt="news image" className="img-fluid"/>
                    //         </a>
                    //         <div className="news-card-body">
                    //             <div className="news-card-meta">
                    //                 <span>{getTopicCate(topic)}</span>
                    //                 <span>{topic.published_at}</span>
                    //             </div>
                    //             <h3 className="news-card-title">
                    //                 <a href="#" className="d-block">
                    //                     {topic.title}
                    //                 </a>
                    //             </h3>
                    //             <TopicAuthor topic={topic}/>
                    //         </div>
                    //     </NewsCard>
                    // </Grid>
                );
            })}
        </Grid>
    );
}

// const NewsCard = styled.div`
//     @media screen and (max-width: 821px) {
//         a.news-card-img {
//             flex: 1 0 120px;
//
//             img {
//                 border-radius: 4px;
//                 overflow: hidden;
//             }
//         }
//     }
// `;

