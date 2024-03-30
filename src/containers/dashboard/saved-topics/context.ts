import {getIsLastPage, usePageFilterObject} from '@/common/helpers/paginations';
import useAsyncRetry from 'react-use/lib/useAsyncRetry';
import {
  contentdto_CategoryResp,
  contentdto_UserResp,
  userdto_ListSavedTopicResp,
  UsersService
} from '../../../common/openapi';
import {httpClient} from '@/common/helpers/axios/http-client';
import {createHookContext} from '@/common/helpers/context';
import {ProfileContext} from '@/containers/dashboard/layout-container/profile-context';
import {useContext} from 'react';

const usersService = new UsersService(httpClient);

function useValues() {
  const {user} = useContext(ProfileContext);
  const page = usePageFilterObject();

  const savedTopicsState = useAsyncRetry((): Promise<userdto_ListSavedTopicResp> => {
    return usersService.listSavedTopic(undefined, page);
  }, [page]);

  const getCategory = (categoryId?: number): contentdto_CategoryResp | undefined => {
    return savedTopicsState.value?.data?.categories?.[String(categoryId)];
  };

  const getUser = (userId?: number): contentdto_UserResp | undefined => {
    return savedTopicsState.value?.data?.users?.[String(userId)];
  };

  const isLastPage = getIsLastPage(savedTopicsState.value?.data?.topics?.length);

  return {
    user,
    savedTopicsState,
    getCategory,
    getUser,
    isLastPage
  };
}

export const SavedTopicsContext = createHookContext(useValues);
