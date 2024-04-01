import {useHomePageContext} from '@/containers/home-page/home-provider';
import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';
import {TopicAuthor} from '@/components/topic-author';
import ViewMore from './../../../assets/ic-viewmore.svg';
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import {Stack} from "@mui/material";
import {CommonImage} from "@/containers/home-page/components/common-image";
import {ArticleCategory} from "@/containers/home-page/components/article/article-category";
import {ArticleTitle} from "@/containers/home-page/components/article/article-title";
import {ArticleAuth} from "@/containers/home-page/components/article/article-auth";

export function TopReviewOutstanding() {
    const {home} = useHomePageContext();
    const {getTopicCate} = useTopicData();
    const topReviewTopics = home.top_review_topics || [];
    return (
        <Grid item xl={3}>
            <ReviewOutstandingRight className="review-outstanding-right">
                <div className="popular-topic review-list">
                    <h4>Review nổi bật</h4>
                    <Grid container rowSpacing={3}>
                        {topReviewTopics?.map((topic) => {
                            return (
                                <Grid className="border-bottom-1" item>
                                    <Stack direction='column' spacing={2}>
                                        <CommonImage src={topic?.thumbnail} alt="list image"/>
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
                    <div className="viewmore d-flex justify-content-center">
                        <a href="#" className="d-flex align-items-center">
                            Xem thêm <ViewMore/>
                        </a>
                    </div>
                </div>
            </ReviewOutstandingRight>
        </Grid>
    );
}

const ReviewOutstandingRight = styled.div`

    .popular-topic {
        border: 1px solid #dedede;
        padding: 24px;
        border-radius: 4px;

        h4 {
            font-size: 32px;
            font-family: "Anton", sans-serif;
            text-transform: uppercase;
            margin-bottom: 24px;
        }
        
        .news-card {
            padding-bottom: 16px;
            border-bottom: 1px solid #dedede;
            margin-bottom: 0;
            margin-top: 24px;
        }
        
        .news-card-img {
            img {
                max-width: 100%;
                display: block;
            }
        }

        .border-bottom-1 {
            padding-bottom: 16px;
            border-bottom: 1px solid #dddd;
        }
        
        .viewmore {
            display: flex;
            justify-content: center;
            margin-top: 24px;
            
            a {
                display: flex;
                align-items: center;
                color: #4b40d4;
                font-weight: 500;
            }
        }
        
        @media screen and (max-width: 821px) {
            padding: 16px;
        }
    }
    
`;
