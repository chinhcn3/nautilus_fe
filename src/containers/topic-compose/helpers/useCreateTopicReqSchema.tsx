import z from 'zod';
import {config_TopicContentCnf, topicdto_CreateTopicReq} from '../../../common/openapi';
import {useTopicContentCnf} from '@/common/helpers/config/topic';

function getCreateTopicReqSchema(cnf: Required<config_TopicContentCnf>) {
  return z.object({
    title: z
      .string()
      .min(cnf.title_min_len, `Tiêu đề cần tối thiểu ${cnf.title_min_len} ký tự.`)
      .max(cnf.title_max_len, `Tiêu đề dài tối đa ${cnf.title_max_len} ký tự.`),
    long_title: z
      .string()
      .min(cnf.long_title_min_len, `Mô tả cần tối thiểu ${cnf.long_title_min_len} ký tự`)
      .max(cnf.long_title_max_len, `Mô tả dài tối đa ${cnf.long_title_max_len} ký tự`),
    content: z
      .string()
      .min(cnf.content_min_len, `Nội dung cần tối thiểu ${cnf.content_min_len} ký tự`)
      .max(cnf.content_max_len, `Nội dung dài tối đa ${cnf.content_max_len} ký tự`),
    image: z.instanceof(File).optional(),
    category_id: z.any(),
    is_draft: z.boolean().optional(),
    video: z.string().optional()
  } satisfies Record<keyof topicdto_CreateTopicReq, z.ZodTypeAny>);
}

export const useCreateTopicReqSchema = () => {
  const cnf = useTopicContentCnf();
  return getCreateTopicReqSchema(cnf);
};

export type CreateTopicReq = z.infer<ReturnType<typeof getCreateTopicReqSchema>>;
