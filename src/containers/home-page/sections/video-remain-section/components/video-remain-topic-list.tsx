import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';
import {TopicAuthor} from '@/components/topic-author';
import {useHomePageContext} from '@/containers/home-page/home-provider';
import Grid from "@mui/material/Grid";

export function VideoRemainTopicList() {
    const {getTopicCate} = useTopicData();
    const {home} = useHomePageContext();
    const topVideos = home.top_video_topics || [];

    return (
        <Grid item xs={9} className="review-outstanding-left">
            <div className="review-outstanding-content">
                {topVideos?.slice(6, topVideos?.length)?.map((topic) => {
                    return (
                        <div key={topic.id} className="news-card d-flex">
                            <a href="#" className="d-block news-card-img">
                                <img src={topic?.thumbnail} alt="news image" className="img-fluid"/>
                            </a>
                            <div className="news-card-body">
                                <div className="news-card-meta">
                                    <span>{getTopicCate(topic)}</span>
                                    <span>{topic?.published_at}</span>
                                </div>
                                <h3 className="news-card-title">
                                    <a href="#" className="d-block">
                                        {topic.title}
                                    </a>
                                </h3>
                                <div className="news-card-desc">{topic.long_title}</div>
                                <TopicAuthor topic={topic}/>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="d-flex justify-content-center viewmore">
                <button>Xem thêm</button>
            </div>
        </Grid>
    );
}
