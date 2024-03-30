import {VideoRemainTopicList} from '@/containers/home-page/sections/video-remain-section/components/video-remain-topic-list';
import {TopReviewOutstanding} from '@/containers/home-page/sections/video-remain-section/components/top-review-outstanding';

export function VideoRemainSection() {
  return (
    <div className="review-outstanding">
      <div className="container">
        <div className="row gutter-24px">
          <VideoRemainTopicList />
          <TopReviewOutstanding />
        </div>
      </div>
    </div>
  );
}
