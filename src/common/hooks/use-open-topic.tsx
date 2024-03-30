import {useRouter} from 'next/navigation';
import {contentdto_TopicResp} from '@/common/openapi';

export function useOpenTopic() {
  const router = useRouter();
  const openTopic = (topic?: contentdto_TopicResp) => {
    if (!topic || !topic?.slug) return;
    const slug = `${topic.slug}-${topic.id}`;
    router.push(`/detail/${slug}`);
  };

  return {openTopic};
}
