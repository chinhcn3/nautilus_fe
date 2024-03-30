import {createHookContext} from '@/common/helpers/context';
import {useComposeForm} from '@/containers/topic-compose/helpers/useComposeForm';
import useAsyncFn from 'react-use/lib/useAsyncFn';
import {CreateTopicReq} from '@/containers/topic-compose/helpers/useCreateTopicReqSchema';
import toast from 'react-hot-toast';
import {getErrorMessage} from '@/common/helpers/axios/error';
import {useRef} from 'react';
import type {RichTextEditorRef} from 'mui-tiptap';
import {useRouter} from 'next/navigation';
import {callCreateTopicApi} from '@/containers/topic-compose/helpers/callCreateTopicApi';

function useValues() {
  const form = useComposeForm();
  const rteRef = useRef<RichTextEditorRef>(null);
  const router = useRouter();

  const [createTopicState, _createTopic] = useAsyncFn(
    async (data: CreateTopicReq) => {
      const promise = callCreateTopicApi(data);

      await toast.promise(promise, {
        loading: `Đang tạo bài viết ${data.is_draft ? 'nháp' : ''}...`,
        error: getErrorMessage,
        success: `Tạo bài viết ${data.is_draft ? 'nháp' : ''} thành công!`
      });

      // TODO where to go?
      setTimeout(() => {
        router.push('/');
      }, 3000);
    },
    [router]
  );

  const createTopic = form.handleSubmit(_createTopic);
  const createDraftTopic = form.handleSubmit((data) => _createTopic({...data, is_draft: true}));
  const preview = form.handleSubmit((data) => _createTopic({...data, is_draft: true}));

  return {form, createTopic, createTopicState, createDraftTopic, preview, rteRef};
}

export const TopicComposeContext = createHookContext(useValues);
