import {ContentWrapper} from '../../common/content-wrapper';
import {AsyncView, AsyncViewProps} from '@/components/view/async-view';
import {ViolationContext} from '@/containers/dashboard/admin/violations/ViolationContext';
import Grid from '@mui/material/Grid';
import {Search} from '@/components/mui/search';
import {Pagination} from '@/components/mui/pagination';
import {ViolationTable} from '@/containers/dashboard/admin/violations/ViolationTable';

export function ViolationsContent() {
  return (
    <ContentWrapper>
      <LoadingWrapper>
        <Filter />
        <ViolationTable />
        <PagePagination />
      </LoadingWrapper>
    </ContentWrapper>
  );
}

const LoadingWrapper = (props: AsyncViewProps) => {
  const state = ViolationContext.useSelector((state) => state.fetchListViolationState);
  return <AsyncView {...state} isEmpty={!state.value?.violations?.length} {...props} />;
};

const Filter = () => {
  return (
    <Grid container justifyContent={'flex-end'}>
      <Grid item xs={12} md={6} lg={4}>
        <Search sx={{width: '100%'}} placeholder={'Username, ID,...'} />
      </Grid>
    </Grid>
  );
};

const PagePagination = () => {
  const isLastPage = ViolationContext.useSelector((state) => state.isLastPage);
  return <Pagination isLastPage={isLastPage} />;
};
