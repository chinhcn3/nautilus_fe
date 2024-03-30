import {createHookContext} from '@/common/helpers/context';
import {AdminTopicsService} from '@/common/openapi/services/AdminTopicsService';
import {useForm} from 'react-hook-form';
import {httpClient} from '@/common/helpers/axios/http-client';
import useAsyncFn from 'react-use/lib/useAsyncFn';
import {
  AdminGiftsService,
  admintopicdto_TopicResp,
  admintopicdto_UpdateTopicReq,
  CategoriesService
} from '@/common/openapi';
import toast from 'react-hot-toast';
import {getErrorMessage} from '@/common/helpers/axios/error';
import {ModalProps} from '@mui/material/Modal';
import useAsyncRetry from 'react-use/lib/useAsyncRetry';
import {useState} from 'react';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';

const adminTopicsService = new AdminTopicsService(httpClient);
const categoriesService = new CategoriesService(httpClient);
const adminGiftsService = new AdminGiftsService(httpClient);

export type UpdateTopicProps = {
  topic: admintopicdto_TopicResp;
  modalProps: Omit<ModalProps, 'children'>;
  onCloseRequest: () => void
};

const _UpdateModalContext = createHookContext(({topic, onCloseRequest, modalProps}: UpdateTopicProps) => {
  const [isLuckyDraw, setLuckyDraw] = useState(false);
  const form = useForm<admintopicdto_UpdateTopicReq>({
    defaultValues: {
      ...topic
    }
  });

  const fetchCategoriesState = useAsyncRetry(async () => {
    if (!modalProps.open) return undefined;
    return categoriesService.listCategory({}).then((resp) => resp.data);
  }, [modalProps.open]);

  const fetchGiftsState = useAsyncRetry(async () => {
    if (!modalProps.open) return undefined
    return adminGiftsService.adminListGift({
      topic_id: topic.id,
    }).then(resp => resp.data)
  }, [modalProps.open, topic])

  const [updateState, _update] = useAsyncFn(
    async (data: admintopicdto_UpdateTopicReq) => {
      const promise = adminTopicsService.adminUpdateTopic(topic.id!, data);

      await toast.promise(promise, {
        success: 'Cập nhật topic thành công',
        error: getErrorMessage,
        loading: 'Đang cập nhật...'
      });


      onCloseRequest()
    },
    [topic, onCloseRequest]
  );

  useUpdateEffect(() => {
    form.reset({
      category_id: topic.category_id,
      tags: topic.tags,
      pinned_to: topic.pinned,
      bonus_kudos: ~~Number(topic.extra?.bonus_kudos),
      bonus_points: ~~Number(topic.extra?.bonus_points),
      type: topic.type,
      allow_discussion: !!topic.allow_discussion,
      magazine_styled: !!topic.extra?.magazine_styled,
      lucky_draw: topic.lucky_draw && {
        kind: topic.lucky_draw.kind,
        topic_id: topic.lucky_draw.topic_id,
        status: topic.lucky_draw.status,
        reg_started_at: topic.lucky_draw.reg_started_at,
        reg_ended_at: topic.lucky_draw.reg_ended_at,
        reg_taken_points: topic.lucky_draw.reg_taken_points,
        win_taken_points: topic.lucky_draw.win_taken_points,
        required_views: topic.lucky_draw.required_views,
        required_daily_views: topic.lucky_draw.required_daily_views,
        gift_id: topic.lucky_draw.gift_id,
      }
    } satisfies admintopicdto_UpdateTopicReq);

    setLuckyDraw(!!topic.lucky_draw?.gift_id)
  }, [topic, onCloseRequest]);

  return {
    form,
    updateState,
    update: form.handleSubmit(_update),
    modalProps,
    topic,
    fetchCategoriesState,
    fetchGiftsState,
    isLuckyDraw,
    setLuckyDraw
  };
});

export const UpdateModalContext = Object.assign(_UpdateModalContext, {
  useForm: () => _UpdateModalContext.useSelector((state) => state.form)
});
