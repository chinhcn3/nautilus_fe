import {useHomePageContext} from '@/containers/home-page/home-provider';
import {contentdto_TopicResp} from '@/common/openapi';
import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';
import {TopicAuthor} from '@/components/topic-author';

export function MainRemainTopicList() {
  const {home} = useHomePageContext();
  const {getTopicCate} = useTopicData();
  const mainTopics = home.main_topics || [];

  return (
    <div className="popular-content">
      {mainTopics?.slice(5, mainTopics?.length).map((topic: contentdto_TopicResp) => {
        return (
          <div key={topic.id} className="news-card d-flex">
            <a href="#" className="d-block news-card-img">
              <img src={topic.thumbnail} alt="news image" className="img-fluid" />
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
              <TopicAuthor topic={topic} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
