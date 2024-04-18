import {useHomePageContext} from '@/containers/home-page/home-provider';
import ViewMore from './../../../assets/ic-viewmore.svg';
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import {Stack} from "@mui/material";
import {CommonImage} from "@/containers/home-page/components/common-image";
import {TopicCategory} from "@/containers/home-page/components/topic/topic-category";
import {TopicTitle} from "@/containers/home-page/components/topic/topic-title";
import {TopicAuthor} from "@/containers/home-page/components/topic/topic-author";

export function TopReviewOutstanding() {
    const {home} = useHomePageContext();
    const topReviewTopics = home.top_review_topics || [];
    return (
        <Grid item xl={3}>
            <ReviewOutstandingRight className="review-outstanding-right">
                <div className="popular-topic review-list">
                    <h4>Review nổi bật</h4>
                    <Grid container rowSpacing={3}>
                        {topReviewTopics?.slice(0, 3)?.map((topic) => {
                            return (
                                <Grid key={topic.id} className="border-bottom-1" item>
                                    <Stack direction='column' spacing={2}>
                                        <CommonImage src={topic?.thumbnail} alt="list image"/>
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
            
            @media screen and (max-width: 821px) {
                font-size: 24px;
            }
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
