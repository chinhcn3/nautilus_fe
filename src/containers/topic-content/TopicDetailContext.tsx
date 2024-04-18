import {createHookContext} from '@/common/helpers/context';
import type {topicdto_GetTopicDataResp} from '../../common/openapi';

function useValues({topic, users, categories}: Required<topicdto_GetTopicDataResp>) {
  return {topic, users, categories};
}

export const TopicDetailContext = createHookContext(useValues);
