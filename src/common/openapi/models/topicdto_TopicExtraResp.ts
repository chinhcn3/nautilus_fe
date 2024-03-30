/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { contentdto_TopicResp } from './contentdto_TopicResp';
import type { contentdto_UserResp } from './contentdto_UserResp';
import type { entity_LuckyDraw } from './entity_LuckyDraw';
import type { entity_TopicStats } from './entity_TopicStats';
import type { giftdto_GiftResp } from './giftdto_GiftResp';
import type { topicdto_TopicCurrentUserResp } from './topicdto_TopicCurrentUserResp';

export type topicdto_TopicExtraResp = {
  /**
   * Personal fields
   */
  current_user?: topicdto_TopicCurrentUserResp;
  lucky_draw?: entity_LuckyDraw;
  lucky_draw_gift?: giftdto_GiftResp;
  related_topics?: Array<contentdto_TopicResp>;
  topic_code?: string;
  topic_stats?: entity_TopicStats;
  users?: Record<string, contentdto_UserResp>;
};

