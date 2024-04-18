import {adminuserdto_ViolationDataResp, AdminUsersService} from '../../../../common/openapi';
import {httpClient} from '@/common/helpers/axios/http-client';
import useAsyncRetry from 'react-use/lib/useAsyncRetry';
import {getIsLastPage, usePageFilterObject} from '@/common/helpers/paginations';
import {createHookContext} from '@/common/helpers/context';

const adminUsersService = new AdminUsersService(httpClient);

function useValues() {
  const page = usePageFilterObject();

  const fetchListViolationState = useAsyncRetry<adminuserdto_ViolationDataResp>(async () => {
    const resp = await adminUsersService.adminListViolation(undefined, undefined, page);
    return resp.data!;
  }, [page]);

  const getUser = (userId?: number) => fetchListViolationState.value?.users?.[String(userId)];

  const isLastPage = getIsLastPage(fetchListViolationState.value?.violations?.length);

  return {fetchListViolationState, getUser, isLastPage};
}

export const ViolationContext = createHookContext(useValues);
