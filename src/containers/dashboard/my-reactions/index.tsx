'use client';

import styled from '@emotion/styled';
import {Reaction} from '@/containers/dashboard/my-reactions/reaction';
import {MyReactionsContext} from '@/containers/dashboard/my-reactions/provider';
import {MyReactionsTabs} from '@/containers/dashboard/my-reactions/tabs';
import {ContentWrapper} from '@/containers/dashboard/common/content-wrapper';
import {Pagination} from '@/components/mui/pagination';
import {AsyncView} from '@/components/view/async-view';

export function MyReactionsContainer() {
  return (
    <MyReactionsContext.Provider>
      <ContentWrapper>
        <MyReactionsTabs />

        <ListReactions />
      </ContentWrapper>
    </MyReactionsContext.Provider>
  );
}

function ListReactions() {
  const fetchReactionsState = MyReactionsContext.useSelector((state) => state.fetchReactionsState);

  return (
    <AsyncView {...fetchReactionsState} value={fetchReactionsState.value?.data?.reactions?.length}>
      <ListWrapper>
        {fetchReactionsState.value?.data?.reactions?.map((reaction) => (
          <Reaction
            key={`${reaction.topic_id}_${reaction.comment_id}_${reaction.to_user_id}`}
            reaction={reaction}
          />
        ))}
      </ListWrapper>

      <MyReactionsPagination />
    </AsyncView>
  );
}

function MyReactionsPagination() {
  const isLastPage = MyReactionsContext.useSelector((state) => state.isLastPage);
  return <Pagination isLastPage={isLastPage} />;
}

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 320px;
`;
