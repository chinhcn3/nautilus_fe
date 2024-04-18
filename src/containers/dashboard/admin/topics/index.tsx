'use client';
import {
  AdminTopicsProvider,
  useAdminTopicsSelector
} from '@/containers/dashboard/admin/topics/provider';
import {ContentWrapper} from '@/containers/dashboard/common/content-wrapper';
import styled from '@emotion/styled';
import {Topic} from './topic';
import {Pagination} from '@/components/mui/pagination';
import {Filter} from '@/containers/dashboard/admin/topics/components/filter';
import {AsyncView} from '@/components/view/async-view';

export function AdminTopicsContainer() {
  return (
    <AdminTopicsProvider>
      <ContentWrapper>
        <Filter />
        <ListTopics />
      </ContentWrapper>
    </AdminTopicsProvider>
  );
}

function ListTopics() {
  const fetchTopicsState = useAdminTopicsSelector((state) => state.fetchTopicsState);
  const isLastPage = useAdminTopicsSelector((state) => state.isLastPage);
  return (
    <AsyncView {...fetchTopicsState}>
      <ListWrapper>
        {fetchTopicsState.value?.data?.topics?.map((topic) => (
          <Topic key={topic.id} topic={topic} />
        ))}
      </ListWrapper>

      <Pagination isLastPage={isLastPage} />
    </AsyncView>
  );
}

const ListWrapper = styled.div`
  min-height: 320px;
`;
