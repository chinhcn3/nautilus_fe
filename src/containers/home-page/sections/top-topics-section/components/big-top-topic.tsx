import {contentdto_TopicResp} from '@/common/openapi';
import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';
import {TopicAuthor} from '@/components/topic-author';

export function BigTopTopic({topic}: {topic: contentdto_TopicResp}) {
  const {getTopicCate} = useTopicData();

  return (
    <div className="row gutter-24px">
      <div className="col-sm-12">
        <div className="col">
          <div className="news-card d-flex row news-card-outstanding">
            <a href="#" className="d-block col-sm-6 news-card-img">
              <img src={topic.thumbnail} alt="news image" className="img-fluid" />
            </a>
            <div className="news-card-body col-sm-6">
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
              <TopicAuthor topic={topic} isDarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
