import {ContentWrapper} from '@/containers/dashboard/common/content-wrapper';
import {Pagination} from '@/components/mui/pagination';
import styled from '@emotion/styled';
import React, {PropsWithChildren} from 'react';
import {AsyncView} from '@/components/view/async-view';
import List from '@mui/material/List';
import {AdminReportedCommentsContext} from '@/containers/dashboard/admin/reported-comments/context';
import {AdminReportedComment} from '@/containers/dashboard/admin/reported-comments/admin-reported-comment';

export function AdminReportedCommentsContainer() {
  return (
    <AdminReportedCommentsContext.Provider>
      <ContentWrapper>
        <AdminReportedCommentsAsyncView>
          <ListWrapper>
            <ListItems />
          </ListWrapper>
          <AdminReportedCommentsPagination />
        </AdminReportedCommentsAsyncView>
      </ContentWrapper>
    </AdminReportedCommentsContext.Provider>
  );
}

function AdminReportedCommentsAsyncView(props: PropsWithChildren) {
  const state = AdminReportedCommentsContext.useSelector(
    (state) => state.listReportedCommentsState
  );
  return (
    <AsyncView {...state} value={state.value?.comments?.length}>
      {props.children}
    </AsyncView>
  );
}

function AdminReportedCommentsPagination() {
  const isLastPage = AdminReportedCommentsContext.useSelector((state) => state.isLastPage);
  return <Pagination isLastPage={isLastPage} />;
}

const ListWrapper = styled.div`
  min-height: 320px;
`;

function ListItems() {
  const comments = AdminReportedCommentsContext.useSelector(
    (state) => state.listReportedCommentsState.value?.comments
  );
  return (
    <List>
      {comments?.map((comment) => {
        return <AdminReportedComment key={comment.id} comment={comment} />;
      })}
    </List>
  );
}
