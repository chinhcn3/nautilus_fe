import {createHookContext} from '@/common/helpers/context';
import {useComposeForm} from '@/containers/topic-compose/helpers/useComposeForm';
import useAsyncFn from 'react-use/lib/useAsyncFn';
import {CreateTopicReq} from '@/containers/topic-compose/helpers/useCreateTopicReqSchema';
import toast from 'react-hot-toast';
import {getErrorMessage} from '@/common/helpers/axios/error';
import {useRef} from 'react';
import type {RichTextEditorRef} from 'mui-tiptap';
import {useRouter} from 'next/navigation';
import {contentdto_TopicResp, type topicdto_CreateTopicResp, TopicsService} from '../../common/openapi';
import {prepareImageUrlBeforeSave} from '@/containers/topic-compose/helpers/prepareImageUrlBeforeSave';
import {httpClient} from '@/common/helpers/axios/http-client';
import {TPath} from '@/common/path';
import {getTopicDetailPath} from '@/common/helpers/router';

const topicsService = new TopicsService(httpClient);

function useValues({topic}: {topic?: contentdto_TopicResp}) {
  const form = useComposeForm(topic);
  const rteRef = useRef<RichTextEditorRef>(null);
  const router = useRouter();

  const [createTopicState, _createTopic] = useAsyncFn(
    async (data: CreateTopicReq) => {
      const imageUrl = await prepareImageUrlBeforeSave(data.image);
      const promise = data.id
        ? topicsService.updateTopic(data.id, {
          ...data,
          image: imageUrl
        })
        : topicsService.createTopic({...data, image: imageUrl});

      const resp = await toast.promise<undefined | topicdto_CreateTopicResp>(promise, {
        loading: data.id
          ? `Đang cập nhật bài viết...`
          : `Đang tạo bài viết ${data.is_draft ? 'nháp' : ''}...`,
        error: getErrorMessage,
        success: data.id
          ? `Cập nhật bài viết thành công`
          : `Tạo bài viết ${data.is_draft ? 'nháp' : ''} thành công!`
      });

      return resp?.data;
    },
    [router]
  );

  const createTopic = form.handleSubmit((data) => _createTopic({...data, is_draft: false}).then(() => {
    router.push('/dashboard/topics' satisfies TPath);
  }));
  const createDraftTopic = form.handleSubmit((data) => _createTopic({...data, is_draft: true}).then(() => {
    router.push('/dashboard/topics' satisfies TPath);
  }));
  const preview = form.handleSubmit((data) => _createTopic({...data, is_draft: true}).then((resp) => {
    return router.push(getTopicDetailPath({id: resp?.id ?? topic?.id, slug: topic?.slug}));
  }));

  return {
    form,
    createTopic,
    createTopicState,
    createDraftTopic,
    preview,
    rteRef,
    originalTopic: topic
  };
}

export const TopicComposeContext = createHookContext(useValues);
