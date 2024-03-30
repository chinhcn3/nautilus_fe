import useAsyncRetry from 'react-use/lib/useAsyncRetry';
import {
  adminuserdto_BanUserReq,
  type adminuserdto_ListUserResp, type adminuserdto_UpdateUserPointsReq,
  AdminUsersService
} from '@/common/openapi';
import {httpClient} from '@/common/helpers/axios/http-client';
import {getIsLastPage, usePageFilterObject} from '@/common/helpers/paginations';
import {createHookContext} from '@/common/helpers/context';
import useAsyncFn from 'react-use/lib/useAsyncFn';
import toast from 'react-hot-toast';
import {getErrorMessage} from '@/common/helpers/axios/error';
import {TUserRole} from '@/common/constants/user-role';
import {Search} from '@/components/mui/search';

const adminUsersService = new AdminUsersService(httpClient);

function useValues() {
  const page = usePageFilterObject();
  const [search] = Search.useSearch();

  const listUserState = useAsyncRetry<adminuserdto_ListUserResp>(() => {
    return adminUsersService.adminListUser(undefined, {search}, page);
  }, [page, search]);

  const isLastPage = getIsLastPage(listUserState.value?.data?.length);

  const [banUserState, banUser] = useAsyncFn(async (options: adminuserdto_BanUserReq) => {
    const promise = adminUsersService.adminBanUser(options.id!, options);

    await toast.promise(promise, {
      loading: 'Đang ban',
      success: 'Ban thành công',
      error: getErrorMessage
    });

    listUserState.retry();
  }, [listUserState.retry]);

  const [unbanUserState, unbanUser] = useAsyncFn(async (userId: number) => {
    const promise = adminUsersService.adminUnbanUser(userId, {
      id: userId
    });

    await toast.promise(promise, {
      loading: 'Đang unban',
      success: 'Unban thành công',
      error: getErrorMessage
    });

    listUserState.retry();
  }, [listUserState.retry]);

  const [updateRoleState, updateRole] = useAsyncFn(async (userId: number, role: TUserRole) => {
    const promise = adminUsersService.adminUpdateUserRole(userId, {
      id: userId,
      role
    });

    await toast.promise(promise, {
      loading: 'Đang cập nhật role',
      success: 'Cập nhật role thành công',
      error: getErrorMessage
    });

    listUserState.retry();
  }, [listUserState.retry]);

  const [updatePointsState, updatePoints] = useAsyncFn(async (points: adminuserdto_UpdateUserPointsReq) => {
    const promise = adminUsersService.adminUpdateUserPoints(points.user_id!, points);


    await toast.promise(promise, {
      loading: 'Đang cập nhật points của user',
      success: 'Cập nhật points thành công',
      error: getErrorMessage
    });

    listUserState.retry();
  }, [listUserState.retry]);

  return {
    listUserState,
    isLastPage,
    banUserState, banUser,
    unbanUserState, unbanUser,
    updateRoleState, updateRole,
    updatePointsState, updatePoints
  };
}

export const AdminUsersContext = createHookContext(useValues);
