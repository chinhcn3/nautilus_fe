import {AdminTopicsService} from '@/common/openapi/services/AdminTopicsService';
import {httpClient} from '@/common/helpers/axios/http-client';
import useAsyncRetry from 'react-use/lib/useAsyncRetry';
import {createHookContext} from '@/common/helpers/context';
import {getIsLastPage, usePageFilterObject} from '@/common/helpers/paginations';
import {StringParam, useQueryParam, withDefault} from 'use-query-params';
import {mapStatusesToApiStatus, TTopicStatus} from '@/common/constants/topic-status';
import pickBy from 'lodash/pickBy';
import {contentdto_UserResp} from '@/common/openapi';

const adminTopicsService = new AdminTopicsService(httpClient);

export function useStatusFilterParam() {
  return useQueryParam('status', withDefault(StringParam, 'ALL'));
}

function useValues() {
  const page = usePageFilterObject();
  const [status] = useStatusFilterParam();

  const fetchTopicsState = useAsyncRetry(async () => {
    return adminTopicsService.adminListTopic(
      undefined,
      pickBy({
        status: mapStatusesToApiStatus[status as TTopicStatus]
      }),
      page
    );
  }, [page, status]);

  const isLastPage = getIsLastPage(fetchTopicsState.value?.data?.topics?.length);

  const getUser = (userId?: number): contentdto_UserResp => {
    // @ts-ignore API must always return correct data
    return fetchTopicsState.value?.data?.users?.[String(userId)];
  };

  return {
    fetchTopicsState,
    getUser,
    isLastPage
  };
}

const Context = createHookContext(useValues);

export const useAdminTopicsSelector = Context.useSelector;
export const AdminTopicsProvider = Context.Provider;
