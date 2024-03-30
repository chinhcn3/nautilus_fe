import type {contentdto_TopicResp} from '@/common/openapi';
import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';
import {TopicAuthor} from '@/components/topic-author';

export function TopTopicList({topics}: {topics: Array<contentdto_TopicResp>}) {
  const {getTopicCate} = useTopicData();

  return (
    <div className="row gutter-24px outstanding-list">
      {topics.slice(1, 5).map((topic: contentdto_TopicResp) => {
        return (
          <div key={topic.id} className="col-sm-3">
            <div className="col">
              <div className="news-card">
                <a href="#" className="d-block news-card-img">
                  <img src={topic.thumbnail} alt="news image" className="img-fluid" />
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
                  <TopicAuthor topic={topic} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
