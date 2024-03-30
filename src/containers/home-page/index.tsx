'use client';

import {MainTopicSection} from '@/containers/home-page/sections/main-topic-section';
import {contentdto_GetHomeContentResp} from '@/common/openapi';
import {PageContent} from '@/containers/page-container';
import {HomePageProvider} from '@/containers/home-page/home-provider';
import {TopBanner} from '@/containers/home-page/components/top-banner';
import {TopTopicsSection} from '@/containers/home-page/sections/top-topics-section';
import {QuickTopicSection} from '@/containers/home-page/sections/quick-topic-section';
import {LuckyGiftSection} from '@/containers/home-page/sections/lucky-gift-section';
import {MainTopicRemainSection} from '@/containers/home-page/sections/main-topic-remain-section';
import {LastReviewSection} from '@/containers/home-page/sections/last-review-section';
import {TopVideoSection} from '@/containers/home-page/sections/top-video-section';
import {VideoRemainSection} from '@/containers/home-page/sections/video-remain-section';
import {SaleSection} from '@/containers/home-page/sections/sale-section';
import {HomeStyle} from '@/containers/home-page/homeStyle';

export function HomeContainer(_props: {home: contentdto_GetHomeContentResp}) {
  return (
    <HomePageProvider home={_props.home.data || {}}>
      <PageContent>
        <TopBanner />
        <MainTopicSection />
        <TopTopicsSection />
        <QuickTopicSection />
        <LuckyGiftSection />
        <MainTopicRemainSection />
        <LastReviewSection />
        <TopVideoSection />
        <VideoRemainSection />
        <SaleSection />
      </PageContent>
      <HomeStyle />
    </HomePageProvider>
  );
}
