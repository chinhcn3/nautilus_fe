import {useProfileContext} from '@/containers/dashboard/layout-container/profile-context';
import useAsyncRetry from 'react-use/lib/useAsyncRetry';
import {UsersService} from '@/common/openapi';
import {httpClient} from '@/common/helpers/axios/http-client';
import {useState} from 'react';
import {createHookContext} from '@/common/helpers/context';
import {getIsLastPage, usePageFilterObject} from '@/common/helpers/paginations';
import {contentdto_TopicResp, contentdto_UserResp} from '../../../common/openapi';
import {YOU_NAME} from '@/containers/dashboard/my-reactions/constants';

export const MY_REACTIONS_TABS = ['SEND', 'RECEIVE'] as const;
export type TMyReactionsTab = typeof MY_REACTIONS_TABS[number];

const initialTab: TMyReactionsTab = 'SEND';

function useValues() {
  const {user} = useProfileContext();
  const [selectedTab, setTab] = useState(initialTab);
  const page = usePageFilterObject();

  const fetchReactionsState = useAsyncRetry(() => {
    const service = new UsersService(httpClient);

    return selectedTab === 'SEND'
      ? service.listUserGivenReaction(undefined, page)
      : service.listUserTakenReaction(undefined, page);
  }, [selectedTab, page]);

  const getReactionUser = (userId?: number): contentdto_UserResp | undefined => {
    return fetchReactionsState.value?.data?.users?.[String(userId)];
  };

  const getReactionUserName = (userId?: number): string | undefined => {
    if (userId === user.id) return YOU_NAME;
    return getReactionUser(userId)?.nick_name;
  };

  const getTopic = (topicId?: number): contentdto_TopicResp | undefined => {
    return fetchReactionsState.value?.data?.topics?.[String(topicId)];
  };

  const isLastPage = getIsLastPage(fetchReactionsState.value?.data?.reactions?.length);

  return {
    user,
    selectedTab,
    setTab,
    fetchReactionsState,
    getReactionUser,
    getReactionUserName,
    getTopic,
    isLastPage
  };
}

export const MyReactionsContext = createHookContext(useValues);
