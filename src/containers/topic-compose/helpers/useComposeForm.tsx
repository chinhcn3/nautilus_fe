import {useForm, UseFormReturn} from 'react-hook-form';
import {
  CreateTopicReq,
  useCreateTopicReqSchema
} from '@/containers/topic-compose/helpers/useCreateTopicReqSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import {contentdto_TopicResp} from '../../../common/openapi';

export function useComposeForm(topic?: contentdto_TopicResp): UseFormReturn<CreateTopicReq> {
  const schema = useCreateTopicReqSchema();

  return useForm<CreateTopicReq>({
    resolver: zodResolver(schema),
    mode: 'all',
    defaultValues: {
      id: topic?.id,
      image: topic?.image,
      content: topic?.content,
      title: topic?.title,
      video: topic?.video,
      long_title: topic?.long_title
    }
  });
}
