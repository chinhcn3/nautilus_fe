import {SectionHeading} from '@/containers/home-page/components/section-heading';
import {useHomePageContext} from '@/containers/home-page/home-provider';
import {BigVideoTopic} from '@/containers/home-page/sections/top-video-section/big-video-topic';
import {TopVideoTopicList} from '@/containers/home-page/sections/top-video-section/top-video-topic-list';

export function TopVideoSection() {
  const {home} = useHomePageContext();
  const topVideos = home.top_video_topics || [];

  return (
    <div className="home-videos">
      <div className="container">
        <SectionHeading title="VIDEO NỔI BẬT" />
        <div className="row gutter-24px">
          <BigVideoTopic topic={topVideos?.[0]} />
          <TopVideoTopicList topics={topVideos} />
        </div>
      </div>
    </div>
  );
}
