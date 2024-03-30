/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { contentdto_CategoryResp } from './contentdto_CategoryResp';
import type { contentdto_HomeConfigResp } from './contentdto_HomeConfigResp';
import type { contentdto_TopicResp } from './contentdto_TopicResp';
import type { contentdto_UserResp } from './contentdto_UserResp';
import type { entity_HashTag } from './entity_HashTag';

export type contentdto_HomeContentResp = {
  categories?: Record<string, contentdto_CategoryResp>;
  config?: contentdto_HomeConfigResp;
  deal_topics?: Array<contentdto_TopicResp>;
  last_review_topics?: Array<contentdto_TopicResp>;
  lucky_gift_topics?: Array<contentdto_TopicResp>;
  main_topics?: Array<contentdto_TopicResp>;
  quick_topics?: Array<contentdto_TopicResp>;
  top_hash_tags?: Array<entity_HashTag>;
  top_review_topics?: Array<contentdto_TopicResp>;
  top_topics?: Array<contentdto_TopicResp>;
  top_video_topics?: Array<contentdto_TopicResp>;
  users?: Record<string, contentdto_UserResp>;
};

