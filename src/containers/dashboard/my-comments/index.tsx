'use client';
import {MyCommentsContext} from '@/containers/dashboard/my-comments/provider';
import {Comment} from '@/containers/dashboard/my-comments/comment';
import {Pagination} from '@/components/mui/pagination';
import {AsyncView} from '@/components/view/async-view';
import {ContentWrapper} from '@/containers/dashboard/common/content-wrapper';
import styled from '@emotion/styled';

export function MyCommentsContainer() {
  return (
    <MyCommentsContext.Provider>
      <ContentWrapper>
        <ListComments />
      </ContentWrapper>
    </MyCommentsContext.Provider>
  );
}

function ListComments() {
  const fetchCommentsState = MyCommentsContext.useSelector((state) => state.fetchCommentsState);

  return (
    <AsyncView {...fetchCommentsState} value={fetchCommentsState.value?.data?.comments}>
      <ListWrapper>
        {fetchCommentsState.value?.data?.comments?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
        <MyCommentsPagination />
      </ListWrapper>
    </AsyncView>
  );
}

const ListWrapper = styled.div`
  min-height: 320px;
`;

function MyCommentsPagination() {
  const isLastPage = MyCommentsContext.useSelector((state) => state.isLastPage);
  return <Pagination isLastPage={isLastPage} />;
}
