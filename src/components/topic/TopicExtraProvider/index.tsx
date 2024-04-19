import useAsyncRetry from 'react-use/lib/useAsyncRetry';
import {type topicdto_GetTopicDataResp, TopicsService} from '../../../common/openapi';
import {httpClient} from '@/common/helpers/axios/http-client';
import {createHookContext} from '@/common/helpers/context';

const topicsService = new TopicsService(httpClient);

function useValues({topicData}: {topicData?: topicdto_GetTopicDataResp}) {
  const topicId = topicData?.topic?.id;
  const fetchTopicExtraState = useAsyncRetry(async () => {
    if (!topicId) return;

    return topicsService.getTopicExtra(topicId).then((resp) =>
      resp.data
    );
  }, [topicId]);

  return {fetchTopicExtraState};
}

export const TopicExtraContext = createHookContext(useValues);
