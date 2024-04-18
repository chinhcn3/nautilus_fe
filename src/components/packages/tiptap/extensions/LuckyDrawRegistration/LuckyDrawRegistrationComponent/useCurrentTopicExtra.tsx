import {TopicsService} from '@/common/openapi/services/TopicsService';
import {useGetCurrentTopicId} from './useGetCurrentTopicId';
import {useAsyncRetry} from 'react-use';
import {httpClient} from '@/common/helpers/axios/http-client';

const topicsService = new TopicsService(httpClient);

export function useCurrentTopicExtra() {
  const topicId = useGetCurrentTopicId();

  return useAsyncRetry(async () => {
    if (!topicId) return;
    return topicsService.getTopicExtra(topicId).then((resp) => resp.data);
  }, [topicId]);
}
