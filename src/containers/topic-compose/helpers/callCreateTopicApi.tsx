import {CreateTopicReq} from '@/containers/topic-compose/helpers/useCreateTopicReqSchema';
import {generateObjectKey, uploadFile} from '@/common/helpers/uploads';
import invariant from 'tiny-invariant';
import {TopicsService} from '../../../common/openapi';
import {httpClient} from '@/common/helpers/axios/http-client';

const topicsService = new TopicsService(httpClient);

export async function callCreateTopicApi(data: CreateTopicReq) {
  let imageUrl: string | undefined;
  if (data.image instanceof File) {
    const generatedUrl = await uploadFile(data.image, {
      objectKey: (file) => generateObjectKey(file.name)
    });
    invariant(generatedUrl, 'Cannot get uploaded image object key');
    imageUrl = generatedUrl;
  }

  return topicsService.createTopic({
    ...data,
    image: imageUrl
  });
}
