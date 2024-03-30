import {AdminCommentsContext} from '@/containers/dashboard/admin/comments/context';
import {ContentWrapper} from '@/containers/dashboard/common/content-wrapper';
import {Pagination} from '@/components/mui/pagination';
import styled from '@emotion/styled';
import React, {PropsWithChildren} from 'react';
import {AsyncView} from '@/components/view/async-view';
import List from '@mui/material/List';
import {AdminComment} from '@/containers/dashboard/admin/comments/admin-comment';

export function AdminCommentsContainer() {
  return (
    <AdminCommentsContext.Provider>
      <ContentWrapper>
        <AdminCommentsAsyncView>
          <ListWrapper>
            <ListItems />
          </ListWrapper>
          <AdminCommentsPagination />
        </AdminCommentsAsyncView>
      </ContentWrapper>
    </AdminCommentsContext.Provider>
  );
}

function AdminCommentsAsyncView(props: PropsWithChildren) {
  const state = AdminCommentsContext.useSelector((state) => state.listCommentState);
  return (
    <AsyncView {...state} value={state.value?.comments?.length}>
      {props.children}
    </AsyncView>
  );
}

function AdminCommentsPagination() {
  const isLastPage = AdminCommentsContext.useSelector((state) => state.isLastPage);
  return <Pagination isLastPage={isLastPage} />;
}

const ListWrapper = styled.div`
  min-height: 320px;
`;

function ListItems() {
  const comments = AdminCommentsContext.useSelector(
    (state) => state.listCommentState.value?.comments
  );
  return (
    <List>
      {comments?.map((comment) => {
        return <AdminComment key={comment.id} comment={comment} />;
      })}
    </List>
  );
}
