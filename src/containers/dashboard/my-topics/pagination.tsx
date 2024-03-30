import {Pagination} from '@/components/mui/pagination';
import {useMyTopicsSelector} from './provider';
import {getIsLastPage} from '@/common/helpers/paginations';

export function MyTopicsPagination() {
  const totalItems = useMyTopicsSelector(
    (state) => state.fetchTopicsState.value?.data?.topics?.length
  );

  return <Pagination isLastPage={getIsLastPage(totalItems)} />;
}
