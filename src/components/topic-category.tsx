import {contentdto_TopicResp} from '@/common/openapi';
import {useHomePageContext} from '@/containers/home-page/home-provider';
export function TopicCategory({topic}: {topic: contentdto_TopicResp}) {
  const {home} = useHomePageContext();
  const categories = home?.categories || {};
  const category = categories?.[topic.category_id || ''];

  return <span>{category?.name || ''}</span>;
}
