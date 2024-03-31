import {contentdto_TopicResp} from '@/common/openapi';
import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';
import {TopicAuthor} from '@/components/topic-author';
import {SectionContainer} from "@/containers/home-page/components/section-container";
import Grid from '@mui/material/Grid';

export function BigTopTopic({topic}: { topic: contentdto_TopicResp }) {
    const {getTopicCate} = useTopicData();

    return (
        <Grid className="news-card news-card-outstanding" container>
            <Grid item xs={12} sm={6}>
                <a href="#" className="news-card-img">
                    <img src={topic.thumbnail} alt="news image" className="img-fluid"/>
                </a>
            </Grid>
            <Grid className="news-card-body" item xs={12} md={6}>
                <div className="news-card-meta">
                    <span>{getTopicCate(topic)}</span>
                    <span>{topic.published_at}</span>
                </div>
                <h3 className="news-card-title">
                    <a href="#" className="d-block">
                        {topic.title}
                    </a>
                </h3>
                <div className="news-card-desc">{topic.long_title}</div>
                <TopicAuthor topic={topic} isDarkMode/>
            </Grid>
        </Grid>
    );
}
