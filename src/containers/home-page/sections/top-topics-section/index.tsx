import {SectionHeading} from '@/containers/home-page/components/section-heading';
import {BigTopTopic} from '@/containers/home-page/sections/top-topics-section/components/big-top-topic';
import {useHomePageContext} from '@/containers/home-page/home-provider';
import {TopTopicList} from '@/containers/home-page/sections/top-topics-section/components/top-topic-list';

export function TopTopicsSection() {
  const {home} = useHomePageContext();
  const topTopics = home.top_topics || [];

  return (
    <div className="outstanding">
      <div className="container">
        <SectionHeading title="Tin nổi bật" />
        <BigTopTopic topic={topTopics?.[0]} />
        <TopTopicList topics={topTopics} />
      </div>
    </div>
  );
}
