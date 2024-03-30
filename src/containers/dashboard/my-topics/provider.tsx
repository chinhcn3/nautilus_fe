import {UsersService} from '@/common/openapi';
import {httpClient} from '@/common/helpers/axios/http-client';
import {useProfileContext} from '@/containers/dashboard/layout-container/profile-context';
import useAsyncRetry from 'react-use/lib/useAsyncRetry';
import {createHookContext} from '@/common/helpers/context';
import {usePageFilterObject} from '@/common/helpers/paginations';
import useAsyncFn from 'react-use/lib/useAsyncFn';
import {TopicsService} from '../../../common/openapi';
import toast from 'react-hot-toast';
import {getErrorMessage} from '@/common/helpers/axios/error';

const usersService = new UsersService(httpClient);
const topicsService = new TopicsService(httpClient);

function useValues() {
  const profileContext = useProfileContext();
  const page = usePageFilterObject();

  const fetchTopicsState = useAsyncRetry(() => {
    return usersService.listUserTopic(undefined, undefined, page);
  }, [page]);

  const getCategory = (categoryId?: number) => {
    return fetchTopicsState.value?.data?.categories?.[String(categoryId)];
  };

  const [deleteTopicState, deleteTopic] = useAsyncFn(
    async (topicId: number) => {
      const promise = topicsService.deleteTopic(topicId);
      await toast.promise(promise, {
        loading: 'Đang xóa topic...',
        success: 'Xóa topic thành công!',
        error: getErrorMessage
      });

      fetchTopicsState.retry();
    },
    [fetchTopicsState.retry]
  );

  fetchTopicsState.loading = fetchTopicsState.loading || deleteTopicState.loading;

  return {user: profileContext.user, fetchTopicsState, getCategory, deleteTopicState, deleteTopic};
}

const {Provider, useSelector: useMyTopicsSelector} = createHookContext(useValues);

export type TMyTopicsContextValues = ReturnType<typeof useValues>;

export {Provider, useMyTopicsSelector};
