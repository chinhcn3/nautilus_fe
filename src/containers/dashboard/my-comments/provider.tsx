import useAsyncRetry from 'react-use/lib/useAsyncRetry';
import {UsersService} from '@/common/openapi';
import {httpClient} from '@/common/helpers/axios/http-client';
import {useProfileContext} from '@/containers/dashboard/layout-container/profile-context';
import {createHookContext} from '@/common/helpers/context';
import {getIsLastPage, usePageFilterObject} from '@/common/helpers/paginations';

function useValues() {
  const {user} = useProfileContext();
  const page = usePageFilterObject();

  const fetchCommentsState = useAsyncRetry(async () => {
    const service = new UsersService(httpClient);
    return service.listUserComment(undefined, undefined, page);
  }, [page]);

  const isLastPage = getIsLastPage(fetchCommentsState.value?.data?.comments?.length);

  return {user, fetchCommentsState, isLastPage};
}

export const MyCommentsContext = createHookContext(useValues);
