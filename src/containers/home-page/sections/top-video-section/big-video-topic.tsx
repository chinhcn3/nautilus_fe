import PlayIcon from '@/containers/home-page/assets/ic-player.svg';
import {contentdto_TopicResp} from '@/common/openapi/models/contentdto_TopicResp';
import {DEFAULT_IMAGE} from '@/containers/home-page/constant';

export function BigVideoTopic({topic}: {topic?: contentdto_TopicResp}) {
  return (
    <div className="col-sm-8">
      <div className="col">
        <div className="video-left">
          <div className="video-img">
            <img src={topic?.thumbnail || DEFAULT_IMAGE} className="img-fluid" />
            <span>
              <PlayIcon />
            </span>
            <h3>
              <a href="#">{topic?.title}</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
