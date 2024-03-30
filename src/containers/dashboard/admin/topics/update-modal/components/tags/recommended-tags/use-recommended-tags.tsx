import useAsyncRetry from 'react-use/lib/useAsyncRetry';
import {AdminTopicsService} from '@/common/openapi';
import {httpClient} from '@/common/helpers/axios/http-client';
import {UpdateModalContext} from '@/containers/dashboard/admin/topics/update-modal/provider';
import defaultTo from 'lodash/defaultTo';
import {useWatch} from 'react-hook-form';
import {useMemo} from 'react';

const adminTopicsService = new AdminTopicsService(httpClient);

export function useRecommendedTags() {
  const topicId = UpdateModalContext.useSelector((state) => state.topic.id);
  const form = UpdateModalContext.useForm();
  const currentTags = defaultTo(useWatch({control: form.control, name: 'tags'}), []);

  const listTagState = useAsyncRetry((): Promise<string[]> => {
    return adminTopicsService
      .adminListTag({topic_id: topicId})
      .then((resp) => defaultTo(resp.data, []));
  }, [topicId]);

  const recommendedTags = useMemo(() => {
    const currentTagsSet = new Set(currentTags);
    const filteredTags = listTagState.value?.filter((tag) => !currentTagsSet.has(tag));
    return defaultTo(filteredTags, []);
  }, [currentTags, listTagState.value]);

  return {
    recommendedTags,
    loading: listTagState.loading,
    error: listTagState.error
  };
}
