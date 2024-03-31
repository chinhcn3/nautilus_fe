import {useHomePageContext} from '@/containers/home-page/home-provider';
import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';
import {TopicAuthor} from '@/components/topic-author';
import ViewMore from './../../../assets/ic-viewmore.svg';
import Grid from "@mui/material/Grid";

export function TopReviewOutstanding() {
    const {home} = useHomePageContext();
    const {getTopicCate} = useTopicData();
    const topReviewTopics = home.top_review_topics || [];
    return (
        <Grid item xl={3} className="review-outstanding-right">
            <div className="popular-topic review-list">
                <h4>Review nổi bật</h4>
                {topReviewTopics?.map((topic) => {
                    return (
                        <div key={topic.id} className="news-card">
                            <a href="#" className="d-block news-card-img">
                                <img src={topic.thumbnail} alt="news image" className="img-fluid"/>
                            </a>
                            <div className="news-card-body">
                                <div className="news-card-meta">
                                    <span>{getTopicCate(topic)}</span>
                                    <span>{topic.published_at}</span>
                                </div>
                                <h3 className="news-card-title">
                                    <a href="#" className="d-block">
                                        {topic.title}
                                    </a>
                                </h3>
                                <TopicAuthor topic={topic}/>
                            </div>
                        </div>
                    );
                })}
                <div className="viewmore d-flex justify-content-center">
                    <a href="#" className="d-flex align-items-center">
                        Xem thêm <ViewMore/>
                    </a>
                </div>
            </div>
        </Grid>
    );
}
