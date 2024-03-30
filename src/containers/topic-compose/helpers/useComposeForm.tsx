import {useForm, UseFormReturn} from 'react-hook-form';
import {
  CreateTopicReq,
  useCreateTopicReqSchema
} from '@/containers/topic-compose/helpers/useCreateTopicReqSchema';
import {zodResolver} from '@hookform/resolvers/zod';

export function useComposeForm(): UseFormReturn<CreateTopicReq> {
  const schema = useCreateTopicReqSchema();

  return useForm<CreateTopicReq>({
    resolver: zodResolver(schema),
    mode: 'all'
  });
}
