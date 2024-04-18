import {TopicComposeContainer} from 'src/containers/topic-compose';
import {getServerSession} from '@/common/helpers/authentication';
import invariant from 'tiny-invariant';
import {serverClient} from '@/common/helpers/axios/server-client';
import {redirect} from 'next/navigation';

export default async function ComposePage(props: {searchParams: {id?: string}}) {
  try {
    const session = await getServerSession();
    invariant(session.user, 'No session user provided');
  } catch (e) {
    redirect('/');
  }

  try {
    const topic = await getTopic(props.searchParams.id);
    return <TopicComposeContainer topic={topic} />;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Unknown error', e);
    return <TopicComposeContainer />;
  }
}

function getTopic(id?: string) {
  if (!id) return undefined;
  return serverClient.topics.getTopic(Number(id)).then((resp) => resp.data?.topic);
}
