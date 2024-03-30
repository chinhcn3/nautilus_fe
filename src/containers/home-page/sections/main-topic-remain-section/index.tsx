import AdsBanner from './../../assets/banner-ads-horizontal.svg';
import {MainRemainTopicList} from '@/containers/home-page/sections/main-topic-remain-section/components/main-remain-topic-list';
import {PopularTopic} from '@/containers/home-page/sections/main-topic-remain-section/components/popular-topic';

export function MainTopicRemainSection() {
  return (
    <div className="popular">
      <div className="container">
        <div className="row gutter-24px">
          <div className="col-sm-9 popular-left">
            <div className="col">
              <div className="ad-banner">
                <AdsBanner />
              </div>
              <MainRemainTopicList />
            </div>
          </div>
          <PopularTopic />
        </div>
      </div>
    </div>
  );
}
