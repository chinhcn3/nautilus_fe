import {useParams, usePathname} from 'next/navigation';
import {NumberParam, useQueryParam} from 'use-query-params';

export function useGetCurrentTopicId() {
  const pathname = usePathname();
  const params = useParams();
  const [id] = useQueryParam('id', NumberParam);

  return pathname === '/compose' ? id : Number((params.slug as string).split('-').pop());
}
