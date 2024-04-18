// 'use client';
import {TopicContent} from 'src/containers/topic-content';
import {serverClient} from '@/common/helpers/axios/server-client';
import invariant from 'tiny-invariant';

export default async function TopicContentPage({params}: {params: {slug: string}}) {
  try {
    const topicId = params.slug?.split('-').pop();

    // TODO handle when topic not found
    invariant(topicId, '404');
    invariant(Number(topicId), 'Invalid topic');

    const topicContent = await serverClient.topics.getTopic(Number(topicId));

    invariant(topicContent.data?.topic, 'Topic not found');

    return <TopicContent topicData={topicContent.data} />;
  } catch (e) {
    return null;
  }
}

export const revalidate = 600; // 10 minutes
