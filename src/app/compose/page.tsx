import {TopicComposeContainer} from 'src/containers/topic-compose';
import {getServerSession} from '@/common/helpers/authentication';
import invariant from 'tiny-invariant';
import {redirect} from 'next/navigation';

export default async function ComposePage() {
  try {
    const session = await getServerSession();
    invariant(session.user, 'No session user provided');
    return <TopicComposeContainer />;
  } catch (e) {
    redirect('/');
  }
}
