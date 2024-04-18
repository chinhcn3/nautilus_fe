import {topicdto_TopicExtraResp} from '../../openapi/models/topicdto_TopicExtraResp';
import {SAMPLE_contentdto_UserResp} from '../contentdto/contentdto_UserResp';
import {SAMPLE_contentdto_TopicResp} from '../contentdto/contentdto_TopicResp';
import {SAMPLE_entity_LuckyDraw} from '../entity/entity_LuckyDraw';
import {SAMPLE_giftdto_GiftResp} from '../giftdto/giftdto_GiftResp';
import {SAMPLE_entity_TopicStats} from '../entity/entity_TopicStats';
import {SAMPLE_topicdto_TopicCurrentUserResp} from '@/common/openapi-samples/topicdto/topicdto_TopicCurrentUserResp';

export const SAMPLE_topicdto_TopicExtraResp: topicdto_TopicExtraResp = {
  users: {
    '1': SAMPLE_contentdto_UserResp
  },
  related_topics: [SAMPLE_contentdto_TopicResp],
  lucky_draw: SAMPLE_entity_LuckyDraw,
  lucky_draw_gift: SAMPLE_giftdto_GiftResp,
  topic_stats: SAMPLE_entity_TopicStats,
  topic_code:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTMxMTI5ODgsImp0aSI6IjEyMyIsImlhdCI6MTcxMzEwOTM4OCwidGlkIjoxMjMsImFpZCI6MiwidWlkIjoyfQ.oR2dRA3FztqAdl1LQYq6zDHgqI-bNV9Uzyk99-XbPi4',
  current_user: SAMPLE_topicdto_TopicCurrentUserResp
};
