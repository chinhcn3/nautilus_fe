'use client';
import React, {ReactNode} from 'react';
import {SavedTopicsContext} from '@/containers/dashboard/saved-topics/context';
import {ContentWrapper} from '@/containers/dashboard/common/content-wrapper';
import {Topic} from '@/containers/dashboard/common/topic';
import {userdto_SavedTopicResp} from '../../../common/openapi';
import invariant from 'tiny-invariant';
import {Pagination} from '@/components/mui/pagination';
import {AsyncView} from '@/components/view/async-view';
import styled from '@emotion/styled';

export function SavedTopics() {
  return (
    <SavedTopicsContext.Provider>
      <ContentWrapper>
        <SavedTopicsAsyncView>
          <ListSavedTopics />
          <SavedTopicsPagination />
        </SavedTopicsAsyncView>
      </ContentWrapper>
    </SavedTopicsContext.Provider>
  );
}

function SavedTopicsAsyncView({children}: {children: ReactNode}) {
  const savedTopicsState = SavedTopicsContext.useSelector((state) => state.savedTopicsState);
  return (
    <AsyncView {...savedTopicsState} value={savedTopicsState.value?.data?.topics?.length}>
      {children}
    </AsyncView>
  );
}

function ListSavedTopics() {
  const topics = SavedTopicsContext.useSelector(
    (state) => state.savedTopicsState.value?.data?.topics
  );

  return (
    <ListWrapper>
      {topics?.map((topic: userdto_SavedTopicResp) => {
        return <SavedTopic key={topic.id} topic={topic} />;
      })}
    </ListWrapper>
  );
}

function SavedTopic({topic}: {topic: userdto_SavedTopicResp}) {
  const user = SavedTopicsContext.useSelector((state) => state.getUser(topic.user_id));
  invariant(user, `User not found for topic ${topic.id}`);
  return <Topic key={topic.id} topic={topic} user={user} />;
}

function SavedTopicsPagination() {
  const isLastPage = SavedTopicsContext.useSelector((state) => state.isLastPage);
  return <Pagination isLastPage={isLastPage} />;
}

const ListWrapper = styled.div`
  min-height: 320px;
`;
