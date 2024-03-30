import type {contentdto_TopicResp} from '@/common/openapi';
import {DEFAULT_IMAGE} from '@/containers/home-page/constant';

export function TopVideoTopicList({topics}: {topics: Array<contentdto_TopicResp>}) {
  return (
    <div className="col-sm-4">
      <div className="col home-videos-right">
        {topics?.slice(1, 5).map((topic) => {
          return (
            <div key={topic.id} className="lucky-item">
              <div className="d-flex">
                <a href="#" className="d-block img-thumb">
                  <img
                    src={topic?.thumbnail || DEFAULT_IMAGE}
                    alt="lucky img"
                    className="img-fluid"
                  />
                </a>
                <a href="#" className="d-block text">
                  {topic.title}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
