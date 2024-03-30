import {useHomePageContext} from '@/containers/home-page/home-provider';
import {contentdto_TopicResp} from '../../../common/openapi';

export function useTopicData() {
  const {home} = useHomePageContext();
  const categories = home?.categories || {};
  const users = home?.users || {};

  const getTopicCate = (topic: contentdto_TopicResp): any => {
    return categories?.[topic.category_id || ''].name || '';
  };

  const getTopicUser = (topic: contentdto_TopicResp): any => {
    return users?.[topic?.user_id || ''] || {};
  };

  return {getTopicCate, getTopicUser};
}
