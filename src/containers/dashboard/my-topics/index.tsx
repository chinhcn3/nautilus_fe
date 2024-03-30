'use client';

import {Header} from '@/containers/dashboard/my-topics/header';
import {MyTopicsTable} from '@/containers/dashboard/my-topics/table';
import {Provider, useMyTopicsSelector} from '@/containers/dashboard/my-topics/provider';
import {MyTopicsPagination} from '@/containers/dashboard/my-topics/pagination';
import {ReactNode} from 'react';
import {ContentWrapper} from '@/containers/dashboard/common/content-wrapper';
import {AsyncView} from '@/components/view/async-view';

export function MyTopics() {
  return (
    <Provider>
      <ContentWrapper>
        <LoadingOverlay>
          <Header />
          <MyTopicsTable />
          <MyTopicsPagination />
        </LoadingOverlay>
      </ContentWrapper>
    </Provider>
  );
}

const LoadingOverlay = ({children}: {children: ReactNode}) => {
  const fetchTopicsState = useMyTopicsSelector((state) => state.fetchTopicsState);
  return (
    <AsyncView {...fetchTopicsState} value={fetchTopicsState.value?.data?.topics?.length}>
      {children}
    </AsyncView>
  );
};
