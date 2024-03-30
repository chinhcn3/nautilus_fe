// 'use client';
import {ArticleDetail} from '@/containers/article-detail';
import {serverClient} from '@/common/helpers/axios/server-client';

export default async function ArticleDetailPage() {
  // const searchParams = useSearchParams();
  // const slug = searchParams.get('slug');

  try {
    // const topicId = defaultTo(slug as string, '')
    //   ?.split('-')
    //   .pop();
    const topicContent = await serverClient.topics.getTopic(Number(25));
    // console.log('topicContent', JSON.stringify(topicContent));
    return <ArticleDetail topicData={topicContent.data} />;
  } catch (e) {
    // eslint-disable-next-line no-console
    // console.log('ApiError', JSON.stringify(e));
    return null;
  }
}
