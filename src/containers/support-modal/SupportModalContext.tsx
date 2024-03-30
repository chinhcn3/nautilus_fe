import {createHookContext} from '@/common/helpers/context';
import {MessagesService} from '../../common/openapi';
import {httpClient} from '@/common/helpers/axios/http-client';
import {useForm} from 'react-hook-form';
import useAsyncFn from 'react-use/lib/useAsyncFn';
import {useSession} from 'next-auth/react';
import {useEffect} from 'react';
import {supportFormZodSchema, TSupportForm} from '@/containers/support-modal/supportFormZodSchema';
import toast from 'react-hot-toast';
import {getErrorMessage} from '@/common/helpers/axios/error';
import {useSupportModal} from '@/common/hooks/useSupportModal';
import {zodResolver} from '@hookform/resolvers/zod';

const service = new MessagesService(httpClient);

function useValues() {
  const session = useSession();
  const form = useForm<TSupportForm>({
    resolver: zodResolver(supportFormZodSchema)
  });
  const [, setOpen] = useSupportModal();

  useEffect(() => {
    setTimeout(() => {
      session.data &&
        form.reset({
          title: '',
          content: '',
          full_name: session.data?.user?.full_name,
          email: session.data?.user?.email,
          phone_number: '' // TODO https://techrv.slack.com/archives/C063JKBMMRT/p1711552137417639?thread_ts=1711538971.858919&cid=C063JKBMMRT
        });
    }, 100);
  }, [session.data]);

  const [sendRequestState, sendRequest] = useAsyncFn(async (data: TSupportForm) => {
    const promise = service.createContactMsg(data);
    await toast.promise(promise, {
      loading: 'Yêu cầu liên hệ đã được gửi đi...',
      success: 'Đã gửi yêu cầu liên hệ, vui lòng chờ phản hồi!',
      error: getErrorMessage
    });

    setOpen(false);
  }, []);

  return {sendRequestState, sendRequest, form};
}

export const SupportModalContext = createHookContext(useValues);
