import {createHookContext} from '@/common/helpers/context';
import useAsyncRetry from 'react-use/lib/useAsyncRetry';
import {userdto_FollowingUserResp, UsersService} from '../../../common/openapi';
import {httpClient} from '@/common/helpers/axios/http-client';
import {getIsLastPage, usePageFilterObject} from '@/common/helpers/paginations';
import useAsyncFn from 'react-use/lib/useAsyncFn';
import toast from 'react-hot-toast';
import {getErrorMessage} from '@/common/helpers/axios/error';

const usersService = new UsersService(httpClient);
function useValues() {
  const page = usePageFilterObject();

  const listFollowingUserState = useAsyncRetry(async (): Promise<
    userdto_FollowingUserResp | undefined
  > => {
    return usersService.listFollowingUser(undefined, page).then((resp) => resp.data);
  }, [page]);

  const [unfollowState, unfollow] = useAsyncFn(
    async (userId: number) => {
      const promise = usersService.deleteUserFollowing(userId, {
        target_user_id: userId
      });

      await toast.promise(promise, {
        success: 'Unfollow thành công',
        loading: 'Đang unfollow...',
        error: getErrorMessage
      });

      listFollowingUserState.retry();
    },
    [listFollowingUserState.retry]
  );

  const isLastPage = getIsLastPage(listFollowingUserState.value?.users?.length);

  return {
    listFollowingUserState: {
      ...listFollowingUserState,
      loading: listFollowingUserState.loading || unfollowState.loading
    },
    unfollowState,
    unfollow,
    isLastPage
  };
}

export const FollowingUsersContext = createHookContext(useValues);
