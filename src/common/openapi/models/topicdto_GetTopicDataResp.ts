/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { contentdto_CategoryResp } from './contentdto_CategoryResp';
import type { contentdto_TopicResp } from './contentdto_TopicResp';
import type { contentdto_UserResp } from './contentdto_UserResp';

export type topicdto_GetTopicDataResp = {
  categories?: Record<string, contentdto_CategoryResp>;
  topic?: contentdto_TopicResp;
  users?: Record<string, contentdto_UserResp>;
};

