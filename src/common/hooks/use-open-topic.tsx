import {useRouter} from 'next/navigation';
import {contentdto_TopicResp} from '@/common/openapi';
import {getTopicDetailPath} from '@/common/helpers/router';

export function useOpenTopic() {
  const router = useRouter();
  const openTopic = (topic?: contentdto_TopicResp) => {
    if (!topic || !topic?.slug) return;
    router.push(getTopicDetailPath(topic));
  };

  return {openTopic};
}
