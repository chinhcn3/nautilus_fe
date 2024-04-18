'use client';

import {MainTopicsSection} from 'src/containers/home-page/sections/main-topics-section';
import {contentdto_GetHomeContentResp} from '@/common/openapi';
import {PageContent} from '@/containers/page-container';
import {HomePageProvider} from '@/containers/home-page/home-provider';
import {TopBanner} from '@/containers/home-page/components/top-banner';
import {TopTopicsSection} from '@/containers/home-page/sections/top-topics-section';
import {QuickTopicsSection} from 'src/containers/home-page/sections/quick-topics-section';
import {LuckyTopicsSection} from 'src/containers/home-page/sections/lucky-topics-section';
import {MainTopicsRemainSection} from 'src/containers/home-page/sections/main-topics-remain-section';
import {LastReviewTopicsSection} from 'src/containers/home-page/sections/last-review-topics-section';
import {TopVideoSection} from 'src/containers/home-page/sections/top-video-topics-section';
import {VideoRemainSection} from '@/containers/home-page/sections/video-remain-section';
import {SaleSection} from '@/containers/home-page/sections/sale-section';

export function HomeContainer(_props: {home: contentdto_GetHomeContentResp}) {
  return (
    <HomePageProvider home={_props.home.data || {}}>
      <PageContent>
        <TopBanner />
        <MainTopicsSection />
        <TopTopicsSection />
        <QuickTopicsSection />
        <LuckyTopicsSection />
        <MainTopicsRemainSection />
        <LastReviewTopicsSection />
        <TopVideoSection />
        <VideoRemainSection />
        <SaleSection />
      </PageContent>
    </HomePageProvider>
  );
}
